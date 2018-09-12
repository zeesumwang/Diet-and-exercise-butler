Page({
  data: {
    date:'2018-02-15',
    sanjiao:'/images/sanjiao.png',
    hot_num: 0,       //摄入热量总和
    protein_num: 0,    //摄入蛋白质总和
    fat_num: 0,          //摄入脂肪总和
    chyd_num: 0,        //摄入碳水化合物总和

    // 早餐数值
    bre_hot: 120,
    bre_protein_num: 50,
    bre_chyd_num: 90,
    bre_fat_num: 10,
    food1_name: '主食类',
    food1_num: 116,
    food1_hot_num: 21,


    //上午加餐数值
    bre2_hot: 90,
    bre2_protein_num: 80,
    bre2_chyd_num: 69,
    bre2_fat_num: 30,
    bre2_food1_name: '果蔬类',
    bre2_food1_num: 430,
    bre2_food1_hot_num: 500,

    // 午餐数值
    lun_hot: 130,
    lun_protein_num: 80,
    lun_chyd_num: 100,
    lun_fat_num: 10,
    lun_food1_name: '主食类',
    lun_food1_num: 145,
    lun_food1_hot_num: 78,

    // 下午加餐数值
    lun2_hot: 100,
    lun2_protein_num: 70,
    lun2_chyd_num: 98,
    lun2_fat_num: 45,
    lun2_food1_name: '肉类',
    lun2_food1_num: 157,
    lun2_food1_hot_num: 223,

    // 晚餐数值
    din_hot: 400,
    din_protein_num: 20,
    din_chyd_num: 30,
    din_fat_num: 10,
    din_food1_name: '肉类',
    din_food1_num: 80,
    din_food1_hot_num: 300,

    // 晚上加餐数值
    din2_hot: 200,
    din2_protein_num: 10,
    din2_chyd_num: 50,
    din2_fat_num: 5,
    din2_food1_name: '果蔬类',
    din2_food1_num: 200,
    din2_food1_hot_num: 100,
  },
  bindPickerChange_sj: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value);
    this.setData({     //给变量赋值
      date: e.detail.value,  //每次选择了下拉列表的内容同时修改下标然后修改显示的内容，显示的内容和选择的内容一致
    })
    console.log('自定义值:', this.data.date);
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 将摄入的各项值相加，得到各项值的摄入总量
    this.data.hot_num = Number(this.data.bre_hot) + this.data.bre2_hot + this.data.lun_hot +
      this.data.lun2_hot + this.data.din_hot + this.data.din2_hot,
      this.data.protein_num = Number(this.data.bre_protein_num) + this.data.bre2_protein_num + this.data.lun_protein_num +
      this.data.lun2_protein_num + this.data.din_protein_num + this.data.din2_protein_num,
      this.data.fat_num = Number(this.data.bre_fat_num) + this.data.bre2_fat_num + this.data.lun_fat_num +
      this.data.lun2_fat_num + this.data.din_fat_num + this.data.din2_fat_num,
      this.data.chyd_num = Number(this.data.bre_chyd_num) + this.data.bre2_chyd_num + this.data.lun_chyd_num +
      this.data.lun2_chyd_num + this.data.din_fat_num + this.data.din2_chyd_num,
      // 将其赋值
      this.setData({
        hot_num: this.data.hot_num,
        protein_num: this.data.protein_num,
        fat_num: this.data.fat_num,
        chyd_num: this.data.chyd_num,

      })
  },

  goTofirst: function (param) {
    wx.navigateTo({
      url: '/pages/foodtype/foodtype',
    })
  }
})