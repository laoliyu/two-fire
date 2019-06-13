// pages/Take-out/Take-out.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    "bnrUrl": [{
      "url": "../../images/bg1.jpg"
    }, {
      "url": "../../images/bg2.jpg"
    }, {
      "url": "../../images/bg3.jpg"
    }, {
      "url": "../../images/bg1.jpg"
    }],
    hotKeyword: ['小吃快餐', '奶茶', '面包甜点', '咖啡', '餐饮', '可以刷卡', '无线上网', '有下午茶', '微信支付']
  },
  map: function (e) {
    wx.navigateTo({
      url: '../map/map'
    })
  },
  menu: function (e) {
    wx.navigateTo({
      url: '../menu/menu'
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

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

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