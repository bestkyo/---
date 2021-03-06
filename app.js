//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: "hello",
    question: [{ "question": " 毛泽东的过失相对于其功绩来说很小", "option": { "A": "严重不同意", "B": "不太同意", "C": "保持中立","D": "比较同意" ,"E": "非常同意"} }, { "question": " 世界上不存在自由、民主、人权等普世价值", "option": {  "A": "严重不同意", "B": "不太同意", "C": "保持中立","D": "比较同意" ,"E": "非常同意"} }, { "question": " 关系到国家安全和国计民生的经济领域应该全部由国企掌控", "option": { "A": "严重不同意", "B": "不太同意", "C": "保持中立","D": "比较同意" ,"E": "非常同意" } }, { "question": " 土地应该个人私有而非国有", "option": { "A": "严重不同意", "B": "不太同意", "C": "保持中立","D": "比较同意" ,"E": "非常同意"} }, { "question": " 人权高于主权", "option": {   "A": "严重不同意", "B": "不太同意", "C": "保持中立","D": "比较同意" ,"E": "非常同意" } }, { "question": " 政府的领导就像大家庭的家长，任何人都应该服从他们的决定。", "option": { "A": "严重不同意", "B": "不太同意", "C": "保持中立","D": "比较同意" ,"E": "非常同意" } }, { "question": " 即使父母的要求不合理，子女也应该照办。", "option": {  "A": "严重不同意", "B": "不太同意", "C": "保持中立","D": "比较同意" ,"E": "非常同意" } }, { "question": " 服从自己的上司或地位比自己高的人是理所当然的。", "option": {  "A": "严重不同意", "B": "不太同意", "C": "保持中立","D": "比较同意" ,"E": "非常同意" } }, { "question": " 政府政策即使错了，老百姓也应该服从。", "option": {  "A": "严重不同意", "B": "不太同意", "C": "保持中立","D": "比较同意" ,"E": "非常同意"} }, { "question": " 只要领导人的品格高尚，那么任何事情都可以交给他们办。", "option": { "A": "严重不同意", "B": "不太同意", "C": "保持中立","D": "比较同意" ,"E": "非常同意"} }, { "question": " 国家领袖的肖像不能随便用在漫画中。", "option": { "A": "严重不同意", "B": "不太同意", "C": "保持中立","D": "比较同意" ,"E": "非常同意"} }, { "question": " 中国在领土、贸易争端上表现的太软弱了，必须更强硬。", "option": {  "A": "严重不同意", "B": "不太同意", "C": "保持中立","D": "比较同意" ,"E": "非常同意" } }, { "question": " 条件允许的话应该武力占领钓鱼岛。", "option": {  "A": "严重不同意", "B": "不太同意", "C": "保持中立","D": "比较同意" ,"E": "非常同意" } }, { "question": " 以美国为首的西方国家不可能允许中国崛起为一流强国。", "option": {  "A": "严重不同意", "B": "不太同意", "C": "保持中立","D": "比较同意" ,"E": "非常同意" } }, { "question": " 作为一个中国人我感到很自豪。", "option": {  "A": "严重不同意", "B": "不太同意", "C": "保持中立","D": "比较同意" ,"E": "非常同意" } }, { "question": " 我为中国拥有悠久的历史和璀璨的文化而骄傲。", "option": {  "A": "严重不同意", "B": "不太同意", "C": "保持中立","D": "比较同意" ,"E": "非常同意"} }, { "question": " 每当升国旗唱国歌的时候，我总觉得这一刻非常的庄严肃穆。", "option": {  "A": "严重不同意", "B": "不太同意", "C": "保持中立","D": "比较同意" ,"E": "非常同意" } }, { "question": " 我们自己的民族比其他民族更优秀。", "option": {  "A": "严重不同意", "B": "不太同意", "C": "保持中立","D": "比较同意" ,"E": "非常同意" } }, { "question": " 如果爱国的话就必须抵制日货。", "option": {  "A": "严重不同意", "B": "不太同意", "C": "保持中立","D": "比较同意" ,"E": "非常同意" } },{ "question": "  应当对国外同类产品征收高额关税来保护国内民族工业。", "option": {  "A": "严重不同意", "B": "不太同意", "C": "保持中立","D": "比较同意" ,"E": "非常同意" } },{ "question": "  不管谁当领导，他的权力都必须受到制约。", "option": { "A": "严重不同意", "B": "不太同意", "C": "保持中立","D": "比较同意" ,"E": "非常同意" } },{ "question": "  官员财产公开制度应该立即施行。", "option": {  "A": "严重不同意", "B": "不太同意", "C": "保持中立","D": "比较同意" ,"E": "非常同意" } },{ "question": "  任何时候政府都必须保障每个公民的言论、结社、游行示威的权利和自由。", "option": { "A": "严重不同意", "B": "不太同意", "C": "保持中立","D": "比较同意" ,"E": "非常同意" } },{ "question": "  三权分立制度不适合中国国情，中国绝不照搬西方国家的政治制度。", "option": { "A": "严重不同意", "B": "不太同意", "C": "保持中立","D": "比较同意" ,"E": "非常同意"} },{ "question": "  中国必须坚持以马列主义、毛泽东思想为指导，走社会主义道路。", "option": { "A": "严重不同意", "B": "不太同意", "C": "保持中立","D": "比较同意" ,"E": "非常同意"} },{ "question": "  选举式民主其实是假民主，因此中国不能搞选举民主。", "option": { "A": "严重不同意", "B": "不太同意", "C": "保持中立","D": "比较同意" ,"E": "非常同意"} },{ "question": "  政府为低收入者提供最低生活保障是理所当然的。", "option": { "A": "严重不同意", "B": "不太同意", "C": "保持中立","D": "比较同意" ,"E": "非常同意" } },{ "question": "   为减少收入不平等，应当对富人征收更高比例的税。。", "option": { "A": "严重不同意", "B": "不太同意", "C": "保持中立","D": "比较同意" ,"E": "非常同意" } },{ "question": "  户籍制度应该尽快取消。", "option": { "A": "严重不同意", "B": "不太同意", "C": "保持中立","D": "比较同意" ,"E": "非常同意"} },{ "question": "  在中小学教育上，农民工子女应该和城市居民子女享受同等的权利。", "option": {  "A": "严重不同意", "B": "不太同意", "C": "保持中立","D": "比较同意" ,"E": "非常同意" } },{ "question": "  两个成年人之间自愿性行为是其自由，无论其有没有婚姻关系。", "option": {  "A": "严重不同意", "B": "不太同意", "C": "保持中立","D": "比较同意" ,"E": "非常同意"} },{ "question": "  同性恋者也有结婚的权利。", "option": { "A": "严重不同意", "B": "不太同意", "C": "保持中立","D": "比较同意" ,"E": "非常同意" } },{ "question": "  不应该允许有严重遗传疾病的残疾人结婚。", "option": { "A": "严重不同意", "B": "不太同意", "C": "保持中立","D": "比较同意" ,"E": "非常同意"} },{ "question": "   既然卖淫不可能根除，那么政府应该加强管理和疏导。。", "option": {  "A": "严重不同意", "B": "不太同意", "C": "保持中立","D": "比较同意" ,"E": "非常同意"} },{ "question": "  中国现在仍然要继承和发扬儒家文化传统。", "option": { "A": "严重不同意", "B": "不太同意", "C": "保持中立","D": "比较同意" ,"E": "非常同意"} },{ "question": "  中医对人体健康的观念比西医更高明。", "option": { "A": "严重不同意", "B": "不太同意", "C": "保持中立","D": "比较同意" ,"E": "非常同意"} },{ "question": "  周易、八卦有时候能解释和预测很多事情。", "option": { "A": "严重不同意", "B": "不太同意", "C": "保持中立","D": "比较同意" ,"E": "非常同意"} },{ "question": " 以下信息渠道你更信赖哪个", "option": {  "A": "海外媒体", "B": "小道消息", "C": "微博","D": "网易等门户网站" ,"E": "央视/人民日报/新华社" } }]
  }
})