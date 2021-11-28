<template>
  <div class="music-vid content">
    <v-container>
      <v-row class="d-flex justify-center my-2">
        <v-col
          class="mx-auto"
          cols="6"
        >
          <v-card
            color="primary"
            class="d-flex flex-column justify-center my-4"
          >
            <v-container>
                <h1>ECONOMICS</h1>
                <p>"Economics" is the first single and the first song on the album. Here you can see man vs man, with the support of his doggos.</p>
                <div class="d-flex justify-center my-2">
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/lGz6LhBg1Is" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </v-container>
          </v-card>
        </v-col>
      </v-row>
      <v-row class="d-flex justify-center my-2">
        <v-col
          class="mx-auto"
          cols="6"
        >
          <v-card
            color="primary"
            class="d-flex flex-column justify-center my-4"
          >
            <v-container>
                <h1>NEVER WANNA TAKIN YOU HOME</h1>
                <p>"Never Wanna Takin' You Home" is the second to last song on the album. The setting for this video is at the iconic Loretta Heights.</p>
                <div class="d-flex justify-center my-2">
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/S9uM4f-rmqM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </v-container>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
// import Home from './components/Home';

export default {
  name: 'App',

  components: {
    // Home,
  },

  data: () => ({
    
  }),
};
</script>
<style scoped>
  .music-vid {
    height: 150vh;
  }
</style>
