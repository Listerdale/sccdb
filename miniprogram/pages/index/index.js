//index.js

Page({
  data:{
    titleSrc:"https://cloud1-8gqdkxsy5b927768-1307885281.tcloudbaseapp.com/images/titleIndex.PNG?sign=d015217a0860a656c327a4837d87b0b6&t=1639559567",
    yearList:['2021'],
    yearIndex:0,
    stList:[],
    applyAdd:''
  },

  yearChanged:function(e){
    var that = this
    that.setData({
      yearIndex: e.detail.value
    })
    that.getStList(that.data.yearIndex)
  },

  onLoad(){
    var that = this
    that.getStList(that.data.yearIndex)
    const db = wx.cloud.database()
    db.collection('applyAdd').doc('767fe18e61bdb1420044a9b24fd865a7').get({
      success:function(res){that.setData({applyAdd:res.data.applyAdd})
      } 
    })
  },
  
  async getStList(index){
    wx.showLoading({
      title: '加载中',
    })
    var that = this
    const c = 'stList'
    var st = c.concat(that.data.yearList[index])
    const db = wx.cloud.database()
    let count = await db.collection(st).count()
    count = count.total
    let all = []
    for (let i = 0; i < count; i += 20){
      let list = await db.collection(st).skip(i).get()
      all = all.concat(list.data)
    }
    that.setData({
      stList:all,
    })
    wx.hideLoading()
    return 0
  },

  tost:function(e){
    wx.navigateTo({
      url: '/pages/St/index?Code='+e.currentTarget.dataset.stid,
    })
  },
  toapply(){
    wx.navigateTo({
      url: '/pages/apply-out/index?Add='+this.data.applyAdd,
    })
  }
})
