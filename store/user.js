// 保存user下的数据
export const state = {
  userInfo: {}
}

// 同步修改state的数据
export const mutations = {
  setName(state, data) {
    state.userInfo = data
  },
  // 清除用户数据
  cleanUserInfo(state, info) {
    if (process.browser) {
      localStorage.removeItem("userInfo");
    }
    state.userInfo = {};
  }
}


// 异步修改state的数据，存放公共的请求函数，并且该函数可能会修改state的数据（不一定要修改）
export const actions = {
  login(store, data) {
    return this.$axios({
      url: '/accounts/login',
      method: 'POST',
      data
    }).then(res => {
      // console.log(res)
      //登陆成功后返回上一个页面
      this.$router.back()
      // 调用user下的mutations的方法
      store.commit('setName', res.data)
      return true
    })
  }
}
