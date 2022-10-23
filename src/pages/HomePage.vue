<template>
  <div>Home</div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "HomePage",

  components: {},

  data() {
    return {
      regions: [],
      searchTerm: "",
      selectedRegion: "",
    };
  },

  // so we can use async operation in mounted hooks
  async mounted() {
    await this.getCountries();
    this.getRegions();
  },

  computed: {
    ...mapGetters("countries", ["getAllcountries"]),
  },

  methods: {
    ...mapActions("countries", ["getCountries"]),
    getRegions() {
      const allRegions = this.getAllcountries.map((country) => country.region);
      const idealRegions = [...new Set(allRegions)];
      this.regions = idealRegions;
      console.table(this.regions);
    },
  },
};
</script>

<style scoped></style>
