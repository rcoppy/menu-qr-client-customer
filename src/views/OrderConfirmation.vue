<template>
  <div class="order-confirmation">
    <div class="page-header">
      <h1>Thanks for your order!</h1>
    </div>

    <v-container class="mt-4">
      <h4>Order Summary</h4>
      <div class="order-summary-list">
        <v-grid class="order-grid">
          <div v-for="item in order_items" v-bind:key="item.id">
            <span class="order-item">ItemName xQuantity></span>
            <span class="order-price">ItemCost</span>
          </div>
        </v-grid>
      </div>

      <h2>Total cost $203</h2>

      <hr />

      <div class="ratings-section mt-4">
        <h4>How'd we do?</h4>

        <div class="ratings-stars">
          <div class="stars-flex">
            <button type="button" class="btn btn-primary bmd-btn-icon">
              <i class="material-icons">grade</i>
            </button>
            <button type="button" class="btn btn-primary bmd-btn-icon">
              <i class="material-icons">grade</i>
            </button>
            <button type="button" class="btn btn-primary bmd-btn-icon">
              <i class="material-icons">grade</i>
            </button>
            <button type="button" class="btn btn-primary bmd-btn-icon">
              <i class="material-icons">grade</i>
            </button>
            <button type="button" class="btn btn-primary bmd-btn-icon">
              <i class="material-icons">grade</i>
            </button>
          </div>
        </div>

        <v-form class="mt-2 mx-2 text-center">
          <v-textarea
            id="feedback-text"
            class="feedback-textarea"
            rows="3"
            placeholder="Write us a note!"
          ></v-textarea>
          <v-btn large color="primary" class="mt-1">Submit Feedback</v-btn>
        </v-form>
      </div>

      <v-footer>
        <hr class="footer-divider" />

        <div class="text-center mt-2">
          <p>Did you enjoy your ordering experience?</p>
          <v-btn large color="success">Recommend Us</v-btn>
          <v-btn color="primary">Place Another Order</v-btn>
        </div>
      </v-footer>
    </v-container>
  </div>
</template>

<script>
import {
  VContainer,
  VFooter,
  VBtn,
  VTextarea,
  VForm,
  VGrid
} from "vuetify/lib";

export default {
  name: "OrderConfirmation",
  components: {
    VContainer,
    VFooter,
    VBtn,
    VTextarea,
    VForm,
    VGrid
  },
  data() {
    return {};
  },
  methods: {},
  computed: {},
  created() {
    this.$store.dispatch("fetch_order_items");
  }
};
</script>