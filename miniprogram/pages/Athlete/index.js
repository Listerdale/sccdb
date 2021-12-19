// pages/Athlete/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    a:[],
    p:[],
    ifE:0,
    iArray:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  async onLoad(options){
    wx.showLoading({title: '加载中',})
    var pid0 = options.athleteid
    var that = this
    that.setData({ifE:0})
    if(pid0.slice(0,1)=='M'){that.setData({ifE:1})}
    const db0 = wx.cloud.database()
    let temp0 = []
    let listP0 = await db0.collection('Total').where({pid:pid0}).get()
    temp0 = listP0.data    
    that.setData({p:temp0})
    const db1 = wx.cloud.database()
    let temp = []
    let listP = await db1.collection('21I').where({pid:pid0}).get()
    temp = listP.data    
    that.setData({a:temp})

    const db2 = wx.cloud.database()
    let count = await db2.collection('Total').count()
    count = count.total
    let all = []
    for (let i = 0; i < count; i += 20){
      let list = await db2.collection('Total').skip(i).get()
      all = all.concat(list.data)
    }
    that.setData({iArray:all})    
    for (var s in that.data.iArray) {
      let i = 'iArray[' + s + '].ifex'
      that.setData({[i]: 0})
    }
    for (var index in that.data.iArray) {
      var ifn = that.data.iArray[index].pid.indexOf(pid0)
      let i = 'iArray[' + index + '].ifex'
      if (ifn != -1) {that.setData({[i]: 1})}
    }
    wx.hideLoading()
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