let app = getApp();
Page({
  data:{
    playingData: [],
    laterData: [],
    topData: [],
    startStep: 0
  },
  onLoad:function(options){
    this.getDataHandler('https://api.douban.com/v2/movie/in_theaters','playingData');
    this.getDataHandler('https://api.douban.com/v2/movie/coming_soon','laterData');
    this.getDataHandler('https://api.douban.com/v2/movie/top250','topData');
    wx.showNavigationBarLoading();
  },
  getDataHandler(url,keyName,startStep) {
    let obj = {};
    let that = this;
    let listData = [];
    startStep = startStep || 0;
    wx.request({
      url:url,
      data:{},
      method:'GET',
      header: {
        'content-type': 'application/xml'
      },
      success(response) {
        listData = response.data.subjects.slice(startStep, startStep+3);
        obj[keyName] = listData;
        console.log(listData);
        for (let i=0;i<listData.length;i++) {
          listData[i].integer = Math.floor(listData[i].rating.average);
          listData[i].late = listData[i].rating.average%listData[i].integer;
        }
        that.setData(obj);
        if( keyName == 'playingData' ){
          that.setData({
            startStep: that.data.startStep+3
          });
        }
      },
      fail() {
        console.log('fail');
      },
      complete() {
        wx.hideNavigationBarLoading();
      }
    }); 
  },
  onPullDownRefresh(event) {
    this.getDataHandler('https://api.douban.com/v2/movie/in_theaters','playingData',this.data.startStep);
  },
  onShareAppMessage: function() {
    // 用户点击右上角分享
    return {
      title: 'title', // 分享标题
      desc: 'desc', // 分享描述
      path: 'path' // 分享路径
    }
  }
});