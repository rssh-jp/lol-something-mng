export default {
  methods: {
    LoginCheck: function () {
      const login = this.$cookies.get('login')

      if (login == null || !login.isLogin) {
        this.$router.push('/login')
        return
      }

      this.LoginSet(login.name)
    },
    LoginSet: function (name) {
      this.$global.user.name = name
      this.$global.user.isLogin = true

      this.$cookies.set('login', this.$global.user)
    },
    LoginRemove: function () {
      this.$global.user.name = ''
      this.$global.user.isLogin = false

      this.$cookies.remove('login')
    }
  }
}
