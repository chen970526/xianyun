<template>
  <div class="container">
    <div class="w">
      <div class="main">
        <h2>发表新攻略</h2>
        <p>分享你的个人游记，让更多人看到哦！</p>

        <el-form
          :model="ruleForm"
          status-icon
          :rules="rules"
          ref="ruleForm"
          label-width="100px"
          class="demo-ruleForm"
        >
          <el-form-item>
            <el-input v-model="ruleForm.title" autocomplete="off" placeholder="请输入标题"></el-input>
          </el-form-item>
          <el-form-item>
            <VueEditor :config="config" v-model="ruleForm.content" />
          </el-form-item>
          <el-form-item label="选择城市">
            <el-input v-model="ruleForm.city"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
          </el-form-item>
        </el-form>
      </div>
      <div class="aside"></div>
    </div>
  </div>
</template>

<script>
import VueEditor from 'vue-word-editor'
import 'quill/dist/quill.snow.css'
export default {
  components: {
    VueEditor
  },
  data() {
    var checkAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('年龄不能为空'))
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error('请输入数字值'))
        } else {
          if (value < 18) {
            callback(new Error('必须年满18岁'))
          } else {
            callback()
          }
        }
      }, 1000)
    }
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass')
        }
        callback()
      }
    }
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.ruleForm.pass) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      ruleForm: {
        title: '',
        content: '',

        city: ''
      },
      rules: {
        pass: [{ validator: validatePass, trigger: 'blur' }],
        checkPass: [{ validator: validatePass2, trigger: 'blur' }],
        age: [{ validator: checkAge, trigger: 'blur' }]
      },
      config: {
        // 上传图片的配置
        uploadImage: {
          url: 'http://127.0.0.1:1337/upload',
          name: 'files',
          // res是结果，insert方法会把内容注入到编辑器中，res.data.url是资源地址
          uploadSuccess(res, insert) {
            insert('http://localhost:3000' + res.data.url)
          }
        },

        // 上传视频的配置
        uploadVideo: {
          url: 'http://127.0.0.1:1337/upload',
          name: 'files',
          uploadSuccess(res, insert) {
            insert('http://localhost:3000' + res.data.url)
          }
        }
      }
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>

<style scoped lang='less'>
.container {
  width: 1000px;
  margin: 0 auto;
  padding: 20px 0;
  .w {
    justify-content: space-between;
    display: flex;
    box-sizing: border-box;
    .main {
      width: 750px;
      h2 {
        font-weight: 400;
        font-size: 22px;
        margin-bottom: 10px;
      }
      p {
        font-size: 12px;
        color: #999;
        margin-bottom: 10px;
      }
    }
  }
}
</style>