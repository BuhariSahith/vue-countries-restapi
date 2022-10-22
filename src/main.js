/* eslint-disable vue/multi-word-component-names */
import { createApp } from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import App from "./App.vue";
import router from "./router";
import "./styles/app.css";

const app = createApp(App);
library.add(fas);
app.component("fa", FontAwesomeIcon);
app.use(router);
app.mount("#app");
