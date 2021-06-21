<template>
  <div id="app">
    <Nav />
    <router-view/>
  </div>
</template>
<script>
import Nav from './components/partials/Nav.vue';
export default {
  name: 'app',
  components: {
    Nav
  }  
}
</script>
<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>

// $auth.user object
// { "nickname": "pip", "name": "pip@pip.com", "picture": "https://s.gravatar.com/avatar/0563f57ed7f4fc5ac8accd74df0f509d?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fpi.png", "updated_at": "2021-05-26T04:06:48.060Z", "email": "pip@pip.com", "email_verified": false, "sub": "auth0|60ac631243be1e006a8638ed" }