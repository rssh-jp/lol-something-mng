<template>
  <div id="app">
    <b-navbar toggleable="lg" type="dark" variant="info">
      <router-link to="/" class="navbar-brand">Home</router-link>

      <b-navbar-nav v-if="isLogin">
        <b-navbar-nav>
          <b-nav-item-dropdown text="Menu">
            <router-link to="/" class="dropdown-item">Home</router-link>
            <router-link to="/about" class="dropdown-item">About</router-link>
          </b-nav-item-dropdown>
        </b-navbar-nav>

      </b-navbar-nav>

     <b-navbar-nav v-if="isLogin" class="ml-auto">
       <label style="padding-top: 0.5rem" disabled>{{name}}</label>
       <router-link to="/" class="nav-link">Logout</router-link>
     </b-navbar-nav>
    </b-navbar>

    <div id="nav" right>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  created: function () {
    const self = this
    setTimeout(function () {
      self.setLogin(true)
    }, 2000)
  },
  data: function () {
    return {
      isLogin: false,
      name: 'test'
    }
  },
  methods: {
    setLogin: function (isLogin) {
      this.isLogin = isLogin

      const self = this

      setTimeout(function () {
        self.setLogin(!isLogin)
      }, 2000)
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
