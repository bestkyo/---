// pages/test/test.js
//获取应用实例
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    index: 1,
    realIndex: 0,
    A: 0,
    B: 0,
    C: 0,
    D: 0,
    E: 0,
    a:0,
    b:0,
    c:0,
    d:0,
    e:0,
    optionA: "A",
    optionB: "B",
    optionC: "C",
    optionD: "D",
    optionE: "E",
    questionDetail: app.globalData.question[0].question,
    answerA: app.globalData.question[0].option.A,
    answerB: app.globalData.question[0].option.B,
    answerC: app.globalData.question[0].option.C,
    answerD: app.globalData.question[0].option.D,
    answerE: app.globalData.question[0].option.E,
    list: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37],
    listABC : ['A','B','C','D','E']
  },

  // randSort: function () {
  //   return Math.random() > 0.5 ? 1 : -1;
  // },

  // setList: function () {
  //   var newList = this.data.list.sort(this.randSort);
  //   this.setData({
  //     list: newList,
  //   });
  // },

  // setABC : function(){
  //   var abc = this.data.listABC.sort(this.randSort);
  //   this.setData({
  //     listABC: abcde,
  //   });
  // },

  setOption: function(){

  },



  answerClickA: function () {
    if (this.data.listABC[0] == 'A') {
            if(this.data.realIndex==3||this.data.realIndex==4||this.data.realIndex==20||this.data.realIndex==21||this.data.realIndex==22||this.data.realIndex==28||this.data.realIndex==29||this.data.realIndex==30||this.data.realIndex==31||this.data.realIndex==33)
            {this.setData({
              A: this.data.A + 1
            })}
            else{this.setData({
              A: this.data.A + 5
            })}
          }
    // else if (this.data.listABC[0] == 'B') {
    //   this.setData({
    //     B: this.data.B + 4
    //   })
    // }
    // if (this.data.listABC[0] == 'C') {
    //   this.setData({
    //     C: this.data.C + 3
    //   })
    // }
    // else if (this.data.listABC[0] == 'D') {
    //   this.setData({
    //     D: this.data.D + 2
    //   })
   
    // }
    // if (this.data.listABC[0] == 'E') {
    //   this.setData({
    //     E: this.data.E + 1
    //   })
   
    // }
    if (this.data.index == 38) {
      wx.redirectTo({
        url: '/pages/result/result?A=' + this.data.A + '&B=' + this.data.B + '&C=' + this.data.C+ '&D=' + this.data.D+ '&E=' + this.data.E,
      })
    }
    if(this.data.index<38){
    this.setData({
      index: this.data.index + 1,
      realIndex: this.data.list[this.data.index],
    
      
    })
   
    this.setData({
      questionDetail: app.globalData.question[this.data.realIndex].question,
     
      answerA: app.globalData.question[this.data.realIndex].option[this.data.listABC[0]],
      answerB: app.globalData.question[this.data.realIndex].option[this.data.listABC[1]],
      answerC: app.globalData.question[this.data.realIndex].option[this.data.listABC[2]],
      answerD: app.globalData.question[this.data.realIndex].option[this.data.listABC[3]],
      answerE: app.globalData.question[this.data.realIndex].option[this.data.listABC[4]],
    })
  }
  },

  answerClickB: function () {
    // if(this.data.listABC[1] == 'A'){
    //   this.setData({
    //     A:this.data.A + 5
    //   })
    // }
    // else 
    if (this.data.listABC[1] == 'B') {
      if(this.data.realIndex==3||this.data.realIndex==4||this.data.realIndex==20||this.data.realIndex==21||this.data.realIndex==22||this.data.realIndex==28||this.data.realIndex==29||this.data.realIndex==30||this.data.realIndex==31||this.data.realIndex==33){
        this.setData({
          B: this.data.B + 2
        })
      }
      else{
        this.setData({
        B: this.data.B + 4
      })
    }
    }
    // if (this.data.listABC[1] == 'C') {
    //   this.setData({
    //     C: this.data.C + 3
    //   })
    // }
    // else if (this.data.listABC[1] == 'D') {
    //   this.setData({
    //     D: this.data.D + 2
    //   })
   
    // }
    // if (this.data.listABC[1] == 'E') {
    //   this.setData({
    //     E: this.data.E + 1
    //   })
   
    // }
    if (this.data.index == 38) {
      wx.redirectTo({
        url: '/pages/result/result?A=' + this.data.A + '&B=' + this.data.B + '&C=' + this.data.C+ '&D=' + this.data.D+ '&E=' + this.data.E,
      })
    }
    if(this.data.index<38){
    this.setData({
      index: this.data.index + 1,
      realIndex: this.data.list[this.data.index]
    })
    this.setData({
      questionDetail: app.globalData.question[this.data.realIndex].question,
      answerA: app.globalData.question[this.data.realIndex].option[this.data.listABC[0]],
      answerB: app.globalData.question[this.data.realIndex].option[this.data.listABC[1]],
      answerC: app.globalData.question[this.data.realIndex].option[this.data.listABC[2]],
      answerD: app.globalData.question[this.data.realIndex].option[this.data.listABC[3]],
      answerE: app.globalData.question[this.data.realIndex].option[this.data.listABC[4]],
    })
  
  }
  },

  answerClickC: function () {
    // if (this.data.listABC[2] == 'A') {
    //   this.setData({
    //     A: this.data.A + 5
    //   })
    // }
    // else if (this.data.listABC[2] == 'B') {
    //   this.setData({
    //     B: this.data.B + 4
    //   })
    // }
    if (this.data.listABC[2] == 'C') {
      this.setData({
        C: this.data.C + 3
      })
    }
    // else if (this.data.listABC[2] == 'D') {
    //   this.setData({
    //     D: this.data.D + 2
    //   })
   
    // }
    // if (this.data.listABC[2] == 'E') {
    //   this.setData({
    //     E: this.data.E + 1
    //   })
   
    // }
    if (this.data.index == 38) {
      wx.redirectTo({
        url: '/pages/result/result?A=' + this.data.A + '&B=' + this.data.B + '&C=' + this.data.C+ '&D=' + this.data.D+ '&E=' + this.data.E,
      })
    }
    if(this.data.index<38){
    this.setData({
      index: this.data.index + 1,
      realIndex: this.data.list[this.data.index],
      
    })
    this.setData({
      questionDetail: app.globalData.question[this.data.realIndex].question,
      answerA: app.globalData.question[this.data.realIndex].option[this.data.listABC[0]],
      answerB: app.globalData.question[this.data.realIndex].option[this.data.listABC[1]],
      answerC: app.globalData.question[this.data.realIndex].option[this.data.listABC[2]],
      answerD: app.globalData.question[this.data.realIndex].option[this.data.listABC[3]],
      answerE: app.globalData.question[this.data.realIndex].option[this.data.listABC[4]],
    })
  
    }
  },

  answerClickD: function () {
    // if(this.data.listABC[3] == 'A'){
    //   this.setData({
    //     A:this.data.A + 5
    //   })
    // }
    // else if (this.data.listABC[3] == 'B') {
    //   this.setData({
    //     B: this.data.B + 4
    //   })
    // }
    // if (this.data.listABC[3] == 'C') {
    //   this.setData({
    //     C: this.data.C + 3
    //   })
    // }
    if (this.data.listABC[3] == 'D') {
      if(this.data.realIndex==3||this.data.realIndex==4||this.data.realIndex==20||this.data.realIndex==21||this.data.realIndex==22||this.data.realIndex==28||this.data.realIndex==29||this.data.realIndex==30||this.data.realIndex==31||this.data.realIndex==33){
      this.setData({
        D: this.data.D + 4
      })
    }
    else{
      this.setData({
        D: this.data.D + 2
      })
    }
    }
    // if (this.data.listABC[3] == 'E') {
    //   this.setData({
    //     E: this.data.E + 1
    //   })
   
    // }
    if (this.data.index == 38) {
      wx.redirectTo({
        url: '/pages/result/result?A=' + this.data.A + '&B=' + this.data.B + '&C=' + this.data.C+ '&D=' + this.data.D+ '&E=' + this.data.E,
      })
    }
    if(this.data.index<38){
    this.setData({
      index: this.data.index + 1,
      realIndex: this.data.list[this.data.index]
    })
    this.setData({
      questionDetail: app.globalData.question[this.data.realIndex].question,
      answerA: app.globalData.question[this.data.realIndex].option[this.data.listABC[0]],
      answerB: app.globalData.question[this.data.realIndex].option[this.data.listABC[1]],
      answerC: app.globalData.question[this.data.realIndex].option[this.data.listABC[2]],
      answerD: app.globalData.question[this.data.realIndex].option[this.data.listABC[3]],
      answerE: app.globalData.question[this.data.realIndex].option[this.data.listABC[4]],
    })
  
    }
  },

  answerClickE: function () {
    // if(this.data.listABC[4] == 'A'){
    //   this.setData({
    //     A:this.data.A + 5
    //   })
    // }
    // else if (this.data.listABC[4] == 'B') {
    //   this.setData({
    //     B: this.data.B + 4
    //   })
    // }
    // if (this.data.listABC[4] == 'C') {
    //   this.setData({
    //     C: this.data.C + 3
    //   })
    // }
    // else if (this.data.listABC[4] == 'D') {
    //   this.setData({
    //     D: this.data.D + 2
    //   })
   
    // }
    if (this.data.listABC[4] == 'E') {
      if(this.data.realIndex==3||this.data.realIndex==4||this.data.realIndex==20||this.data.realIndex==21||this.data.realIndex==22||this.data.realIndex==28||this.data.realIndex==29||this.data.realIndex==30||this.data.realIndex==31||this.data.realIndex==33){
      this.setData({
        E: this.data.E + 5
      })
    }
    else{
      this.setData({
        E: this.data.E + 1
      })      
    }
    }
    if (this.data.index == 38) {
      wx.redirectTo({
        url: '/pages/result/result?A=' + this.data.A + '&B=' + this.data.B + '&C=' + this.data.C+ '&D=' + this.data.D+ '&E=' + this.data.E,
      })
    }
    if(this.data.index<38){
    this.setData({
      index: this.data.index + 1,
      realIndex: this.data.list[this.data.index]
    })
    this.setData({
      questionDetail: app.globalData.question[this.data.realIndex].question,
      answerA: app.globalData.question[this.data.realIndex].option[this.data.listABC[0]],
      answerB: app.globalData.question[this.data.realIndex].option[this.data.listABC[1]],
      answerC: app.globalData.question[this.data.realIndex].option[this.data.listABC[2]],
      answerD: app.globalData.question[this.data.realIndex].option[this.data.listABC[3]],
      answerE: app.globalData.question[this.data.realIndex].option[this.data.listABC[4]],
    })
  
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // this.setList();
    // this.setABC();
    
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