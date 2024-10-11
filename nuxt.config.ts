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
      "I'm Mustafa, A computer engineering student that likes to create stuff.",
  },
  {
    name: "keywords",
    content:
      "software, engineer, developer, web, mobile, technology, website, personal, blog, portfolio",
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
    twitter: process.env.TWITTER_PROFILE,
    instagram: process.env.INSTAGRAM_PROFILE,
    steam: process.env.STEAM_PROFILE,
    twitch: process.env.TWITCH_PROFILE,
    youtube: process.env.YOUTUBE_PROFILE,
  },

  themes: {
    dark: process.env.NUXT_APP_DARK_THEME,
    light: process.env.NUXT_APP_LIGHT_THEME,
  },
  profilePicture: process.env.PROFILE_PICTURE_URL,
};

const runtimeConfig = {
  rss2Json: {
    apiKey: process.env.RSS2JSON_API_KEY,
  },
  spotify: {
    tokenApi: process.env.SPOTIFY_TOKEN_API,
    playerApi: process.env.SPOTIFY_PLAYER_API,
    refreshToken: process.env.SPOTIFY_REFRESH_TOKEN,
    clientToken: process.env.SPOTIFY_CLIENT_TOKEN,
  },
  stats: {
    birthday: process.env.MY_BIRTHDAY_DATE,
    firstWorkExperience: process.env.FIRST_WORK_EXPERIENCE_DATE,
  },
};
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "nuxt-primevue",
    "@pinia/nuxt",
    "@nuxt/content",
    "dayjs-nuxt",
    "@nuxt/image",
  ],

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
      meta,
      link: [
        {
          id: "theme-link",
          rel: "stylesheet",
          href: process.env.NUXT_APP_DARK_THEME,
        },
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
});
