<template>
  <HeaderComponent />
</template>

<script>
import HeaderComponent from "./components/Header.vue";
export default {
  components: {
    HeaderComponent,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@100;400&display=swap");

#app {
  font-family: "IBM Plex Sans", sans-serif;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: var(--background-color-primary);
}

/* For light color */
:root {
  --background-color-primary: rgba(255, 255, 255, 0.87);
  --text-primary-color: hsl(200, 15%, 8%);
}

/* For Dark Color */
:root.dark-theme {
  --background-color-primary: #333333;
  --text-primary-color: #ffffff;
}
</style>
