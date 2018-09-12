const app = getApp()

Page({
  data: {
    date: "2018-7-12",
    sanjiao: "/images/sanjiao.png",
    kaluli: "1760",
    juxing: "/images/juxing.png",
    juxing1: "/images/juxing1.png",
    jiahao:"/images/+.png",
    bushu:"6231",
    qianka:"136",
    licheng:"3.9"
  },
  bindDateChange: function (e) {
    this.setData({
      date: e.detail.value
    })
  }
})