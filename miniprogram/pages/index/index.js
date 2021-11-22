//index.js

Page({
  data:{
    titleSrc:"https://cloud1-8gqdkxsy5b927768-1307885281.tcloudbaseapp.com/images/title.png?sign=2e8851b640ad286cf1f2655dce208b1d&t=1637333705"
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
  }
})
