let app = getApp();
Page({
  data: {
    hotBtn: [
      '刷新',
      '录音',
      '上传图片'
    ],
    userInfo: {},
    articleList: [],
    uploadImgUrl: null
  },
  onLoad() {
    console.log('onload mock数据');
    this.setData({
      articleList: require('../../data/list.js').articleList
    });
    console.log('onload完成');
    // wx.navigateTo({
    //   url: '/pages/article/article?id=1'
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
  uploadImg(event) {
    if (event.target.dataset.index*1 != 2) {
      wx.startRecord({
        success: function(res) {
          var tempFilePath = res.tempFilePath
          wx.playVoice({
            filePath: tempFilePath,
            complete: function(){
              console.log(res);
            }
          })
        }
      });
      return false;
    }
    let that = this;
    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        console.log(res.tempFilePaths[0]);
        // that.uploadImgUrl = res.tempFilePaths[0];
        that.setData({
          uploadImgUrl: res.tempFilePaths[0]
        })
      }
    });
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
