//index.js
//获取应用实例
let mock = {
  "articalList":[
    {
      "avator":{
        "name":"张三",
        "img":"http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg"
      },
      "abstractImg":"http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg",
      "title":"印度神话专题-湿婆的冷漠",
      "abstract":"印度神话专题-湿婆的冷漠的简介打发撒打算发印度神话专题-湿婆的冷漠的简介打发撒打算发印度神话专题-湿婆的冷漠的简介打发撒打算发"
    },
    {
      "avator":{
        "name":"李四",
        "img":"http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg"
      },
      "title":"印度神话专题-湿婆的冷漠",
      "abstract":"印度神话专题-湿婆的冷漠的简介打发撒打算发印度神话专题-湿婆的冷漠的简介打发撒打算发印度神话专题-湿婆的冷漠的简介打发撒打算发"
    },
    {
      "avator":{
        "name":"赵武",
        "img":"http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg"
      },
      "abstractImg":"http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg",
      "title":"12印度神话专题-湿婆的冷漠",
      "abstract":"印度神话专题-湿婆的冷漠的简介打发撒打算发印度神话专题-湿婆的冷漠的简介打发撒打算发印度神话专题-湿婆的冷漠的简介打发撒打算发"
    },
    {
      "avator":{
        "name":"老六",
        "img":"http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg"
      },
      "abstractImg":"http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg",
      "title":"12印度神话专题-湿婆的冷漠",
      "abstract":"印度神话专题-湿婆的冷漠的简介打发撒打算发印度神话专题-湿婆的冷漠的简介打发撒打算发印度神话专题-湿婆的冷漠的简介打发撒打算发"
    }
  ]
};

var app = getApp();
Page({
  data: {
    hotBtn: [
      '提问',
      '回答',
      '分享'
    ],
    userInfo: {},
    articalList: mock.articalList
  },
  onLoad: function () {
    var that = this
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
