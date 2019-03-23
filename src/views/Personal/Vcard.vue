<template>
  <div class="main">
    <div class="box">
    <div class="header">
      <div class="left">
        <div class="left-top">
          <img src="../../../static/imgs/touxiang2.png" alt>
        </div>
      </div>
      <div class="right">
        <div class="info">
          {{info.name || '姓名'}} 
          <span class="sign">就诊卡</span>
        </div>
        <p class="address">漳州开发区第一医院</p>
       
      </div>
       <p class="num">就诊卡号：
          <span>{{info.cardNumber}}</span>
        </p>
    </div>
    </div>
    <p class="state">卡片状态：有效</p>
    <p class="line"></p>
    <div class="content">
      <div class="pay-box">
        <div class="pay" v-for="(item, index) in showImg" :key="index" @click="active(index)">
          <figure>
            <img :src="item.img" alt>
          </figure>
          <div class="text">
            {{item.name}}
            <span class="tips">{{item.text}}</span>
          </div>
          <div class="radio">
            <svg class="icon return-icon" aria-hidden="true">
              <use xlink:href="#icon-fanhui"></use>
            </svg>
          </div>
          <p class="line"></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Vcard",
  data() {
    return {
      info:[],
      showImg: [
        {
          img: require("../../../static/imgs/change.png"),
          name: "切换卡片",
          text: "点击切换卡片"
        },
        {
          img: require("../../../static/imgs/payment.png"),
          name: "预交金",
          text: "余额￥49.27"
        },
        {
          img: require("../../../static/imgs/order.png"),
          name: "预约记录",
          text: "查看详情"
        },
        {
          img: require("../../../static/imgs/why1.png"),
          name: "就诊记录",
          text: "查看详情"
        },
        {
          img: require("../../../static/imgs/card.png"),
          name: "充值记录",
          text: "查看详情"
        }
      ]
    };
  },
  methods: {
    active(index) {
      switch (index) {
        case 0:
          this.$router.push("/Personal/Center/Info/scard");
          break;
        case 1:
          this.$router.push("/Personal/Center/Info/Norecord");
          break;
        case 2:
          this.$router.push("/Personal/Center/Info/Order");
          break;
        case 3:
          this.$router.push("/Personal/Center/Info/Vrecord");
          break;
        case 4:
          this.$router.push("/Personal/Center/Info/NoRechargeRe");
          break;
      }
    },
    getCard() {
        this.axios.get('http://zsht.bloomworks.cn/f/zs/medicalCard/getMedicalCard',
        {
          params:{
            openId: this.$store.state.common.openId,
            type: 2
          }
        }).then((res) => {
          this.info=JSON.parse(res.data.data)
            // console.log(this.info)
        }).catch(() => {
            // console.log(err)
        });
    }
  },
  //过滤器 获取到用户姓名则显示  否则显示 "姓名"
  // filters: {
  //   name (val) {
  //     if(val === undefined ){
  //       return   '姓名'
  //     }else{
  //       return val
  //     }
  //   }
  // },
  mounted() {
      this.getCard()
  },
};
</script>

<style lang="stylus" scoped>
.main {
  min-height: 100vh;
  background: #ffffff;
  padding-top: 20px;
    .header {
      background-image: url('../../../static/imgs/bg_blue.png');
      background-repeat: no-repeat;
      background-size: 100% 321px;
      overflow: hidden;
      height: 321px;
      margin:  0 20px 20px 20px;
      box-shadow: 0px 4px 32px 0px rgba(192, 192, 192, 0.53);
      .left {
        float: left;
        width: 30%;
        height: 80%;
        text-align: center;

        .left-top {
          width: 110px;
          height: 110px;
          margin: 43px 36px 0 65px;
          border-radius: 50%;

          img {
            width: 100%;
          }
        }
      }

    .right {
      float: left;
      width: 70%;
      height: 80%;

      .info {
        position: relative;
        margin: 50px 0 32px;
        font-size: 40px;
        color: #ffffff;

        .sign {
          position: absolute;
          right: 0;
          font-size: 30px;
          color: #393939;
          width: 139px;
          height: 62px;
          line-height: 62px;
          text-align: center;
          border-radius: 40px 0 0 40px;
          background: #FAD9A5;
        }
      }

      .address {
        margin-top 32px
        font-size: 28px;
        color: #C2DAFC;
      }

      
    }
    .num {
      margin-top: 103px;
      font-size: 30px;
      text-align: right;
      padding-right: 20px;
      color: #FFFFFF;
    }
  }

  .state {
    font-size: 28px;
    text-align: right;
    color: #BFBFBF;
    margin: 40px 20px;
    background-color: #ffffff;
  }

  .line {
    height: 16px;
    background-color: #F3F4F6;
  }

  .content {
    background-color: #ffffff;

    .pay-box {
      padding: 10px 40px;
      width: 100%;
      float: left;

      .pay {
        margin: 40px 0;
        vertical-align: middle;
        position: relative;
        background: #ffffff;

        figure {
          display: inline-block;
          vertical-align: middle;
          width: 38px;

          img {
            width: 100%;
          }
        }

        .text {
          width: 90%;
          position: relative;
          display: inline-block;
          vertical-align: middle;
          padding-left: 70px;
          color: #333333;
          font-size: 32px;

          .tips {
            position: absolute;
            font-size: 26px;
            color: #BFBFBF;
            right: 0;
            margin-right: 39px;
          }
        }

        .radio {
          position: absolute;
          right: 0;
          top: 5px;
          width: 24px;

          .return-icon {
            color: #bfbfbf;
            transform: rotateZ(-180deg);
          }
        }

        .line {
          height: 1px;
          background-color: #f4f4f4;
          margin: 0;
          margin-top: 30px;
        }
      }
    }
  }
}
</style>
