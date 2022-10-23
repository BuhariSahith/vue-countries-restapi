<template>
  <div class="home pt-8">
    <div class="flex justify-center">
      <div class="search relative mx-8 shadow-lg">
        <figure>
          <img
            class="absolute right-3 top-5"
            src="@/assets/search.svg"
            alt=""
          />
        </figure>
        <input
          type="text"
          placeholder="Search for a country..."
          v-model.lazy="searchTerm"
        />
      </div>

      <div
        class="select w-64 h-14 text-center p-3 flex justify-center items-center rounded-md shadow-lg"
      >
        <select name="" id="" v-model="selectedRegion">
          <option value="">Filter by Region</option>
          <option :value="region" v-for="region in regions" :key="region">
            {{ region }}
          </option>
        </select>
      </div>
    </div>

    <div class="home_content">
      <Card :countries="filteredCountries"> </Card>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import _ from "lodash";
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
    console.log("mounted lifecyle hook");
    await this.getCountries();
    this.getRegions();
  },

  created() {
    console.log("created lifecyle hook");
  },

  beforeCreate() {
    console.log("beforecreated lifecyle hook");
  },

  beforeUpdate() {
    console.log("before-upated lifecycle hook");
  },

  updated() {
    console.log(this.selectedRegion);
    console.log("updated lifecyle hook");
  },

  beforeMount() {
    console.log("beformounted lifecyle hook");
  },

  computed: {
    // console.log("computed");
    ...mapGetters("countries", ["getAllcountries"]),
  },

  methods: {
    ...mapActions("countries", ["getCountries"]),
    getRegions() {
      const allRegions = _.map(this.getAllcountries, (country) => {
        return country.region;
      });
      const idealRegions = [...new Set(allRegions)]; // set one of pros will remove the duplicate values
      this.regions = idealRegions;
      console.table(this.regions);
    },
  },
};
</script>

<style scoped>
.home {
  background: var(--background-color-primary);
}

.search,
.select {
  background: var(--background-color-secondary);
}

.search {
  width: 480px;
  justify-content: left;
  padding-left: 32px;
}

.inputs {
  background: var(--background-color-primary);
}

figure img {
  color: var(--text-primary-color);
}

select,
input {
  padding: 10px;
  border: none;
  width: 250px;
  outline: none;
  background: var(--background-color-secondary);
  color: var(--text-primary-color);
}
input::placeholder {
  color: var(--text-primary-color);
}

@media only screen and (max-width: 600px) {
  .home {
    padding: 24px 16px;
  }
  .inputs {
    flex-direction: column;
    gap: 40px;
  }
  .search {
    width: 100%;
  }
}
</style>
