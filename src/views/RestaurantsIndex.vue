<template>
  <div class="restaurants-index">
    <v-container align-center>
      <h1>Restaurants</h1>
      <ul>
        <li v-for="restaurant in this.restaurants" v-bind:key="restaurant.id">
          <a :href="restaurantURL(restaurant.id)">{{ restaurant.name }}</a>
        </li>
      </ul>
      <h2 v-if="isRestaurantsBlank">No restaurants listed at this time</h2>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
//import SignInForm from "@/components/SignInForm.vue";

//import { VContainer } from "vuetify/lib";
import { mapState } from "vuex";

export default {
  name: "RestaurantsIndex",
  components: {
    //VContainer
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
    isRestaurantsBlank: function() {
      return this.restaurant_loaded_status === "success"
        ? this.restaurants.length < 1
        : true;
    },
    ...mapState(["restaurants", "restaurant_loaded_status"])
  },
  created() {
    this.$store.dispatch("fetch_restaurants");
  }
};
</script>