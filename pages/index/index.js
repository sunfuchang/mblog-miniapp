//index.js
//获取应用实例
const app = getApp()
console.log(app.globalData);

Page({
  // 页面初始数据
  data: {
    motto: 'Hello小程序',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    array: ['java', 'python', 'c++', 'js'],
    view: 'java',
    staffA: { firstName: 'Hulk', lastName: 'Hu' },
    staffB: { firstName: 'Shang', lastName: 'You' },
    staffC: { firstName: 'Gideon', lastName: 'Lin' }
  },
  // =================生命周期函数=================
  // 页面加载完成触发
  onLoad: function (options) {
    console.log('onLoad : ' + options);
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  // 页面初次渲染完成触发
  onReady: function () {
    console.log('onReady');
  },
  // 页面显示触发
  onShow: function () {
    console.log('onShow');
  },
  // 页面隐藏触发
  onHide: function () {
    console.log('onHide');
  },
  // 页面卸载触发
  onUnload: function () {
    console.log('onUnload');
  },
  // =================事件处理函数=================
  // 页面下拉事件
  onPullDownRefresh: function () {
    console.log('onPullDownRefresh');
    setTimeout(function () {
      wx.stopPullDownRefresh();
    }, 1000);
  },
  // 上拉触底
  onReachBottom: function () {
    console.log('onReachBottom');
  },
  // 点击右上角转发
  onShareAppMessage: function () {
    console.log('onShareAppMessage');
    // var page = getCurrentPages();
    // console.log(page[0].route);
    console.log(this.route); // 当前页面的路径
    return {
      title: '火星技术站', // 小程序名称
      path: '/' + this.route // 以/开头的完成路径
    };
  },
  // 页面滚动处理
  onPageScroll: function (params) {
    console.log('onPageScroll : ' + params.scrollTop);
  },
  // 当前是 tab 页时，点击 tab 时触发
  onTabItemTap: function (item) {
    console.log('onTabItemTap');
    console.log('item.index : ' + item.index);
    console.log('item.pagePath : ' + item.pagePath);
    console.log('item.text : ' + item.text);
  },
  // =================自定义函数或数据=================
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})