// pages/home/home.js
var mydata=require("../../utils/my.js");
var innerAudioContext = wx.createInnerAudioContext();
innerAudioContext.play();
innerAudioContext.autoplay = true;
innerAudioContext.src = 'http://music.163.com/song/media/outer/url?id=29480187.mp3';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    music: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      mydata1:mydata.data1
    })
    console.log(mydata.data1)
  },
  onstar: function () {
    this.setData({
      music: true
    }),
    innerAudioContext.play();
    innerAudioContext.autoplay = true;
    innerAudioContext.src = 'http://music.163.com/song/media/outer/url?id=29480187.mp3'
  
  },

  onstop: function () {
    this.setData({
      music: false
    }),
      innerAudioContext.pause();
  },
  bindtap1:function(){
    wx.navigateTo({
      url: 'test/test',
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})