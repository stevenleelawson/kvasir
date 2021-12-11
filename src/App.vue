<template>
  <v-app>
    <div class="main-app">
    <v-app-bar
      app
      color="primary"
      dark
      class="mb-12"
      v-if="!this.$vuetify.breakpoint.xsOnly"
    >
    
      <v-row>
        <v-col
          cols="3"
          class="d-flex justify-start">
          <router-link to="/" class="link">
            <h2>STEVEN LEE LAWSON</h2>
          </router-link>
        </v-col>
        <v-col cols="2">
          <router-link to="/music-videos" class="link">
            <h2 color="white">Music Videos</h2>
          </router-link>
        </v-col>
        <v-col cols="2">
          <router-link to="/reviews" class="link">
            <h2 color="white">Reviews</h2>
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
    <v-app-bar
      app
      color="primary"
      dark
      class="mb-12"
      v-if="this.$vuetify.breakpoint.xsOnly"
    >
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <router-link to="/" class="link">
        <h2>STEVEN LEE LAWSON</h2>
      </router-link>
    </v-app-bar>
    <v-main>
      <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
      class="nav-drawer"
      dark
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item>
            <router-link to="/" class="link">
            <h1>Home</h1>
          </router-link>
          </v-list-item>
          <v-list-item>
            <router-link to="/music-videos" class="link">
              <h1 color="white">Music Videos</h1>
            </router-link>
          </v-list-item>
          <v-list-item>
            <router-link to="/reviews" class="link">
              <h1 color="white">Reviews</h1>
            </router-link>
          </v-list-item>
          <v-list-item>
            <v-btn
              href="http://snappylittlenumbers.limitedrun.com/products/698824-steven-lee-lawson-s-t-lp-digital"
              target="_blank"
              text
            >
              <span class="mr-2 back">Buy album on vinyl</span>
              <v-icon>mdi-arrow-right-bold-outline</v-icon>
            </v-btn>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
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
    drawer: false,
  }),

  isMobile() {
    return this.$vuetify.breakpoint.xsOnly;
  }
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
  .test {
    background-color: chartreuse;
    height:10vh;
    width: 100%;
  }
  .nav-drawer {
    height: 100vh;
  }
</style>
