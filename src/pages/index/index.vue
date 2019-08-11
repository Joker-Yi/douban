<template>
  <div class="wrap">
<!--    头部-->
    <div class="header">
      <div class="h-left">
        <h1>豆瓣
          <icon type="search" size="18" color="#42bd56"></icon>
        </h1>
      </div>
      <div class="h-right">
        <button class="openApp">打开豆瓣APP</button>
      </div>
    </div>
<!--    影院热映-->
    <div class="list">
      <div class="title">
        <h2>影院热映</h2>
        <navigator url="#" class="more">更多</navigator>
      </div>
      <div class="scroll">
        <scroll-view scroll-x style="width: 100%" class="scroll-wrap">
          <view class="item" v-for="(item,index) in onMovie" :key="index">
            <div class="movieImg">
              <image :src="item.images.small"></image>
            </div>
            <div class="msg">
              <div class="moviename">{{item.title}}</div>
              <div class="score">评分:</div>
            </div>
          </view>
        </scroll-view>
      </div>
    </div>
<!--    即将上映-->
    <div class="list">
      <div class="title">
        <h2>即将上映</h2>
        <navigator url="#" class="more">更多</navigator>
      </div>
      <div class="scroll">
        <scroll-view scroll-x style="width: 100%" class="scroll-wrap">
          <view class="item" v-for="(item,index) in comminSoon" :key="index">
            <div class="movieImg">
              <image :src="item.images.small"></image>
            </div>
            <div class="msg">
              <div class="moviename">{{item.title}}</div>
              <div class="score">评分:</div>
            </div>
          </view>
        </scroll-view>
      </div>
    </div>
<!--top250-->
    <div class="list">
      <div class="title">
        <h2>TOP250</h2>
        <navigator url="#" class="more">更多</navigator>
      </div>
      <div class="scroll">
        <scroll-view scroll-x style="width: 100%" class="scroll-wrap">
          <view class="item" v-for="(item,index) in top250" :key="index">
            <div class="movieImg">
              <image :src="item.images.small"></image>
            </div>
            <div class="msg">
              <div class="moviename">{{item.title}}</div>
              <div class="score">评分:</div>
            </div>
          </view>
        </scroll-view>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
        // 影院热映
        onMovie: [],
        // 即将上映
        comminSoon: [],
        // top 250
        top250: []
    }
  },


  methods: {
  },

  created () {
      wx.request({
          url: 'https://api.douban.com/v2/movie/in_theaters?apikey=0df993c66c0c636e29ecbb5344252a4a',
          method: "GET",
          header: {
              'content-type': 'JSON'
          },
          success: res => {
              // 解构：
              let { data, statusCode } = res;
              // 判断响应状态
              if (statusCode === 200) {
                  // 请求成功,将数据源进行保存
                  this.onMovie = data.subjects;
              } else {
                  console.log('出错啦')
              }
          }
      });
      // 即将上映
      wx.request({
        url: 'https://api.douban.com/v2/movie/coming_soon?apikey=0df993c66c0c636e29ecbb5344252a4a',
        method: "GET",
        header: {
          'content-type': 'JSON'
        },
        success: res => {
          // 解构：
          let { data, statusCode } = res;
          // 判断响应状态
          if (statusCode === 200) {
            // 请求成功,将数据源进行保存
            this.comminSoon = data.subjects;
          } else {
            console.log('出错啦')
          }
        }
      });
      // top250
      wx.request({
        url: 'https://api.douban.com/v2/movie/top250?apikey=0df993c66c0c636e29ecbb5344252a4a',
        method: "GET",
        header: {
          'content-type': 'JSON'
        },
        success: res => {
          // 解构：
          let { data, statusCode } = res;
          // 判断响应状态
          if (statusCode === 200) {
            // 请求成功,将数据源进行保存
            this.top250 = data.subjects;
          } else {
            console.log('出错啦')
          }
        }
      })

  }
}
</script>

<style scoped lang="less" type="text/less">
  .header{
    display: flex;
    // 一左一右对齐
    justify-content: space-between;
    box-sizing: border-box;
    padding: 0 36rpx;
    width: 100%;
    height: 94rpx;
    border-bottom: 1px solid #eee;
    .h-left{
      font-size: 24px;
      line-height: 94rpx;
      color: #42bd56;
      font-weight: bold;
    }
    .h-right button{
      width: 230rpx;
      height:58rpx;
      margin-top: 18rpx;
      font-size: 14px;
      line-height: 58rpx;
      color: #fff;
      background: #42bd56;
    }
  }
  .list{
    .title{
      height: 98rpx;
      padding: 0 36rpx;
      display: flex;
      justify-content: space-between;
      align-items: center;
      h2{
        font-size: 20px;
      }
      .more{
        font-size: 16px;
        color: #42bd56;
      }
    }
    .scroll{
      width: 100%;
      overflow: hidden;
      white-space: nowrap;
      .scroll-wrap{
        .item{
          display: inline-block;
          width: 200rpx;
          height: 400rpx;
          margin-right: 14rpx;
          &:first-child{
            margin-left: 36rpx;
          }
          &:last-child{
            margin-right: 36rpx;
          }
          .movieImg{
            image{
              width: 200rpx;
              height: 285rpx;
            }
          }
          .msg{
            text-align: center;
            .moviename{
              font-size: 14px;
              line-height: 60rpx;
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
            }
            .score{
              font-size: 12px;
              line-height: 30rpx;
            }
          }
        }
      }
    }
  }
</style>
