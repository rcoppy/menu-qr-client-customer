<template>
  <v-app>
    <v-app-bar app>
      <span>SeatNeat</span>
    </v-app-bar>

    <v-content>
      <Login />
    </v-content>
  </v-app>
</template>

<script>
import Login from "./components/Login";

export default {
  name: "App",
  components: {
    Login
  },
  data: () => ({
    //
  })
};
</script>
