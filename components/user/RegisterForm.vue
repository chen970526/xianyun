<template>
  <el-form :model="form" ref="form" :rules="rules" class="form">
    <el-form-item class="form-item" prop="username">
      <el-input placeholder="用户名手机" v-model="form.username"></el-input>
    </el-form-item>

    <el-form-item class="form-item" prop="captcha">
      <el-input placeholder="验证码" v-model="form.captcha">
        <template slot="append">
          <el-button @click="handleSendCaptcha">发送验证码</el-button>
        </template>
      </el-input>
    </el-form-item>

    <el-form-item class="form-item" prop="nickname">
      <el-input placeholder="你的名字" v-model="form.nickname"></el-input>
    </el-form-item>

    <el-form-item class="form-item" prop="password">
      <el-input placeholder="密码" type="password" v-model="form.password"></el-input>
    </el-form-item>

    <el-form-item class="form-item" prop="checkPassword">
      <el-input placeholder="确认密码" type="password" v-model="form.checkPassword"></el-input>
    </el-form-item>

    <el-button class="submit" type="primary" @click="handleRegSubmit">注册</el-button>
  </el-form>
</template>

<script>
export default {
  data() {
    return {
      // 表单数据
      form: {
        username: '', // 用户名手机
        nickname: '', // 你的名字
        captcha: '', // 验证码
        password: '', // 密码
        checkPassword: '' // 确认密码
      },
      // 表单规则
      rules: {
        username: [
          {
            required: true,
            message: '请输入用户名',
            trigger: 'blur'
          }
        ],
        password: [
          {
            required: true,
            message: '请输入密码',
            trigger: 'blur'
          }
        ],
        checkPassword: [
          {
            validator: validatePass,
            trigger: 'blur'
          }
        ],
        nickname: [
          {
            required: true,
            message: '请输入昵称',
            trigger: 'blur'
          }
        ],
        captcha: [
          {
            required: true,
            message: '请输入验证码',
            trigger: 'blur'
          }
        ]
      }
    }
    const validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.form.password) {
        callback(new Error('密码不一致'))
      } else {
        callback()
      }
    }
  },
  methods: {
    // 发送验证码
    handleSendCaptcha() {
      if (!this.form.username) {
        this.$confirm('手机号码不能为空', '提示', {
          confirmButtonText: '确定', // 确认按钮的文本
          showCancelButton: false, // 显示取消按钮
          type: 'warning' // 弹框的类型
        })
        return
      }
      var meg = /^1[3~9]\d{9}$/

      if (!meg.test(this.form.username)) {
        this.$confirm('请输入11位手机号', '提示', {
          confirmButtonText: '确定', // 确认按钮的文本
          showCancelButton: false, // 显示取消按钮
          type: 'warning' // 弹框的类型
        })
      }
      this.$axios({
        url: `/captchas`,
        method: 'POST',
        data: {
          tel: this.form.username
        }
      }).then(res => {
        console.log(res)
        this.$alert(`模拟验证码${res.data.code}`, '提示', {
          confirmButtonText: '确定', // 确认按钮的文本
          showCancelButton: false, // 显示取消按钮
          type: 'success ' // 弹框的类型
        })
      })
    },

    // 注册
    handleRegSubmit() {
      // console.log(this.form)

      this.$refs['form'].validate(valid => {
        console.log(valid)

        if (valid) {
          // 注册提交
          const { checkPassword, ...props } = this.form
          console.log(props)

          this.$axios({
            url: `/accounts/register`,
            method: 'POST',
            data: props
          }).then(res => {
            console.log(res.data)
            this.$message.success('注册成功')
          })
        }
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