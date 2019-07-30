<template>
  <div class="order-show">
    <v-container align-center>
      <h1>Order #{{ order.id }}</h1>
      <ul>
        <li v-for="item in order_items" v-bind:key="item.id">{{ item.name }}, x{{ item.quantity }}</li>
      </ul>
      <h2 v-if="isItemsBlank">This order is empty</h2>
      <h2>Order status</h2>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
//import SignInForm from "@/components/SignInForm.vue";

//import { VContainer } from "vuetify/lib";
import { mapState } from "vuex";

export default {
  name: "OrderShow",
  components: {
    //VContainer
  },
  data() {
    return {};
  },
  methods: {},
  computed: {
    isItemsBlank: function() {
      return this.order_items_loaded_status === "success"
        ? this.items.length < 1
        : true;
    },
    ...mapState(["order_items", "order_items_loaded_status"])
  },
  created() {
    this.$store.dispatch("fetch_order_items");
  }
};
</script>