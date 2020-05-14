<template>
  <div class="container">
    <div class="row">
      <div class="col-6 offset-3">
        <div class="card">
          <div class="card-header">
            Login
          </div>
          <div class="card-body">
            <b-form @submit.prevent="onSubmit">
              <b-form-group
                label="ID"
              >
                <b-form-input
                  v-model="form.id"
                  required
                >
                </b-form-input>
              </b-form-group>

              <b-form-group
                label="Password"
              >
                <b-form-input
                  type="password"
                  v-model="form.password"
                  required
                >
                </b-form-input>
              </b-form-group>

              <b-button type="submit" variant="primary">Login</b-button>

            </b-form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Login',
  data: function () {
    return {
      form: {
        id: '',
        password: ''
      }
    }
  },
  created: function () {
    this.LoginRemove()
    this.$emit('rerender')
  },
  methods: {
    onSubmit: function () {
      this.LoginSet(this.form.id)
      this.$router.push('/')
    }
  }
}
</script>
