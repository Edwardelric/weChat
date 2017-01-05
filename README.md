#微信小程序
tips:
  tabBar 的数量为 2-5个
  注册：
	1.App（） 必须在 app.js 中注册，且只能注册一个；
	2.不要字 App() 函数中调用  getApp() 使用 this 就可以；
	3.不要在onlaunch的时候 getCurrentPage() 此时page还没完成；
	4.通过 getApp() 获取实例之后，不要私自调用生命周期函数；
  组件：	
	scroll-view:
		1.scroll-view 中不能使用 textarea、map、canvas、video 组件；
		2.scroll-into-view 的优先级高于scroll-top
		3.在滚动 scroll-view 时会阻止页面回弹，所以在 scroll-view 中滚动，是无法触发 onPullDownRefresh
		4.若要使用下拉刷新，请使用页面的滚动，而不是 scroll-view ，这样也能通过点击顶部状态栏回到页面顶部

demo 的例子： https://github.com/RebeccaHanjw/weapp-wechat-zhihu
