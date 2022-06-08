<template>
  <div>
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
export default {
  name: "App",
};
</script>

<style>
</style>
