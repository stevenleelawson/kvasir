<template>
  <v-app>
    <div class="main-app">
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <h1>STEVEN LEE LAWSON</h1>
        <!-- <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        /> -->
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="http://snappylittlenumbers.limitedrun.com/products/698824-steven-lee-lawson-s-t-lp-digital"
        target="_blank"
        text
      >
        <span class="mr-2 back">Buy album on vinyl</span>
        <v-icon>mdi-arrow-right-bold-outline</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <Home/>
    </v-main>
    </div>
  </v-app>
</template>

<script>
import Home from './components/Home';

export default {
  name: 'App',

  components: {
    Home,
  },

  data: () => ({
    //
  }),
};
</script>

<style scoped>
  .v-application {
   font-family: 'EB Garamond', serif !important;
   font-size: 1.5rem;
  }
</style>
