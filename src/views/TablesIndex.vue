<template>
  <div class="tables-index">
    <v-container align-center>
      <h1>Tables in {{ restaurant }}</h1>
      <p>Select a table to order from</p>
      <ul>
        <li v-for="table in this.tables" v-bind:key="table.id">
          <a @click.prevent="set_table(table.id)">Table {{ table.table_number }}</a>
        </li>
      </ul>
      <h2 v-if="isTablesBlank">No tables listed for this restaurant</h2>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
//import SignInForm from "@/components/SignInForm.vue";

//import { VContainer } from "vuetify/lib";
import { mapState } from "vuex";

export default {
  name: "TablesIndex",
  components: {
    //VContainer
  },
  data() {
    return {};
  },
  methods: {
    set_table: function(id) {
      this.$store.commit("set_local_table", id);
    }
  },
  computed: {
    isTablesBlank: function() {
      return this.tables_loaded_status === "success"
        ? this.tables.length < 1
        : true;
    },
    ...mapState(["tables", "tables_loaded_status"])
  },
  created() {
    this.$store.dispatch("fetch_tables");
  }
};
</script>