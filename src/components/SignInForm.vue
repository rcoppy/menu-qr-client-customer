<template>
  <div id="login">
    <h1>Login</h1>
    <input type="email" name="email" v-model="user.email" placeholder="Email" />
    <input type="password" name="password" v-model="user.password" placeholder="Password" />
    <button type="button" v-on:click="login()">Login</button>
  </div>
</template>

<script>
export default {
  name: "SignInForm",
  data() {
    return {
      user: {
        email: "",
        password: ""
      }
    };
  },
  methods: {
    login() {
      if (this.user.username != "" && this.user.password != "") {
        this.$http
          .post("http://localhost:3000/users/sign_in", { user: this.user })
          .then(function(response) {
            console.log(response);
          })
          .catch(function(error) {
            console.log(error);
          });
        //this.$emit("authenticated", true);
        //this.$router.replace({ name: "secure" });
      } else {
        // console.log("A username and password must be present");
      }
    }
  }
};
</script>

<style>
</style>
