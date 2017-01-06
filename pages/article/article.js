Page({
  data:{
    articleData: {},
    id: 'articleId'
  },
  onLoad(options) {
    // 生命周期函数--监听页面加载
    let data = require('../../data/article.js').articleList;
    let articleData = data[options.id*1];
    if (!articleData) { return false;}
    if (wx.getStorageSync('articleId_'+options.id*1) === 'true') {
      articleData.collected = true;
    }
    this.setData({
      articleData: articleData,
      id: 'articleId_'+options.id*1
    });  
  },
  collectionHandler(event) {
    let articleData = this.data.articleData;
    articleData.collected = !articleData.collected;
    this.setData({
      'articleData': articleData
    });
    wx.setStorageSync(this.data.id,'true');
  },
  onShareAppMessage() {
    // 用户点击右上角分享
    return {
      title: 'title', // 分享标题
      desc: 'desc', // 分享描述
      path: 'path' // 分享路径
    }
  }
});