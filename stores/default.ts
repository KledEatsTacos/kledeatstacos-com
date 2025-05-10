import { defineStore } from "pinia";

const darkTheme = process.env.NUXT_APP_DARK_THEME || "";

export const useDefaultStore = defineStore({
  id: "defaultStore",
  state: () => ({
    theme: darkTheme,
    currentlyPlaying: "",
    currentTrackYoutubeUrl: "",
    currentTrackInfo: {
      track: null as string | null,
      artist: null as string | null
    }
  }),
  actions: {},
});