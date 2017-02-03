// pages/chat/chat.js
Page({
  data: {
    longitude:'',
    latitude:''
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady:function(){
    // 页面渲染完成
    let that = this;
    wx.getLocation({
      type: 'wgs84',
      success: function(res) {
        let latitude = res.latitude;
        let longitude = res.longitude;
        // let speed = res.speed;
        // let accuracy = res.accuracy;
        console.log(latitude+':'+longitude);
        that.setData({
          latitude:latitude,
          longitude:longitude
        });
      }
    });
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})