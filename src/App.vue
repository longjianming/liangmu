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
}
  .fade-enter-active,
  .fade-leave-active {
    transition: all .2s ease;
  }

  .fade-enter,
  .fade-leave-active {
    opacity: 0;
  }
</style>
