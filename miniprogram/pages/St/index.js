// pages/St/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    titleSrc:[],//头图
    mList:[]//分组列表
  },

  /**
   * 生命周期函数--监听页面加载
   */
  async onLoad(options){
    var C = options.Code
    const cList = "list"
    var iC = cList.concat(C)//生成参数
    wx.showLoading({title: '加载中'})
    var that = this
    that.setData({titleSrc:[],mList:[]})//初始化
    //传递参数获取头图链接
    const db1 = wx.cloud.database()
    let temp = []
    let listP = await db1.collection('imageUrl').where({ys:C}).get()
    temp = listP.data    
    that.setData({titleSrc:temp})
    //获取各组列表
    const db2 = wx.cloud.database()
    let count = await db2.collection(iC).count()
    count = count.total
    let all = []
    for (let i = 0; i < count; i += 20){
      let listI = await db2.collection(iC).skip(i).get()
      all = all.concat(listI.data)
    }
    that.setData({mList:all})
    wx.hideLoading()
  },
  
  //跳转至成绩页
  clickTo:function(e){
    wx.navigateTo({
      url: '/pages/result/index?item='+e.currentTarget.dataset.mid,
    })
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