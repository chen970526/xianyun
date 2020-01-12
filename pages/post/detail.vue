<template>
  <div class="container">
    <div class="main">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">旅游攻略</el-breadcrumb-item>

        <el-breadcrumb-item>攻略详情</el-breadcrumb-item>
      </el-breadcrumb>
      <h1>{{container.title}}</h1>
      <div class="post-info">
        <span>攻略：{{container.created_at |dataFormat('-')}} {{container.created_at |datatime(':')}}</span>
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
      <div class="cmt-wrapper">
        <h4 class="cmt-title">评论</h4>
        <div class="cmt-input">
          <div class="el-textarea">
            <el-input
              type="textarea"
              :rows="2"
              placeholder="说点什么吧..."
              v-model="textarea"
              resize="none"
            ></el-input>
          </div>
        </div>
        <div class="cmt-input-ctrls">
          <div class="cmt-pics">
            <el-upload
              action="http://127.0.0.1:1337/upload"
              list-type="picture-card"
              :on-preview="handlePictureCardPreview"
              :on-remove="handleRemove"
              name="files"
            >
              <i class="el-icon-plus"></i>
            </el-upload>
            <el-dialog :visible.sync="dialogVisible">
              <img width="100%" :src="dialogImageUrl" alt />
            </el-dialog>
          </div>
          <div>
            <el-button type="primary" class="cmt-submit el-button--primary el-button--mini">提交</el-button>
          </div>
        </div>
      </div>
    </div>
    <div class="aside">
      <h4>相关攻略</h4>
      <div class="recommend-list">
        <a href="#" class="recommend-item" v-for="(item,index) in postdata" :key="index">
          <div class="post-imgText">
            <div class="post-img">
              <img :src="item.images[0]" alt />
            </div>
            <div class="post-text">
              <div class="text">{{item.title}}</div>
              <p>{{item.created_at |dataFormat('-')}} {{item.created_at |datatime(':')}} 阅读:{{item.watch}}</p>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { dataFormat, datatime } from '@/store/myfilters.js'
export default {
  data() {
    return {
      container: {},
      postdata: [],
      id: '',
      textarea: '',
      //图片上传参数
      dialogImageUrl: '',
      dialogVisible: false
    }
  },
  filters: {
    dataFormat,
    datatime
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
      // console.log(this.container)
    })
    this.$axios({
      url: '/posts/recommend'
    }).then(res => {
      console.log(res)
      this.postdata = res.data.data
    })
  },
  methods: {
    //图片上传触发
    handleRemove(file, fileList) {
      console.log(file, fileList)
    },
    handlePictureCardPreview(file) {
      console.log(file)

      this.dialogImageUrl = file.url
      this.dialogVisible = true
    },
    coverSuccess(response) {
      console.log(response)
    }
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
    .cmt-wrapper {
      margin-bottom: 20px;
      .cmt-title {
        font-weight: 400;
        font-size: 18px;
        margin-bottom: 20px;
      }
      .cmt-input {
        margin-bottom: 10px;
        .el-textarea {
          display: inline-block;
          width: 100%;
          vertical-align: bottom;
          font-size: 14px;
        }
      }
      .cmt-input-ctrls {
        justify-content: space-between;
        display: flex;
        box-sizing: border-box;
        margin-bottom: 30px;
        .cmt-pics {
        }
      }
    }
  }
  .aside {
    width: 280px;
    h4 {
      font-weight: 400;
      font-size: 18px;
      padding-bottom: 10px;
      border-bottom: 1px solid #ddd;
    }
    .recommend-list {
      .recommend-item {
        display: block;
        padding: 20px 0;
        border-bottom: 1px solid #ddd;
        .post-imgText {
          display: flex;
          box-sizing: border-box;
          .post-img {
            align-items: center;
            display: flex;
            width: 100px;
            height: 80px;
            flex-shrink: 0;
            background: #ddd;
            overflow: hidden;
            margin-right: 10px;
            img {
              width: 100%;
              height: 100%;
              object-fit: cover;
            }
          }
          .post-text {
            flex: 1;
            position: relative;
            .text {
              position: relative;
              line-height: 1.4em;
              height: 2.8em;
              overflow: hidden;
              position: absolute;
              left: 0;
              top: 0;
              width: 100%;
            }
            p {
              position: absolute;
              bottom: 0;
              left: 0;
              font-size: 12px;
              color: #999;
            }
          }
        }
      }
    }
  }
}
</style>