<template>
  <v-container>
    <h1 v-if="rock">Oh he rocks all right</h1>
    <v-row class="text-center">
      <!-- <v-col cols="12">
        <v-img
          :src="require('../assets/logo.svg')"
          class="my-3"
          contain
          height="200"
        />
      </v-col> -->
      <v-col class="my-6">
        <v-card color="primary">
          <v-card-title>About</v-card-title>
          <v-card-text class="subheading px-6 bio">
            "Steven wears his heart on his sleeve and keeps his soul in a bottle of ink. His mind is a quill at the ready. As a longtime writer and performer while a major part of Oblio Duo and its various offshoots throughout the 00’s (Oblio Duo + The Archers, Oblio’s Arrow), Steven has always understood the craft of songwriting. His instrumental talents are as varied as the genres he’s been able to express himself in. He’s just as likely to remind you of Harry Nilsson as he is Joe Strummer, both in sound and ethos. Steven admittedly aspires to be a less-successful version of John Lurie, with a dog army in the middle of nowhere. That should give the reader more insight into the ramblin’ troubadour that comprises the makeup of Mr. Lawson. When you listen to the songs on Steven’s self-titled debut solo outing, there’s no hiding the fact that life can be hard and that Steven has done some hard living. The constant reminder in between the beautiful interplay of pain and joy is that rarely does one find satisfaction or strength of character in an easy life. Luckily for us, Steven is strong enough to know that, endure it successfully and set it to music."
          </v-card-text>
          <p class="font-italic">-Snappy Little Numbers founder Chuck Coffey</p>
          <v-icon>mdi-arrow-right-bold-outline</v-icon>
        </v-card>
      </v-col>
      <!-- <v-col
        class="mb-5"
        cols="12"
      >
        <h2 class="headline font-weight-bold mb-3">
          What's next?
        </h2>

        <v-row justify="center">
          <a
            v-for="(next, i) in whatsNext"
            :key="i"
            :href="next.href"
            class="subheading mx-3"
            target="_blank"
          >
            {{ next.text }}
          </a>
        </v-row>
      </v-col>

      <v-col
        class="mb-5"
        cols="12"
      >
        <h2 class="headline font-weight-bold mb-3">
          Important Links
        </h2>

        <v-row justify="center">
          <a
            v-for="(link, i) in importantLinks"
            :key="i"
            :href="link.href"
            class="subheading mx-3"
            target="_blank"
          >
            {{ link.text }}
          </a>
        </v-row>
      </v-col>

      <v-col
        class="mb-5"
        cols="12"
      >
        <h2 class="headline font-weight-bold mb-3">
          Ecosystem
        </h2>

        <v-row justify="center">
          <a
            v-for="(eco, i) in ecosystem"
            :key="i"
            :href="eco.href"
            class="subheading mx-3"
            target="_blank"
          >
            {{ eco.text }}
          </a>
        </v-row>
      </v-col> -->
    </v-row>
    <v-row class="d-flex justify-center">
      <v-col cols="6">
      <iframe
          src="https://open.spotify.com/embed/album/3Hj1E8QUwppAwTiMqTkY30?utm_source=generator"
          width="100%"
          height="380"
          frameBorder="2"
          allowfullscreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        >
        </iframe>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    data: () => ({
      rock: false,
      ecosystem: [
        {
          text: 'vuetify-loader',
          href: 'https://github.com/vuetifyjs/vuetify-loader',
        },
        {
          text: 'github',
          href: 'https://github.com/vuetifyjs/vuetify',
        },
        {
          text: 'awesome-vuetify',
          href: 'https://github.com/vuetifyjs/awesome-vuetify',
        },
      ],
      importantLinks: [
        {
          text: 'Documentation',
          href: 'https://vuetifyjs.com',
        },
        {
          text: 'Chat',
          href: 'https://community.vuetifyjs.com',
        },
        {
          text: 'Made with Vuetify',
          href: 'https://madewithvuejs.com/vuetify',
        },
        {
          text: 'Twitter',
          href: 'https://twitter.com/vuetifyjs',
        },
        {
          text: 'Articles',
          href: 'https://medium.com/vuetify',
        },
      ],
      whatsNext: [
        {
          text: 'Explore components',
          href: 'https://vuetifyjs.com/components/api-explorer',
        },
        {
          text: 'Select a layout',
          href: 'https://vuetifyjs.com/getting-started/pre-made-layouts',
        },
        {
          text: 'Frequently Asked Questions',
          href: 'https://vuetifyjs.com/getting-started/frequently-asked-questions',
        },
      ],
    }),
  }
</script>

<style scoped>
  .bio {
    font-size: 1.2rem;
  }
</style>
