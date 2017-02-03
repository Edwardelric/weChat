let app = getApp();
Page({
  data:{
    topData: [],
    initialNum: 0,
    step:9
  },
  onLoad:function(options){
    wx.showNavigationBarLoading();
    this.getDataHandler('https://api.douban.com/v2/movie/top250','topData');
  },
  getDataHandler(url,keyName) {
    let obj = {};
    let that = this;
    let listData = [];
    wx.request({
      url:url,
      data:{},
      method:'GET',
      header: {
        'content-type': 'application/xml'
      },
      success(response) {
        listData = response.data.subjects.slice(that.data.initialNum, that.data.initialNum+that.data.step);
        listData = listData.concat(that.data.topData);
        console.log(listData);
        for (let i=0; i<listData.length; i++) {
          let averageData = listData[i].rating.average/2;
          let integer = Math.floor(averageData);
          listData[i].rating.data = [];
          
        }  
        obj[keyName] = listData;
        that.setData(obj);
        setTimeout(function(){
          wx.hideNavigationBarLoading();
          wx.stopPullDownRefresh();
        },1000);  
      },
      fail() {
        
      },
      complete() {
        wx.hideNavigationBarLoading();
      }
    }); 
  },
  onPullDownRefresh(event) {
    let obj = {};
    obj.initialNum = this.data.initialNum + this.data.step;
    this.setData(obj);
    wx.showNavigationBarLoading();
    this.getDataHandler('https://api.douban.com/v2/movie/top250','topData');
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