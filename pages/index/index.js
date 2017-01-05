//index.js
//获取应用实例
let mock = require('../../mock.js');
console.log(mock);
let app = getApp();
Page({
  data: {
    hotBtn: [
      '提问',
      '回答',
      '分享'
    ],
    userInfo: {},
    articleList: mock.articleList,
    imgUrls: [
        '/images/swiper/0.jpg',
        '/images/swiper/1.jpg',
        '/images/swiper/2.jpg'
    ]
  },
  onLoad() {
    console.log('onload完成');
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
  },
  onUnload() {
    console.log('unload');
  },
  onHide() {
    console.log('hide')
  },
  onReady() {
    console.log('页面onload+onshow后触发onReady');
  },
  onShow() {
    console.log('onload后触发onShow');
  },
  onShareAppMessage() {
    return {
      title: 'Edward知乎', 
      desc: 'Edward的知乎内容...', 
      path: 'path'
    };
  },
  onPullDownRefresh() {
    console.log('向下拉获取新数据事件')
  },
  onReachBottom() {
    console.log('向下拉到底部事件');
  }
})
