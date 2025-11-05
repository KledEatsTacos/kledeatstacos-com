const meta = [
  {
    name: "charset",
    content: "utf-8",
  },
  {
    name: "title",
    content: process.env.NUXT_APP_TITLE,
  },
  {
    name: "viewport",
    content: "width=device-width, initial-scale=1",
  },
  {
    name: "author",
    content: "Mustafa Masri",
  },
  {
    name: "description",
    content:
      "I'm Mustafa, I like to create lots of stuff. You will find some of my work here.",
  },
  {
    name: "keywords",
    content:
      "mustafa, masri, software, engineer, developer, web, mobile, mustafa masri, technology, website, personal, blog, portfolio, kledeatstacos",
  },
  {
    name: "robots",
    content: "index, follow",
  },
  {
    name: "theme-color",
    content: "#000000",
  },
];

const appConfig = {
  profiles: {
    linkedin: process.env.LINKEDIN_PROFILE,
    github: process.env.GITHUB_PROFILE,
  },
  themes: {
    dark: process.env.NUXT_APP_DARK_THEME,
    light: process.env.NUXT_APP_LIGHT_THEME,
  },
};

const runtimeConfig = {
  lastfm: {
    apiKey: process.env.LASTFM_API_KEY,
    username: process.env.LASTFM_USERNAME,
    apiUrl: 'https://ws.audioscrobbler.com/2.0/',
  },
  youtube: {
    apiKey: process.env.YOUTUBE_API_KEY,
  },
  steam: {    apiKey: process.env.STEAM_API_KEY,
    steamId: process.env.STEAM_ID
  }
};

export default defineNuxtConfig({
  ssr: true,

  modules: [
    "nuxt-primevue",
    "@pinia/nuxt",
    "@nuxt/content",
    "dayjs-nuxt",
    "@nuxt/image",
    "nuxt-gtag",
  ],

  gtag: {
    id: 'G-YN3N2Z1M59',
  },

  css: ["primeicons/primeicons.css"],

  primevue: {
    options: {
      ripple: true,
    },
  },

  appConfig,
  runtimeConfig,

  app: {
    head: {
      title: process.env.NUXT_APP_TITLE,
      charset: "utf-8",
      htmlAttrs: {
        lang: "en",
      },
      meta,      link: [
        {
          id: "theme-link",
          rel: "stylesheet",
          href: process.env.NUXT_APP_DARK_THEME,
        },
        {
          rel: 'icon',
          type: 'image/png',
          href: '/TacoFavicon192.png'
        },
        {
          rel: 'apple-touch-icon',
          href: '/TacoFavicon192.png'
        },
        {
          rel: 'manifest',
          href: '/site.webmanifest'
        }
      ],
      script: [
        {
          src: "https://kit.fontawesome.com/f1354c0521.js",
          crossorigin: "anonymous",
        },
        
      ],
    },
  },

  devtools: {
    enabled: true,
  },

  compatibilityDate: "2025-03-28",
});