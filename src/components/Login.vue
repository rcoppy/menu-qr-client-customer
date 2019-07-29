<template>
  <div>
    <v-layout column align-center>
      <h1>Sign in</h1>
      <v-layout wrap justify-space-around>
        <v-form class="login" @submit.prevent="login">
          <v-text-field v-model="user.email" label="Email" type="email"></v-text-field>
          <v-text-field v-model="user.password" label="Password" type="password"></v-text-field>
          <v-btn type="submit" v-on:click="login()">Login</v-btn>
        </v-form>
      </v-layout>
    </v-layout>
  </div>
</template>

<script>
import { VBtn, VLayout, VForm, VTextField } from "vuetify/lib";

export default {
  name: "Login",
  components: {
    VBtn,
    VLayout,
    VForm,
    VTextField
  },
  data() {
    return {
      user: {
        email: "",
        password: ""
      }
    };
  },
  methods: {
    login: function() {
      if (this.user.email != "" && this.user.password != "") {
        this.$store
          .dispatch("login", { user: this.user })
          .then(() => this.$router.push("/"))
          .catch(err => console.log(err));
      }
    }
  }
};
</script>