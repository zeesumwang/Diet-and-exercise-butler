Page({
  data: {
    showModal_1: false,
    showModal_2: false,
    showModal_3: false,

  },
  onLoad: function () {
  },
  /**
   * 弹窗
   */
  showDialogBtn_1: function () {


    this.setData({
      showModal_1: true
    })
  },
  showDialogBtn_2: function () {


    this.setData({
      showModal_2: true
    })
  },
  showDialogBtn_3: function () {


    this.setData({
      showModal_3: true
    })
  },
  /**
   * 弹出框蒙层截断touchmove事件
   */
  preventTouchMove: function () {
  },
  /**
   * 隐藏模态对话框
   */
  hideModal_1: function () {
    this.setData({
      showModal_1: false
    });
  },
  hideModal_2: function () {
    this.setData({
      showModal_2: false
    });
  },
  hideModal_3: function () {
    this.setData({
      showModal_3: false
    });
  },
  /**
   * 对话框取消按钮点击事件
   */
  onCancel_1: function () {
    this.hideModal_1();
  },
  onCancel_2: function () {
    this.hideModal_2();
  },
  onCancel_3: function () {
    this.hideModal_3();
  },
  /**
   * 对话框确认按钮点击事件
   */
  onConfirm_1: function () {
    wx.showToast({
      title: '成功',
    })
    this.hideModal_1();
  },
  onConfirm_2: function () {
    wx.showToast({
      title: '成功',
    })
    this.hideModal_2();
  },
  onConfirm_3: function () {
    wx.showToast({
      title: '成功',
    })
    this.hideModal_3();
  }
})