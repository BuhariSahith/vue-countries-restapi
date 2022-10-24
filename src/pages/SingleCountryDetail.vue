<template>
  <div class="single-view-wrapper px-10 py-10">
    <div class="back" @click="goBack">
      <figure class="back-arrow w-5 h-5">
        <img src="@/assets/back.svg" alt="" />
      </figure>
      <h4>Back</h4>
    </div>
    <div class="info-detail-wrap">
      <figure class="img">
        <img :src="getSingleCountryObject.flags?.png" alt="" />
      </figure>
      <div class="content">
        <h1>{{ getSingleCountryObject.name?.common }}</h1>
        <div>
          <div class="upper-content">
            <div class="left">
              <p class="mb-3">
                <strong> Native name</strong> :
                {{ getSingleCountryObject.name?.nativeName?.kal?.official }}
              </p>
              <p class="mb-3">
                <strong> Population </strong>:
                {{ getSingleCountryObject.population }}
              </p>
              <p class="mb-3">
                <strong> Region </strong>: {{ getSingleCountryObject.region }}
              </p>
              <p class="mb-3">
                <strong> Sub Region </strong>:
                {{ getSingleCountryObject.subregion }}
              </p>
              <p class="mb-3">
                <strong> Capital(s)</strong>:
                <span
                  v-for="capital in getSingleCountryObject.capital"
                  :key="capital"
                >
                  {{ capital }},</span
                >
              </p>
            </div>
            <div class="right">
              <p class="mb-3">
                <strong>Currencies</strong>:
                <span
                  v-for="currency in getSingleCountryObject.currencies"
                  :key="currency"
                  >{{ currency.name }},</span
                >
              </p>
              <p class="mb-3">
                <strong>Languages</strong>:
                <span
                  v-for="language in getSingleCountryObject.languages"
                  :key="language"
                  >{{ language }},</span
                >
              </p>
            </div>
          </div>
        </div>
        <div class="lower-content mt-12">
          <p>
            <strong>Border Countries</strong>:
            <span
              v-for="border in getSingleCountryObject.borders"
              :key="border"
            >
              {{ border }}{{ "," + "  " }}</span
            >
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "SingleCountryDetail",
  props: {},
  data() {
    return {};
  },
  created() {
    const countryName = this.$route.params.name;
    this.getSingleCountry(countryName);
  },
  computed: {
    ...mapGetters("countries", ["getSingleCountryObject"]),
  },
  methods: {
    ...mapActions("countries", ["getSingleCountry"]),
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>

<style scoped>
.single-view-wrapper {
  padding: 40px 60px;
  background: var(--background-color-primary);
  color: var(--text-primary-color);
}
.info-detail-wrap {
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px; */
}
figure {
  width: 600px;
}
figure img {
  width: 100%;
}
.content {
  width: 600px;
}
.content p {
  margin-bottom: 20px;
}
.back {
  cursor: pointer;
  display: flex;
  gap: 0 10px;
  margin-bottom: 40px;
  border-radius: 6px;
  background: var(--background-color-secondary);
  width: max-content;
  padding: 5px 10px;
}
h1 {
  margin-bottom: 50px;
}
.upper-content {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}
.lower-content {
  margin-top: 50px;
}
.back-arrow {
  width: 20px;
  height: 20px;
}

@media only screen and (max-width: 600px) {
  .single-view-wrapper {
    padding: 40px 28px;
  }
  .content {
    flex-direction: column;
  }
  .back {
    box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.293139);
    border-radius: 2px;
    width: 104px;
    margin-bottom: 64px;
    justify-content: center;
    padding: 6px;
    background: var(--background-color-secondary);
  }

  figure {
    max-width: 320px;
  }
  .info-detail-wrap {
    width: 100%;
  }
  .upper-content {
    display: block;
  }
}
</style>
