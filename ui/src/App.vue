<template>
  <div id="app">
    <b-navbar toggleable="lg" type="dark" variant="info">
      <router-link to="/" class="navbar-brand">Home</router-link>

      <b-navbar-nav v-if="$global.user.isLogin">
        <b-nav-item-dropdown text="Menu">
          <b-dropdown-item>
            <router-link to="/" class="dropdown-item">Home</router-link>
          </b-dropdown-item>
          <b-dropdown-item>
            <router-link to="/about" class="dropdown-item">About</router-link>
          </b-dropdown-item>
          <b-dropdown-item>
            <router-link to="/login" class="dropdown-item">Login</router-link>
          </b-dropdown-item>
        </b-nav-item-dropdown>

      </b-navbar-nav>

     <b-navbar-nav v-if="$global.user.isLogin" class="ml-auto">
       <label style="padding-top: 0.5rem" disabled>{{$global.user.name}}</label>
       <router-link to="/" class="nav-link">Logout</router-link>
     </b-navbar-nav>

    </b-navbar>

    <router-view v-on:rerender="onRerender"/>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  created: function () {
  },
  data: function () {
    return {
    }
  },
  methods: {
    onRerender: function () {
      this.$forceUpdate()
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
