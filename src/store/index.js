import { createStore, createLogger } from "vuex";
import countries from "../store/countries/index";

// We can entire store concept in one file || Mulitple module and named in one store
/*const Store = createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
});*/

// eslint-disable-next-line no-undef
const debug = process.env.NODE_ENV !== "production";

const Store = createStore({
  modules: {
    countries,
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
});

export default Store;
