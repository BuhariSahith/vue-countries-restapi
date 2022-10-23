<template>
  <header class="shadow-2xl h-24 w-full">
    <div class="flex justify-between p-8">
      <h1 class="font-bold text-2xl">Countries</h1>
      <div class="flex cursor-pointer" @click="toggleTheme">
        <span
          title="enable light mode"
          class="dark-mode cursor-pointer"
          v-show="isSunIconHidden"
        >
          <fa icon="fa-solid fa-sun" class="fa-2x" />
        </span>
        <span
          title="enable dark mode"
          class="dark-mode cursor-pointer"
          v-show="isMoonIconHidden"
        >
          <fa icon="fa-solid fa-moon" class="fa-2x" />
        </span>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isSunIconHidden: false,
      isMoonIconHidden: true,
      userTheme: "light-theme",
    };
  },

  mounted() {
    const initUserTheme = this.getTheme() || this.getMediaPrefernce();
    this.setTheme(initUserTheme);
  },

  methods: {
    toggleTheme() {
      console.log("clicked");
      const activateTheme = localStorage.getItem("user-Theme");
      if (activateTheme === "light-theme") {
        this.isMoonIconHidden = false;
        this.isSunIconHidden = true;
        this.setTheme("dark-theme");
      } else {
        this.isMoonIconHidden = true;
        this.isSunIconHidden = false;
        this.setTheme("light-theme");
      }
    },

    setTheme(theme) {
      localStorage.setItem("user-Theme", theme);
      this.userTheme = theme;
      document.documentElement.className = theme;
    },

    getTheme() {
      return localStorage.getItem("user-Theme");
    },

    getMediaPrefernce() {
      const hasMediaPrefrences = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      return hasMediaPrefrences ? "dark-theme" : "light-theme";
    },
  },
};
</script>

<style scoped>
h1,
.dark-mode {
  color: var(--text-primary-color);
}
</style>
