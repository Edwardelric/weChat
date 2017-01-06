Page({
  data:{
    articleData: {},
    id: 'articleId',
    isPlay: false
  },
  onLoad(options) {
    // 生命周期函数--监听页面加载
    let that = this;
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

    wx.onBackgroundAudioPlay(function(){
      that.setData({
        isPlay: true
      });
    });
    wx.onBackgroundAudioPause(function(){
      that.setData({
        isPlay: false
      });
    });
  },
  collectionHandler(event) {
    // 添加收藏
    let articleData = this.data.articleData;
    articleData.collected = true;
    this.setData({
      'articleData': articleData
    });
    wx.setStorageSync(this.data.id,'true');
    wx.showToast({
      title:'收藏成功'
    });
  },
  cancelCollectionHandler(event) {
    // 取消收藏
    let articleData = this.data.articleData;
    let that = this;
    wx.showModal({
      title:'提示',
      content:'是否取消收藏',
      cancelText:'取消',
      confirmText:'不收藏',
      success(res) {
        if (res.confirm) {
          articleData.collected = false;
          that.setData({
            'articleData': articleData
          });
          wx.removeStorageSync(that.data.id);
          wx.showToast({
            title: '取消成功',
            icon: 'success',
            duration: 2000
          });
        }
      }
    });
  },
  shareHandle() {
    wx.showActionSheet({
      itemList: ['分享给微信好友', '分享到朋友圈', '分享到QQ', '分享到微博'],
      success: function(res) {
        console.log(res.tapIndex)
      },
      fail: function(res) {
        console.log(res.errMsg)
      }
    });
  },
  musicHandler(event) {
    var currentPlay = this.data.isPlay;
    if (currentPlay) {
      wx.pauseBackgroundAudio();
      this.setData({
        isPlay: false
      }); 
    }else{
      wx.playBackgroundAudio({
        dataUrl: 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46',
        title: '王祖贤的图片',
        coverImgUrl: ''
      });    
      this.setData({
        isPlay: true
      });   
    }
    console.log(this.data.isPlay);
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