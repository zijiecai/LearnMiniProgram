// pages/home/home.js
Page({
  handleShowToast(){
    wx.showToast({
      title: '加载中ing',
      duration:3000,
      icon:'loading',
      // image:'/assets/icon/icon.png'
      // 是否显示透明层，防止触摸穿透
      mask:true,
      success:function(){
        console.log('展示弹窗成功')
      },
      fail:function(){
        console.log('展示弹窗失败')
      },
      complete:function(){
        console.log('完成函数的调用')
      }
    })
  },
  handleShowModal(){
    wx.showModal({
      title: '我是标题',
      content: '我是内容，哈哈哈',
      // showCancel:false,
      cancelText:'退出',
      cancelColor:'red',
      success:function(res){
        console.log(res);
        if(res.cancel){
          console.log('用户点击了取消按钮');
        }
        if(res.confirm){
          console.log('用户点击了确定按钮');
        }
      }
    })
  },
  handleShowLoading(){
    wx.showLoading({
      title: '加载中',
      mask:true
    })
    setTimeout(()=> {
      // 必须手动hideLoading才会让loading消失
      wx.hideLoading()
    },1000)
  },
  handleShowAction(){
    wx.showActionSheet({
      itemList: ['相册','拍照'],
      itemColor:'skyblue',
      success:function(res){
        console.log(res);
      }
    })
  },
  onShareAppMessage:function(options){
    return{
      title:'你好啊 菜籽jie',
      path:'/pages/about/about',
      imageUrl:'https://res.wx.qq.com/wxdoc/dist/assets/img/0.4cb08bb4.jpg'
    }
  }
})