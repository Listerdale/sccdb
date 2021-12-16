// components/resultElite/resultElite.js
Component({
  /**
   * 组件的属性列表
   */
  options: {
    options:{
      multipleSlots:true
    },
  },
  properties: {
    Rank:{
      type:String,
      value:'[名次]'
    },
    Bib:{
      type:String,
      value:'[号码]'
    },
    Name:{
      type:String,
      value:'[姓名]'
    },
    Total:{
      type:String,
      value:'[成绩]'
    },
    teamLabel:{
      type:String,
      value:'队伍'
    },
    Team:{
      type:String,
      value:'[队伍名]'
    },
    diffLabel:{
      type:String,
      value:'差距'
    },
    Diff:{
      type:String,
      value:'[差距]'
    },    
    speedLabel:{
      type:String,
      value:'平均速度'
    },
    Speed:{
      type:String,
      value:'[平均速度]'
    },
  },
  /**
   * 组件的初始数据
   */
  data: {
    isShow:false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    showItem(){
      this.setData({
        isShow: !this.data.isShow
      })
    },
  }
})