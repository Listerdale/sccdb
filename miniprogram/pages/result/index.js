// pages/result/index.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    resultArray:[],
    ifp:1
  },
  async onLoad(options){
    var pageItem = options.item
    console.log(options.item)
    wx.showLoading({
      title: '加载中',
    })
    var that = this
    that.setData({ifp:1})
    if(pageItem.slice(-1) == "G"){that.setData({ifp:0})}
    const db = wx.cloud.database({env:'cloud1-8gqdkxsy5b927768'})
    let count = await db.collection(pageItem).count()
    count = count.total
    let all = []
    for (let i = 0; i < count; i += 20){
      let list = await db.collection(pageItem).skip(i).get()
      all = all.concat(list.data)
    }
    that.setData({
      resultArray:all,
    })
    wx.hideLoading()
  }

})