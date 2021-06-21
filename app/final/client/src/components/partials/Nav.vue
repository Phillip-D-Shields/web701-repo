<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="/">
        <strong class="is-size-4">Open Source Kitchen</strong>
      </a>

      <a
        :aria-expanded="isActive"
        :class="{ 'is-active': isActive }"
        role="button"
        class="navbar-burger"
        aria-label="menu"
        data-target="collapse"
        @click="isActive = !isActive"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <div
      id="collapse"
      :class="{ 'is-active': isActive }"
      class="navbar-menu is-paddingless"
    >
      <div class="navbar-start">
        <router-link to="/about" class="navbar-item">About</router-link>
        <router-link to="/getInvolved" class="navbar-item"
          >Get Involved</router-link
        >
        <router-link to="/connect" class="navbar-item">Connect</router-link>   
      </div>
     
        <div class="navbar-item">
          <div class="buttons">
            <!-- Check that the SDK client is not currently loading before accessing is methods -->
            <div v-if="!$auth.loading">
              <!-- show login when not authenticated -->
              <a
                v-if="!$auth.isAuthenticated"
                @click="login"
                class="button is-dark"
                ><strong>Sign in</strong></a
              >
              <!-- show logout when authenticated -->
              <a
                v-if="$auth.isAuthenticated"
                @click="logout"
                class="button is-dark"
                ><strong>Log out</strong></a
              >
            </div>
          </div>
        </div>
      </div>
    
  </nav>
</template>
<script>
export default {
  name: "Nav",
  methods: {
    // Log the user in
    login() {
      this.$auth.loginWithRedirect();
    },
    // Log the user out
    logout() {
      this.$auth.logout({
        returnTo: window.location.origin,
      });
    },
  },
  data() {
    return {
      isActive: false,
      showNavbar: true,
    };
  },
};
</script>
<style lang="scss" scoped>
nav {
  margin-top: 25px;
  margin-bottom: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #d88d00;
    }
  }
}
</style>