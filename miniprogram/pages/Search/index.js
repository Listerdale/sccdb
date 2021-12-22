// pages/Search/index.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    searchText:'',
    athleteArray:[],
    ab:1
  },

  /**
   * 生命周期函数--监听页面加载
   */
  async onLoad(options) {
    var that = this
    wx.showLoading({title: '加载中',})
    const db2 = wx.cloud.database()
    let count = await db2.collection('Athlete').count()
    count = count.total
    let all = []
    for (let i = 0; i < count; i += 20){
      let list = await db2.collection('Athlete').skip(i).get()
      all = all.concat(list.data)
    }
    that.setData({athleteArray:all})
    wx.hideLoading()
    that.setData({ab:0})
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

  },

  athleteInput: function(e) {
    this.setData({searchText: e.detail.value})
  },

  athleteSearch: function(e) {
    var that = this
    var searchtext = that.data.searchText
    if (searchtext != "") {
      that.setData({ab:1})
      wx.showLoading({title: '加载中'})
      for (var s in that.data.athleteArray) {
      let i = 'athleteArray[' + s + '].ifex'
        that.setData({[i]: 0})
      }
      for (var index in that.data.athleteArray) {
        var ifn = that.data.athleteArray[index].name.indexOf(searchtext)
        let i = 'athleteArray[' + index + '].ifex'
        if (ifn != -1) {
          that.setData({[i]: 1})
        }
      }
      wx.hideLoading()
      that.setData({ab:0})
    } else {
      return 0
    }
  },

  toAthlete: function(e){
    var t = e.currentTarget.dataset.pid
    wx.navigateTo({
      url: '/pages/Athlete/index?athleteid=' + t,
    })
  }
})