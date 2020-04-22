// pages/scroll/scroll.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  handleScroll(event){
    console.log(event);
  },
  scrollToUpper(){
    console.log("滚动到顶部/最左边")
  },
  scrollToLower(){
    console.log("滚动到底部/最右边")
  }
})