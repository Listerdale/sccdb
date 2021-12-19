//index.js

Page({
  data:{
    titleSrc:"https://cloud1-8gqdkxsy5b927768-1307885281.tcloudbaseapp.com/images/titleIndex.PNG?sign=d015217a0860a656c327a4837d87b0b6&t=1639559567",//头图
    yearList:['2021'],//年份列表
    yearIndex:0,//年份数组对应序号
    stList:[],//各站列表
    applyAdd:'',
    searchText:'输入运动员姓名...',
    athleteArray:[],
    resultArray:[]
  },

  //加载页面触发
  async onLoad(){
    wx.showLoading({title: '加载中',})
    var that = this
    that.getStList(that.data.yearIndex)//调用getStList函数获取该年各站列表
    const db1 = wx.cloud.database()
    db1.collection('applyAdd').doc('767fe18e61bdb1420044a9b24fd865a7').get({
      success:function(res){that.setData({applyAdd:res.data.applyAdd})
      } 
    })
    wx.hideLoading()
  },

  //点击年份列表改变年份
  yearChanged:function(e){
    var that = this
    that.setData({yearIndex: e.detail.value})
    that.getStList(that.data.yearIndex)//调用getStList函数获取该年各站列表
  },

  //获取各站列表
  async getStList(index){
    var that = this
    const c = 'stList'
    var st = c.concat(that.data.yearList[index])//参数生成
    //从服务器获取数据
    const db = wx.cloud.database()
    let count = await db.collection(st).count()
    count = count.total
    let all = []
    for (let i = 0; i < count; i += 20){
      let list = await db.collection(st).skip(i).get()
      all = all.concat(list.data)
    }
    that.setData({stList:all})
    return 0
  },

  //跳转至各站
  tost:function(e){
    wx.navigateTo({
      url: '/pages/St/index?Code='+e.currentTarget.dataset.stid,
    })
  },

  toapply(){
    wx.navigateTo({
      url: '/pages/apply-out/index?Add='+this.data.applyAdd,
    })
  },

  toSearch(){
    wx.navigateTo({
      url: '/pages/Search/index',
    })
  }
})
