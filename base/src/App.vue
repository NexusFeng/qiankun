<template>
  <div>
    <test></test>
    <el-menu :router="true" mode="horizontal">
      <el-menu-item index="/">home</el-menu-item>
      <el-menu-item index="/vue">vue项目</el-menu-item>
      <el-menu-item index="/react">react项目</el-menu-item>
    </el-menu>
    <router-view></router-view>
    <div id="vue2"></div>
    <div id="react"></div>
  </div>
</template>

<script>
import test from './views/test.vue'

export default {
  name: "App",
  components: {
    test
  }
};
</script>

<style>
</style>
