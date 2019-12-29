<template>
  <el-form :model="form" ref="form" :rules="rules" class="form">
    <el-form-item class="form-item" prop="username">
      <el-input placeholder="用户名/手机" v-model="form.username"></el-input>
    </el-form-item>

    <el-form-item class="form-item" prop="password">
      <el-input placeholder="密码" type="password" v-model="form.password"></el-input>
    </el-form-item>

    <p class="form-text">
      <nuxt-link to="#">忘记密码</nuxt-link>
    </p>

    <el-button class="submit" type="primary" @click="handleLoginSubmit">登录</el-button>
  </el-form>
</template>

<script>
export default {
  data() {
    var validatePass = (rule, value, callback) => {
      // console.log(value)

      if (value === '') {
        callback(new Error('手机号不能为空'))
      } else {
        var meg = /^1[3~9]\d{9}$/
        if (!meg.test(value)) {
          callback(new Error('请输入正确的手机号'))
        }
        callback()
      }
    }
    return {
      // 表单数据
      form: {
        username: '13800138000', // 登录用户名/手机/13800138000
        password: '123456' // 登录密码/123456
      },
      // 表单规则
      rules: {
        username: [
          // {
          //   required: true,
          //   message: '请输入用户名',
          //   trigger: 'blur'
          // },
          { validator: validatePass, trigger: 'blur' }
        ],
        password: [
          {
            required: true,
            message: '请输入密码',
            trigger: 'blur'
          }
        ]
      }
    }
  },
  methods: {
    // 提交登录
    handleLoginSubmit() {
      // console.log(this.form)
      // 验证表单
      this.$refs['form'].validate(valid => {
        // 为true表示没有错误
        if (!valid) {
          return
        }
        // console.log(this.form)

        // 调用actions的登陆方法
        this.$store.dispatch('user/login', this.form)
      })
    }
  }
}
</script>

<style scoped lang="less">
.form {
  padding: 25px;
}

.form-item {
  margin-bottom: 20px;
}

.form-text {
  font-size: 12px;
  color: #409eff;
  text-align: right;
  line-height: 1;
}

.submit {
  width: 100%;
  margin-top: 10px;
}
</style>
