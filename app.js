//app.js
App({
  // =================生命周期函数=================
  // 小程序初始化完成后触发，仅一次，page未生成
  onLaunch: function (params) {
    console.log(params);
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  // 启动或从后台进入前台时触发
  onShow: function (params) {
    console.log('onShow : ' + params.path);
  },
  // 前台进入后台时触发
  onHide: function () {
    console.log('onHide');
  },
  // 错误监听，脚本错误或api调用失败触发
  onError: function (msg) {
    console.error("onError:" + msg);
  },
  onPageNotFound: function (path) {
    console.log("onPageNotFound : " + path);
  },
  // =================自定义函数或数据=================
  // 通过this访问
  globalData: {
    userInfo: null
  }
})