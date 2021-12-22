// pages/result/index.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    resultArray:[],//比赛成绩数组
    ifp:1,//判断个人赛（1）/团体赛（0）
    tc:'显示秒差',
    ift:0
  },

  //加载页面调用
  async onLoad(options){
    var pageItem = options.item//接收参数
    wx.showLoading({title: '加载中'})
    var that = this
    that.setData({ifp:1})//初始化
    if(pageItem.slice(-1) == "G"){that.setData({ifp:0})}//判断个人赛/团体赛
    //从服务器获取数据
    const db = wx.cloud.database()
    let count = await db.collection(pageItem).count()
    count = count.total
    let all = []
    for (let i = 0; i < count; i += 20){
      let list = await db.collection(pageItem).skip(i).get()
      all = all.concat(list.data)
    }
    that.setData({resultArray:all})
    wx.hideLoading()
  },

  changeV:function(e){
    var that = this
    if(e.detail.value){that.setData({tc:'显示成绩',ift:1})}
    else{that.setData({tc:'显示秒差',ift:0})}
  }

})