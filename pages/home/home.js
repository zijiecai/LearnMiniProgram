// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:'菜籽',
    age:18,
    students:[
      {id:1,name:'kobe',age:30},
      {id:2,name:'james',age:28},
      {id:3,name:'curry',age:32},
      {id:4,name:'caizi',age:18},
    ],
    counter:0,
  },
  handleBtnClick() {
    this.setData({
      counter: this.data.counter+1
    })
  },
  handleSubtraction(){
    this.setData({
      counter:this.data.counter-1
    })
  },
  handleGetUserInfo(event){
    console.log(event);
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

  // 4.其他事件
  // 监听页面滚动
  onPageScroll(obj){
    // console.log(obj);
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    console.log('下拉刷新事件触发');
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log('页面滚动到底部');
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})