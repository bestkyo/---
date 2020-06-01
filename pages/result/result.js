// pages/result/result.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    A: 0,
    B: 0,
    C: 0,
    D: 0,
    E: 0,
    Kind:'unknow'
  },

  whichKind: function(){
    if(this.data.A+this.data.B+this.data.C+this.data.D+this.data.E>=160){
     return "右派,相信普世价值,是具有较强开放性人格特征的个体,往往会坚持自由主义立场倾向,比较能听进去不同意见,具有独立思考的能力.\n\n你可能不太'爱国',十分警惕民族主义,反对战狼外交,支持自由贸易.\n\n你期待改变现秩序,对传统文化持比较反对的态度,只相信科学,主张对权力加以限制,重视个人权利问题,会比较多的从海外媒体获取信息"
    } else if (this.data.A+this.data.B+this.data.C+this.data.D+this.data.E>=129 && this.data.A+this.data.B+this.data.C+this.data.D+this.data.E<=159){
      return "偏右,对普世价值有所了解,能听进去不同意见,具有一定的独立思考能力.\n\n你会警惕爱国主义,也比较警惕民族主义,反对过于强硬的外交政策.\n\n你略微期待改变现秩序,在文化上持比较实用主义的态度,警惕权力过于集中,会关注个人权利问题,从非官方媒体获取更多资讯"
    } else if (this.data.A+this.data.B+this.data.C+this.data.D+this.data.E>=98 && this.data.A+this.data.B+this.data.C+this.data.D+this.data.E<=128){
      return "中间派,对普世价值持中立态度,认为这些东西不一定符合中国国情,不认为权威的就永远是对的,偶尔会挑战一下权威.\n\n你对'爱国'这事不太感冒,对民族主义也不太感兴趣,外交方面比较支持保持现状.\n\n你对改变现秩序持观望态度,在东西方文化方面持比较中立的态度,取其精华去其糟粕,不太关心政治,偶尔会关心个人权利问题,会从官方和非官方媒体获得资讯"
    } else if (this.data.A+this.data.B+this.data.C+this.data.D+this.data.E>=67 && this.data.A+this.data.B+this.data.C+this.data.D+this.data.E<=97){
      return "偏左,不太相信普世价值和西方三权分立那一套,不太会去质疑权威,不太喜欢公知.\n\n你认同爱国主义及民族主义,认为本民族利益应该高于其他民族,对于西方国家的对华政策很警惕.\n\n你对改变现有秩序持怀疑态度,是个传统的人,相信中华文化里有很多值得保留的东西,比较相信强权,认为主权大于人权,从官方媒体获得资讯较多,也会受到朋友圈和公众号的影响."
    }
     else{
      return "左派,否认普世价值及西方那一套.你是责任性较强的个体,主张权威可以凌驾于法律,针对不服从于现秩序者有攻击倾向,痛恨公知.\n\n你是一个爱国者和民族主义者,相信本民族利益高于其他民族,你可能会支持武统台湾,对西方国家采取强硬态度,支持关税壁垒.\n\n你反对改变现秩序,在文化上坚持保守主义态度，捍卫权威所倡导的规范与习俗,支持中国的儒家传统文化和马列主义.认为只有集中力量才能办大事,相信官方媒体,而且认为所有媒体都应该起到宣传正能量的作用."
    }
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   
    this.setData({
      A: options.A - 0,
      B: options.B - 0,
      C: options.C - 0,
      D: options.D - 0,
      E: options.E - 0,
      
    })
   
    this.setData({
      Kind: this.whichKind()
    }) 
    console.log(this.whichKind())
     /**
   * Amax:听觉
   * Kmax:动觉
   * Vmax:视觉
   * A=K>V:听觉动觉均衡型……
   */
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