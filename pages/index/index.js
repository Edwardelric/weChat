//index.js
//获取应用实例
let mock = require('../../mock.js');
console.log(mock);
var app = getApp();
Page({
  data: {
    hotBtn: [
      '提问',
      '回答',
      '分享'
    ],
    userInfo: {},
    articalList: mock.articalList,
    imgUrls: [
        '/images/swiper/0.jpg',
        '/images/swiper/1.jpg',
        '/images/swiper/2.jpg'
    ]
  },
  onLoad: function () {
    var that = this;
    //调用应用实例的方法获取全局数据
    // wx.request({
    //   url:'mock',
    //   header: {
    //     'content-type': 'application/json'
    //   },
    //   success(response) {
    //     consle.log('0');
    //   }
    // });
  }
})
