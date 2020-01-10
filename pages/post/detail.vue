<template>
  <div class="container">
    <div class="main">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">旅游攻略</el-breadcrumb-item>
       
        <el-breadcrumb-item>攻略详情</el-breadcrumb-item>
      </el-breadcrumb>
      <h1>{{container.title}}</h1>
      <div class="post-info">
        <span>攻略：2019</span>
        <span>阅读：{{container.watch}}</span>
      </div>
      <div class="post-content" v-html="container.content"></div>
      <div class="post-ctrl">
        <div class="tu">
          <div class="ctrl-item">
            <i class="el-icon-edit-outline"></i>
            <p>评论(100)</p>
          </div>
          <div class="ctrl-item">
            <i class="el-icon-star-off"></i>
            <p>收藏</p>
          </div>
          <div class="ctrl-item">
            <i class="el-icon-share"></i>
            <p>分享</p>
          </div>
          <div class="ctrl-item">
            <i class="el-icon-thumb"></i>
            <p>点赞(100)</p>
          </div>
        </div>
      </div>
    </div>
    <div class="aside"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      container: {},
      id: ''
    }
  },
  mounted() {
    this.id = this.$route.query.id
    console.log(this.id)

    this.$axios({
      url: '/posts',
      params: {
        id: this.id
      }
    }).then(res => {
      // console.log(res)
      this.container = res.data.data[0]
      console.log(this.container)
    })
  }
}
</script>

<style scoped lang="less">
.container {
  justify-content: space-between;
  display: flex;
  box-sizing: border-box;
  width: 1000px;
  margin: 0 auto;
  padding-top: 20px;
  .main {
    h1 {
      padding: 20px 0;
      border-bottom: 1px solid #ddd;
    }
    .post-info {
      color: #999;
      padding: 20px;
      text-align: right;
    }
    .post-content {
      max-width: 700px !important;
      line-height: 1.5;
      /deep/img {
        max-width: 700px !important;

        margin: 10px 0;
      }
    }
    .post-ctrl {
      padding: 50px 0 30px;
      .tu {
        justify-content: center;
        display: flex;
        box-sizing: border-box;

        .ctrl-item {
          margin: 0 20px;
          font-size: 20px;
          text-align: center;
          cursor: pointer;
          i {
            display: block;
            font-size: 35px;
            color: orange;
          }
          p {
            margin-top: 5px;
            font-size: 14px;
            color: #999;
          }
        }
      }
    }
  }
}
</style>