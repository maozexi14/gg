<template>
  <div id="app">
    <keep-alive exclude="Detail">
    <router-view/>
    </keep-alive>
    <main-tabbar/>
  </div>
</template>

<script>

import MainTabbar from './components/tab_bar/main-tabbar'


export default {
  components: { MainTabbar, },
  name: 'App'
}
</script>

<style>
  @import 'assets/css/base.css';
</style>
