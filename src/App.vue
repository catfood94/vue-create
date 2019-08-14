<template>
  <div id="app">
      <div>
        <router-link to="/login">Login</router-link>
        <router-view></router-view>
      </div>
  </div>
</template>

<script>


import Login from "./views/login/Login";

export default {
  name: 'app',
  components: {
    Login
  }
}
</script>

<style lang="less">
    @import "assets/style/reset1.css";
#app {

}
</style>
