<template>
  <div class="orders-index">
    <v-container align-center>
      <h1>Your Orders</h1>
      <ul>
        <li
          @click="show_order_items(order)"
          v-for="order in orders"
          v-bind:key="order.id"
        >{{ order.created_at }}</li>
      </ul>
      <h2 v-if="isOrdersBlank">You have no orders at this time</h2>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
//import SignInForm from "@/components/SignInForm.vue";

//import { VContainer } from "vuetify/lib";
import { mapState } from "vuex";

export default {
  name: "OrdersIndex",
  components: {
    //VContainer
  },
  data() {
    return {};
  },
  methods: {
    show_order_items: function(order) {
      // TODO show items--fetch
    }
  },
  computed: {
    isOrdersBlank: function() {
      return this.orders_loaded_status === "success"
        ? this.orders.length < 1
        : true;
    },
    ...mapState(["orders", "orders_loaded_status"])
  },
  created() {
    this.$store.dispatch("fetch_orders");
  }
};
</script>