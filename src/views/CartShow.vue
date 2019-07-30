<template>
  <div class="cart-show">
    <v-container align-center>
      <h1>Your Cart</h1>
      <ul>
        <li v-for="item in cart_items" v-bind:key="item.id">{{ item.name }}, {{ item.quantity }}</li>
      </ul>
      <h2 v-if="isCartEmpty">Your cart is empty</h2>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
//import SignInForm from "@/components/SignInForm.vue";

//import { VContainer } from "vuetify/lib";
import { mapState } from "vuex";

export default {
  name: "CartShow",
  components: {
    //VContainer
  },
  data() {
    return {};
  },
  methods: {},
  computed: {
    isCartEmpty: function() {
      return this.cart.length < 1;
    },
    ...mapState(["restaurants", "restaurant_loaded_status"])
  }
};
</script>