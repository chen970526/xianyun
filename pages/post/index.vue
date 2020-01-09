<template>
  <div class="lv-you">
    <el-form class="go">
      <el-container>
        <el-aside>
          <div class="menus">
            <div class="a">热门城市</div>
            <div class="a">推荐城市</div>
            <div class="a">奔向海岛</div>
            <div class="a">主题推荐</div>
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
              <el-button type="primary" icon="el-icon-edit">写游记</el-button>
            </div>
            <div class="post-item">
              <h4>
                <a href="#">塞班贵？一定是你的打开方式不对！6000块玩转塞班</a>
              </h4>
              <p>
                <a
                  href="#"
                >大家对塞班岛总存在着这样的误解，知道它是美属地盘，就理所当然地觉得这里的花费一定很高，花费高有高的玩法，那如果只有6000块的预算呢？要怎么玩？关于旅行这件事，我们要让钱花得更有道理，收下这份攻略，带你6000块花式玩转塞班。图：塞班岛。 by第5季旅游一、怎样用6000块玩转塞班？大多数出境游客人不做预算或最</a>
              </p>
              <div class="card-images">
                <a href="#">
                  <img
                    src="https://n3-q.mafengwo.net/s10/M00/E8/E4/wKgBZ1octoCABhgLAAafahORRLs91.jpeg?imageView2%2F2%2Fw%2F1360%2Fq%2F90"
                    alt
                  />
                </a>
                <a href="#">
                  <img
                    src="https://n3-q.mafengwo.net/s10/M00/E8/E4/wKgBZ1octoCABhgLAAafahORRLs91.jpeg?imageView2%2F2%2Fw%2F1360%2Fq%2F90"
                    alt
                  />
                </a>
                <a href="#">
                  <img
                    src="https://n3-q.mafengwo.net/s10/M00/E8/E4/wKgBZ1octoCABhgLAAafahORRLs91.jpeg?imageView2%2F2%2Fw%2F1360%2Fq%2F90"
                    alt
                  />
                </a>
              </div>
              <div class="post-info">
                <div class="post-info-left">
                  <span>
                    <i class="el-icon-location-outline"></i>
                    北京市
                  </span>
                  <div class="post-user">
                    by
                    <a href="#">
                      <img src="http://157.122.54.189:9095/assets/images/avatar.jpg" alt />
                    </a>
                    <a href="#">地球发动机</a>
                  </div>
                  <span>
                    <i class="el-icon-view"></i>
                    13009
                  </span>
                </div>
                <span class="post-info-right">74 赞</span>
              </div>
            </div>
          </el-main>
        </el-container>
      </el-container>
    </el-form>
  </div>
</template>


<script>
export default {
  data() {
    return {
      search: ''
    }
  },
  mounted() {
    this.$axios({
      url: '/posts/recommend'
    }).then(res => {
      console.log(res)
    })
  }
}
</script>


<style lang='less'>
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
  .post-item {
    width: 100%;
    padding: 20px 0;
    border-bottom: 1px solid #eee;
    h4 {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      margin-bottom: 15px;
      font-weight: 400;
      font-size: 18px;
    }
    p {
      margin-bottom: 15px;
      line-height: 1.5;
      font-size: 14px;
      height: 63px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      a {
        color: #666;
      }
    }
    .card-images {
      margin: 15px 0;
      align-items: center;
      justify-content: space-between;
      display: flex;
      box-sizing: border-box;
      a {
        img {
          width: 220px;
          height: 150px;
          display: block;
          -o-object-fit: cover;
          object-fit: cover;
        }
      }
    }
    .post-info {
      justify-content: space-between;
      display: flex;
      box-sizing: border-box;
      .post-info-left {
        align-items: center;
        display: flex;
        font-size: 12px;
        color: #999;
        span {
          margin-right: 10px;
        }
        .post-user {
          display: flex;
          align-items: center;
          margin-right: 10px;
          box-sizing: border-box;
          a {
            color: orange;

            img {
              display: block;
              width: 16px;
              height: 16px;
              border-radius: 100px;
              margin: 5px;
            }
          }
        }
      }
      .post-info-right {
        color: orange;
      }
    }
  }
}
.el-aside {
  border-right: none;
  border-bottom: none;
  box-shadow: 0 0 1px #f5f5f5;
  z-index: 2;
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
}
</style>