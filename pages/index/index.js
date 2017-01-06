let app = getApp();
Page({
  data: {
    hotBtn: [
      '提问',
      '回答',
      '分享'
    ],
    userInfo: {},
    articleList: [],
    imgUrls: [
        '/images/swiper/0.jpeg',
        '/images/swiper/0.jpeg',
        '/images/swiper/0.jpeg'
    ]
  },
  onLoad() {
    console.log('onload mock数据');
    this.setData({
      articleList: require('../../data/list.js').articleList
    });
    console.log('onload完成');
    wx.navigateTo({
      url: '/pages/article/article?id=1'
    });
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
