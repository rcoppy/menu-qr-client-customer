<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on }"></template>

      <v-card>
        <v-card-title class="headline grey lighten-2" primary-title>
          <slot name="item-name">Item name</slot>,
          <strong>
            $
            <slot name="item-price">price</slot>
          </strong>
        </v-card-title>

        <v-card-text>
          <slot>Item description</slot>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="dialog = false">Back</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import {
  VDialog,
  VCard,
  VSpacer,
  VDivider,
  VBtn,
  VLayout,
  VForm,
  VTextField
} from "vuetify/lib";

export default {
  name: "ItemModal",
  components: {
    VDialog,
    VCard,
    VSpacer,
    VDivider,
    VBtn,
    VLayout,
    VForm,
    VTextField
  },
  data() {
    return {
      dialog: false
    };
  },
  methods: {}
};
</script>