// pages/Integral/index.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    integralArray:[]//积分数组
  },

  //加载页面调用，获取服务器积分数据
  async onLoad(){
    wx.showLoading({title: '加载中'})
    var that = this
    const db = wx.cloud.database()
    let count = await db.collection('21I').count()
    count = count.total
    let all = []
    for (let i = 0; i < count; i += 20){
      let list = await db.collection('21I').skip(i).get()
      all = all.concat(list.data)
    }
    that.setData({integralArray:all})
    wx.hideLoading()
  }

})