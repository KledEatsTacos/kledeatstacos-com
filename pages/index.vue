<template>
  <main>
    <div class="flex-column">
      <CardSummary class="summary-card" />
      <CardLanguages />
      
    </div>
    <div class="flex-column">
      <CardProjects />
      <CardMusic />
    </div>
    
    <div class="flex-column">
      <CardSteam />
      <CardGithub />
    </div>

    <ScrollTop />
  </main>
</template>

<script lang="ts" setup>
const store = useDefaultStore();

const ONE_MINUTE = 60_000;
const LASTFM_API = "/api/lastfm";

onNuxtReady(async () => {
  const updateMusicInfo = async () => {
    const { data } = await useFetch(LASTFM_API);
    
    if (data.value) {
      const trackInfo = data.value as { 
        displayText: string; 
        track: string | null; 
        artist: string | null;
      };
      
      store.currentlyPlaying = trackInfo.displayText;      
      store.currentTrackInfo = {
        track: trackInfo.track,
        artist: trackInfo.artist
      };
    }
  };

  await updateMusicInfo();

  setInterval(async () => {
    await updateMusicInfo();
  }, ONE_MINUTE);
});
</script>

<style lang="scss" scoped>
@import "/assets/animation.scss";

main {
  display: flex;
  justify-content: center;
  gap: 1rem;

  .p-card {
    cursor: pointer;
    transition: box-shadow 0.3s ease;
    flex: auto;

    &:hover {
      box-shadow: 0 0 0.5rem var(--primary-color);
      background: linear-gradient(
        45deg,
        var(--primary-color),
        var(--secondary-color)
      );
      transition: box-shadow 0.3s ease;
    }

    animation: fadeIn 0.5s;
  }

  .summary-card {
    cursor: default;
  }

  .flex-row {
    display: flex;
    flex: 1;
    gap: 1rem;

    @media (max-width: 768px) {
      flex-direction: column;
    }
  }

  .flex-column {
    display: flex;
    flex: 1;
    flex-direction: column;
    gap: 1rem;
    min-width: 0; // Added to help with flex sizing
  }

  @media (max-width: 1366px) {
    flex-direction: column;
  }
}
</style>
