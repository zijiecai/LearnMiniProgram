// pages/mustache/mustache.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    massage:'你好小程序',
    firstname:'bryant',
    lastname:'kobe',
    age:20,
    nowTime:new Date().toLocaleString(),
    isActive:false,
    score:40,
    movies:['海王','海贼王','海尔兄弟'],
    nums:[
      [1,2,3,4],
      [5,6,7,8],
      [9,10,11,12]
    ],
    letters:[
      'a','b','c','d'
    ]
  },

  handleSwitchColor(){
    this.setData({
      isActive:!this.data.isActive
    })
  },

  handleIncrement(){
    this.setData({
      score:this.data.score + 6
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    setInterval(() => {
      this.setData({
        nowTime:new Date().toLocaleString()
      })
    })
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