// pages/selectsport/selectsport.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    array: ['20分钟', '25分钟', '30分钟', '35分钟','40分钟','45分钟','50分钟','55分钟','60分钟'],
    objectArray: [
      {
        id: 0,
        name: '20分钟 '
      },
      {
        id: 1,
        name: '25分钟'
      },
      {
        id: 2,
        name: '30分钟'
      },
      {
        id: 3,
        name: '40分钟'
      },
      {
        id: 4,
        name:'45分钟'
      },
      {
        id: 5,
        name: '50分钟'
      },
      {
        id: 6,
        name: '55分钟'
      },
      {
        id:7,
        name: '60分钟'
      }
    ],
    index: 0,
    index1:0,
    index2:0,
    index3:0,
  },
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  }, 
  bindPickerChange1: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index1: e.detail.value
    })
  },
  bindPickerChange2: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index2: e.detail.value
    })
  },
  bindPickerChange3: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index3: e.detail.value
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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