// pages/foodhistory/foodhistory.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    date: '2016-09-01',
    date1: '2016-09-01',
    sanjiao: "/images/sanjiao.png",
    juxing: "/images/juxing.png",
    Data: [],
  },

  createSimulationData: function () {
    var categories = [];
    var data = [];
    var a;
    var Data = [];
    for (var i = 0; i < 9; i++) {
      categories.push('02-0' + (i + 1));
      a = Math.random() * (1000) + 10;
      a = a.toFixed(0);
      data.push(a);
      Data = Data.concat([{ data: a, date: '02-0' + (i + 1) }]);
    }
    this.setData({ Data: Data });
    return {
      categories: categories,
      data: data
    }
  },

  // 日期事件
  bindDateChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date: e.detail.value
    })
  },
  bindDateChange1: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date1: e.detail.value
    })
  },
  // 表单事件
  formSubmit: function (e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
  },
  formReset: function () {
    console.log('form发生了reset事件')
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.createSimulationData();
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