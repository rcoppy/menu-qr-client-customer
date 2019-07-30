<template>
  <div class="restaurant-show">
    <v-container align-center>
      <h1>{{ restaurants.filter((restaurant) => id === params[id]).name }}</h1>
      <ul>
        <li v-for="item in items" v-bind:key="item.id">
          <a @click="set_item_show_data(item)" v-on="on">{{ item.name }}, {{ item.price }}</a>
        </li>
      </ul>
      <ItemModal></ItemModal>
      <h2 v-if="isItemsBlank">No items listed for this restaurant</h2>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
//import SignInForm from "@/components/SignInForm.vue";

import { ItemModal } from "@/components/ItemModal.vue";
import { VContainer } from "vuetify/lib";
import { mapState } from "vuex";

export default {
  name: "RestaurantShow",
  components: {
    VContainer
  },
  data() {
    return {};
  },
  methods: {
    restaurantURL: function(id) {
      return "/restaurants/" + id;
    }
  },
  computed: {
    restaurant: function() {},
    isItemsBlank: function() {
      return this.items_loaded_status === "success"
        ? this.items.length < 1
        : true;
    },
    ...mapState(["restaurants", "restaurant_loaded_status"])
  },
  created() {
    this.$store.dispatch("fetch_restaurants");
  }
};
</script>