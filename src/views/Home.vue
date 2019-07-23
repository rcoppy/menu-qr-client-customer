<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <SignInForm />
  </div>
</template>

<script>
// @ is an alias to /src
import SignInForm from "@/components/SignInForm.vue";

export default {
  name: "home",
  components: {
    SignInForm
  }
};
</script>
