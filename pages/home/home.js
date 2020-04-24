// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    counter:0,
    isShow:true
  },
  handleIncrement(event){
    console.log('------------------',event);
    this.setData({
      counter:this.data.counter+1
    })
    console.log(event.detail.name,event.detail.age);
  },
  handleTabClick(event){
    console.log(event);
  },
  handleIncrementCpn(){
    // 最终目的：修改my-sel组件中的数据counter
    // 1.获取组件对象
    const my_sel = this.selectComponent('#sel-id');
    // console.log(my_sel);
    // 2.通过setData修改组件中的数据(不合理)
    // my_sel.setData({
    //   counter:my_sel.data.counter + 20
    // })

    // 3.通过方法修改组件中的数据
    my_sel.incrementCounter(10);
  },
  handleChangeShow(){
    this.setData({
      isShow:!this.data.isShow
    })
  }
})