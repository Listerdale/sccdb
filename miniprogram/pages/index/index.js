//index.js

Page({
  data:{
    titleSrc:"https://cloud1-8gqdkxsy5b927768-1307885281.tcloudbaseapp.com/images/titleIndex.PNG?sign=d015217a0860a656c327a4837d87b0b6&t=1639559567",
    yearList:[]
  },
  toSt2:function(){
    wx.navigateTo({
      url: '/pages/St2/index',
    })
  },  
  toSt3:function(){
    wx.navigateTo({
      url: '/pages/St3/index',
    })
  },
  async onLoad(options){
    var that = this
    const db = wx.cloud.database()
    let count = await db.collection('yearList').count()
    count = count.total
    let all = []
    for (let i = 0; i < count; i += 20){
      let list = await db.collection('yearList').skip(i).get()
      console.log(list.data)
      all = all.concat(list.data)
    }
    that.setData({
      yearList:all,
    })
    console.log(that.data.yearList)
  }
})
