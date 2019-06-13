// pages/user/user.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    flag: false
  },
  phone(e) {
    console.log(e);
    this.setData({
      flag: true
    })
    wx.showModal({
      title: '提示',
      content: '是否绑定号码',
      success(res) {
        if (res.confirm) {
          console.log('用户点击确定')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },
  huiyuanka(e) {
    console.log(e);
    var value = e.currentTarget.dataset.value;
    wx.navigateTo({
      url: '../user-info/user-info?value=' + value
      // url: '../user-info/user-info'
    })
  },
  gradeStore() {
    wx.navigateTo({
      url: '../user-grade/user-grade'
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    wx.setNavigationBarTitle({
      title: '会员中心'
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  }
  ,




  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})