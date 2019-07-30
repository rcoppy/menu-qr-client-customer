<template>
  <div class="order-summary">
    <div class="order-title">
      <h1>Your order</h1>
    </div>
    <v-container class="order-summary-list">
      <v-grid class="order-grid">
        <div v-for="item in items" v-bind:key="item.id">
          <span class="order-item">ItemName xItemQuantity</span>
          <span class="order-price">ItemPrice</span>
          <v-btn class="order-action" icon color="danger">
            <i class="material-icons">delete_outline</i>
          </v-btn>
        </div>
      </v-grid>
    </v-container>

    <v-footer>
      <hr class="order-summary-divider" />
      <span class="order-total">
        <h2 class="order-total-text">Total</h2>
        <h2 class="order-total-amount">
          <!--pop by JS-->
        </h2>
      </span>
      <span class="order-buttons">
        <v-btn large>Back</v-btn>
        <v-btn large color="success">Confirm Order</v-btn>
      </span>
    </v-footer>
  </div>
</template>

<script>
//import { VFooter, VBtn, VContainer, VGrid } from "vuetify/lib";

export default {
  name: "OrderSummary",
  components: {
    /*VFooter,
    VBtn,
    VContainer,
    VGrid*/
  },
  data() {}
};
</script>
