// components/integralItem/integralitem.js
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
      value:'[排名]'
    },
    Name:{
      type:String,
      value:'[姓名]'
    },
    Integral:{
      type:String,
      value:'[积分]'
    },
    teamLabel:{
      type:String,
      value:'车队'
    },
    Team:{
      type:String,
      value:'[队伍名]'
    },
    StLabel1:{
      type:String,
      value:'第1站'
    },
    StLabel2:{
      type:String,
      value:'第2站'
    },
    StLabel3:{
      type:String,
      value:'第3站'
    },
    StLabel4:{
      type:String,
      value:'第4站'
    },
    StIntegral1:{
      type:String,
      value:'[第1站]'
    },
    StIntegral2:{
      type:String,
      value:'[第2站]'
    },
    StIntegral3:{
      type:String,
      value:'[第3站]'
    },
    StIntegral4:{
      type:String,
      value:'[第4站]'
    },
  },
  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
