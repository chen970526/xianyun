<template>
  <div @click="$router.push({path: `post/detail?id=${post.id}`})">
    <div class="post-item" v-if="post.images.length>2">
      <h4>
        <a href="#">{{post.title}}</a>
      </h4>
      <p>
        <a href="#" v-html="post.summary"></a>
      </p>
      <div class="card-images">
        <a href="#">
          <img :src="post.images[0]" alt />
        </a>
        <a href="#">
          <img :src="post.images[1]" alt />
        </a>
        <a href="#">
          <img :src="post.images[2]" alt />
        </a>
      </div>
      <div class="post-info">
        <div class="post-info-left">
          <span>
            <i class="el-icon-location-outline"></i>
            {{post.cityName}}
          </span>
          <div class="post-user">
            by
            <a href="#">
              <img src="http://157.122.54.189:9095/assets/images/avatar.jpg" alt />
            </a>
            <a href="#">{{post.account.nickname}}</a>
          </div>
          <span>
            <i class="el-icon-view"></i>
            {{post.watch}}
          </span>
        </div>
        <span class="post-info-right">74 赞</span>
      </div>
    </div>
    <!-- 状态二 -->
    <div class="post-item1" v-else-if="post.images.length < 3 && post.images.length > 0">
      <div class="card-images">
        <a href="#">
          <img :src="post.images[0]" alt />
        </a>
      </div>
      <div class="text">
        <h4>
          <a href="#">{{post.title}}</a>
        </h4>
        <p>
          <a href="#" v-html="post.summary"></a>
        </p>
        <div class="post-info">
          <div class="post-info-left">
            <span>
              <i class="el-icon-location-outline"></i>
              {{post.cityName}}
            </span>
            <div class="post-user">
              by
              <a href="#">
                <img src="http://157.122.54.189:9095/assets/images/avatar.jpg" alt />
              </a>
              <a href="#">{{post.account.nickname}}</a>
            </div>
            <span>
              <i class="el-icon-view"></i>
              {{post.watch}}
            </span>
          </div>
          <span class="post-info-right">74 赞</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  //   props: {
  //     post: {
  //       type: Object,
  //       default() {
  //         return {}
  //       }
  //     }
  //   }
  props: ['post']
}
</script>

<style scoped lang='less'>
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
.post-item1 {
  align-items: center;
  justify-content: space-between;
  display: flex;
  box-sizing: border-box;
  width: 100%;
  padding: 20px 0;
  border-bottom: 1px solid #eee;
  .card-images {
    width: 220px;
    height: 150px;
    overflow: hidden;
    flex-shrink: 0;
    margin-right: 10px;
    a {
      img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
  .text {
    width: 450px;
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
    }
    .post-info {
      justify-content: space-between;
      display: flex;
      box-sizing: border-box;
      .post-info-left {
        display: flex;
        align-items: center;
        font-size: 12px;
        color: #999;
        span {
          margin-right: 10px;
        }
        .post-user {
          margin-right: 10px;
          align-items: center;
          display: flex;
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
</style>