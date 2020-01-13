<template>
  <div class="lv-you">
    <el-form class="go">
      <el-container>
        <el-aside>
          <div class="menus-body" @mouseleave="mouseleave()">
            <div class="menus">
              <div
                class="a"
                v-for="(item1,index) in cities"
                :key="index"
                @mouseenter="mouseenter(index)"
              >{{item1.type}}</div>
            </div>
            <div class="sub-menus" v-show="sub">
              <ul>
                <li v-for="(item2,index) in children" :key="index">
                  <a href="#">
                    <i>{{index+1}}</i>
                    <strong>{{item2.city}}</strong>
                    <span>{{item2.desc}}</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </el-aside>
        <el-container>
          <el-header>
            <div class="search-wrapper">
              <input type="text" placeholder="请输入想去的地方，比如：'广州'" v-model="search" />
              <i class="el-icon-search"></i>
            </div>
            <div class="search-recommend">
              推荐：
              <a href="#">广州</a>
              <a href="#">上海</a>
              <a href="#">北京</a>
            </div>
          </el-header>
          <el-main>
            <div class="post-title">
              <h4>推荐攻略</h4>
              <el-button
                type="primary"
                icon="el-icon-edit"
                @click="$router.push({path: `post/create`})"
              >写游记</el-button>
            </div>

            <List v-for="(item,index) in dataList" :key="index" :post="item" />
            <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="pageIndex"
              :page-sizes="[3, 5, 10, 15]"
              :page-size="pageSize"
              layout="total, sizes, prev, pager, next, jumper"
              :total="total"
            ></el-pagination>
          </el-main>
        </el-container>
      </el-container>
    </el-form>
  </div>
</template>


<script>
import List from '@/components/post/List.vue'
export default {
  components: {
    List
  },
  data() {
    return {
      sub: false,
      search: '',
      children: '',
      cities: [],
      postdata: [],
      pageSize: 3,
      total: 5,
      pageIndex: 1
    }
  },
  mounted() {
    //城市菜单列表
    this.$axios({
      url: '/posts/cities'
    }).then(res => {
      // console.log(res)
      this.cities = res.data.data
      // console.log(this.cities)
    })
    //推荐文章
    this.$axios({
      url: '/posts'
    }).then(res => {
      // console.log(res)
      this.postdata = res.data.data
      console.log(this.postdata)

      //设置分页的总数
      this.total = res.data.total
    })
  },
  computed: {
    // 计算属性监听函数内部引用实例的属性变化，一旦发生了变化，该函数会重新计算，并且返回新的值
    dataList() {
      // 请求如果还没完成，返回空数组
      if (!this.postdata) return []
      // 计算分页的数据
      return this.postdata.slice(
        (this.pageIndex - 1) * this.pageSize,
        this.pageIndex * this.pageSize
      )
    }
  },
  methods: {
    //鼠标移入
    mouseenter(index) {
      // console.log(123)
      this.sub = true
      this.children = this.cities[index].children
    },
    //鼠标移出
    mouseleave() {
      // console.log(456)
      this.sub = !this.sub
    },
    //分页
    handleSizeChange(value) {
      // console.log(`每页 ${value} 条`)
      this.pageSize = value
    },
    handleCurrentChange(value) {
      // console.log(`当前页: ${value}`)

      this.pageIndex = value
    }
  }
}
</script>


<style scoped lang='less'>
.go {
  width: 1000px;
  margin: 0 auto;
  padding: 20px 0;
}
.el-header {
  margin: 0 0 20px 0;
  .search-wrapper {
    display: flex;
    width: 700px;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    line-height: 40px;
    border: 3px solid orange;
    input {
      flex: 1;
      padding: 0 20px;
      line-height: 40px;
      outline: none;
      border: none;
      background: none;
    }
    i {
      color: orange;
      line-height: 40px;
      font-size: 24px;
      font-weight: 700;
      padding-right: 10px;
    }
  }
  .search-recommend {
    padding: 10px 0;
    font-size: 12px;
    color: #666;
  }
}
.el-main {
  .post-title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    padding-bottom: 10px;
    border-bottom: 1px solid #eee;
    h4 {
      font-weight: 400;
      font-size: 18px;
      color: orange;
    }
    :after {
      display: block;
      content: '';
      width: 72px;
      height: 2px;
      background: orange;
      position: absolute;
      bottom: 0;
      left: 0;
    }
  }
}
.el-container {
  position: relative;
  .el-aside {
    box-shadow: 0 0 1px #f5f5f5;
    z-index: 2;
    .menus-body {
      .menus {
        border: 1px solid #ddd;
        .a {
          line-height: 40px;
          border-bottom: 1px solid #ddd;
          border-right: 1px solid #ddd;
          padding: 0 20px;
          font-size: 14px;
          position: relative;
          z-index: 2;
        }
        :after {
          display: block;
          content: '';
          width: 10px;
          height: 10px;
          border-right: 1px solid #999;
          border-top: 1px solid #999;
          -webkit-transform: rotate(45deg);
          transform: rotate(45deg);
          position: absolute;
          right: 20px;
          top: 15px;
        }
      }
      .sub-menus {
        position: absolute;
        left: 300px;
        top: 0;
        width: 350px;
        padding: 10px 20px;
        box-sizing: border-box;
        background: #fff;
        border: 1px solid #ddd;
        li {
          font-size: 14px;
          line-height: 1.5;
          height: 36px;
          width: 308px;
          a {
            vertical-align: middle;
            i {
              color: orange;
              font-size: 24px;
              font-style: italic;
            }
            strong {
              margin: 0 10px;
              color: orange;
              font-weight: 400;
            }
            span {
              color: #999;
            }
          }
        }
      }
    }
  }
}
</style>