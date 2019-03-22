<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
  }
}
</script>

<style>
  body{
    background: #eaedf1;
  }
#app {
  top: 0;
  bottom: 0;
  width: 100%;
  position: absolute;
  background: #eaedf1;
  font-size: 14px;
  color: #333;

}
  .fade-enter-active,
  .fade-leave-active {
    transition: all .2s ease;
  }

  .fade-enter,
  .fade-leave-active {
    opacity: 0;
  }
  .padding25{padding:25px}
  .margin-bottom24{margin-bottom: 24px;}
  .bgfff{
    background: #fff;
  }
  table{width: 100%;border-collapse: collapse;table-layout: fixed;}
  .title01{
    font-size: 16px;
    margin-bottom: 26px;
    border-left: 5px solid #eaedf1;
    padding-left: 10px;
    color: #000;
  }
  .bgf5{background: #f5f5f5}
  .mg-bt30{margin-bottom: 30px;}
  .mg-bt20{margin-bottom: 20px;}
  .text-right{text-align: right;}
  .text-center{text-align: center}
  table,label,input li,.ivu-input{font-size: 14px !important;}
  .padding15{padding:15px;}
  .ivu-btn,input{box-shadow: none !important;}
  .margin-r10{margin-right: 10px;}
  .fullbox{position: absolute;left: 25px;bottom:25px;top:25px;right: 25px;background: #fff;}
  .content-full-box{position: absolute;left: 25px;bottom:25px;top:70px;right: 25px;border:1px solid #e2e2e2;}
  .scrollBar::-webkit-scrollbar {width: 6px;height: 6px;}
  .scrollBar::-webkit-scrollbar-thumb:hover { border: 1px solid #636363;background-color: #929292;}
  .scrollBar::-webkit-scrollbar-thumb {background-color: #cfcfd2;border-radius: 8px;background-clip: padding-box;min-height: 28px;}
  .scrollBar::-webkit-scrollbar-track-piece {background: #f3f3f3;}
  .clear:after{display: block;clear: both;content: '';}
  .relative{position: relative;}
</style>
