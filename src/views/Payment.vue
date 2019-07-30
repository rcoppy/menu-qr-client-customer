<template>
  <div class="payment-page">
    <div class="header-image"></div>
    <div class="page-header">
      <h1>Almost there!</h1>
    </div>
    <v-container class="mt-4">
      <h4>Pick a payment method</h4>
      <v-form class="payment-method-form">
        <label class="rad" data-payment-method="apple_pay">
          <input type="radio" name="rad1" value="apple_pay" />
          <i class="fab fa-cc-apple-pay"></i>
        </label>
        <label class="rad" data-payment-method="paypal">
          <input type="radio" name="rad1" value="paypal" />
          <i class="fab fa-cc-paypal"></i>
        </label>
        <label class="rad" data-payment-method="credit_card">
          <input type="radio" name="rad1" value="credit_card" />
          <i class="fas fa-credit-card"></i>
        </label>
        <label class="rad" data-payment-method="cash">
          <input type="radio" name="rad1" value="cash" />
          <i class="fas fa-money-bill-wave"></i>
        </label>
      </v-form>
      <v-form class="payment-split-settings">
        <v-switch v-model="splitBillSwitch" label="Split the bill?"></v-switch>
        <v-textfield label="Copayer's email"></v-textfield>
      </v-form>
    </v-container>
    <v-footer>
      <hr class="footer-divider" />
      <span class="order-total">
        <h2 class="order-total-text">Total</h2>

        <h2 class="order-total-amount">$TransactionPrice</h2>
      </span>
      <span class="order-buttons btn-group-lg">
        <v-btn>Back</v-btn>
        <v-btn class="payment-confirm-button" color="success">Make Payment</v-btn>
      </span>
    </v-footer>
  </div>
</template>

<script>
// @ is an alias to /src
//import SignInForm from "@/components/SignInForm.vue";

import {
  VContainer,
  VSwitch,
  VForm,
  VTextfield,
  VFooter,
  VButton
} from "vuetify/lib";
import { mapState } from "vuex";

export default {
  name: "Payment",
  components: {
    VContainer,
    VSwitch,
    VForm,
    VTextfield,
    VFooter,
    VButton
  },
  data() {
    return {};
  },
  methods: {},
  computed: {}
};
</script>
