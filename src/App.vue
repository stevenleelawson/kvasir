<template>
  <v-app>
    <div class="main-app">
    <v-app-bar
      app
      color="primary"
      dark
      class="mb-12"
    >
      <v-row>
        <v-col
          cols="3"
          class="d-flex justify-start">
          <router-link to="/" class="link">
            <h1>STEVEN LEE LAWSON</h1>
          </router-link>
        </v-col>
        <v-col cols="2">
          <router-link to="/music-videos" class="link">
            <h1 color="white">Music Videos</h1>
          </router-link>
        </v-col>
        <v-col
          cols="3"
          class="d-flex justify-start"
        >
          <v-btn
            href="http://snappylittlenumbers.limitedrun.com/products/698824-steven-lee-lawson-s-t-lp-digital"
            target="_blank"
            text
          >
            <span class="mr-2 back">Buy album on vinyl</span>
            <v-icon>mdi-arrow-right-bold-outline</v-icon>
          </v-btn>
        </v-col>
        
                
        
      </v-row>
    </v-app-bar>

    <v-main>
        <v-spacer></v-spacer>
      <!-- <Home/> -->
    <router-view/>
    </v-main>

    </div>
  </v-app>
</template>

<script>
// import Home from './components/Home';

export default {
  name: 'App',

  components: {
    // Home,
  },

  data: () => ({
    //
  }),
};
</script>

<style scoped>
  .v-application {
   font-family: 'EB Garamond', serif !important;
   /* font-size: 1.5rem; */
  }
  .link {
    color: #ffffff;
    text-decoration: none;
    cursor: pointer;
  }
</style>
