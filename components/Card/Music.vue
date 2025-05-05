<template>
  <Card class="music-card" @click="openYoutubeVideo">
    <template #subtitle> Listening Now </template>

    <template #content>
      <div class="card-content">
        <div class="equalizer"><span /><span /><span /></div>

        <Skeleton v-if="!currentlyPlaying"></Skeleton>

        <span>{{ currentlyPlaying }}</span>
      </div>
    </template>
  </Card>
</template>

<script lang="ts" setup>
const {
  profiles: { lastfm },
} = useAppConfig();

const YOUTUBE_API = "/api/youtube";
const store = useDefaultStore();
const { currentlyPlaying, currentTrackYoutubeUrl, currentTrackInfo } = toRefs(store);

const openYoutubeVideo = async () => {
  // If we already have a YouTube URL, use it
  if (currentTrackYoutubeUrl.value) {
    window.open(currentTrackYoutubeUrl.value, '_blank');
    return;
  }
  
  // If we have track info but no YouTube URL yet, fetch it now
  if (currentTrackInfo.value.track && currentTrackInfo.value.artist) {
    const searchQuery = `${currentTrackInfo.value.artist} ${currentTrackInfo.value.track} official`;
    
    try {
      const { data: youtubeData } = await useFetch(YOUTUBE_API, {
        query: { q: searchQuery }
      });
      
      if (youtubeData.value && youtubeData.value.videoUrl) {
        store.currentTrackYoutubeUrl = youtubeData.value.videoUrl as string;
        window.open(youtubeData.value.videoUrl as string, '_blank');
        return;
      }
    } catch (error) {
      console.error('Failed to fetch YouTube data:', error);
    }
  }
  
  // Fallback: If we have no YouTube URL, just search YouTube for the current track
  if (currentlyPlaying.value && currentlyPlaying.value !== "No track is currently playing.") {
    const searchQuery = encodeURIComponent(currentlyPlaying.value);
    window.open(`https://www.youtube.com/results?search_query=${searchQuery}`, '_blank');
  }
};
</script>

<style lang="scss" scoped>
.card-content {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
}

.equalizer {
  display: flex;
  justify-content: space-between;
  width: 1rem;
  height: 1rem;

  span {
    width: 0.2rem;
    background-color: var(--primary-color);
    border-radius: var(--border-radius);
    animation: bounce 2.2s ease infinite alternate;
    content: "";

    &:nth-of-type(2) {
      animation-delay: -2.2s;
    }

    &:nth-of-type(3) {
      animation-delay: -3.7s;
    }
  }
}

.music-card {
  cursor: pointer !important;
}

@keyframes bounce {
  10% {
    transform: scaleY(0.3);
  }

  30% {
    transform: scaleY(1);
  }

  60% {
    transform: scaleY(0.5);
  }

  80% {
    transform: scaleY(0.75);
  }

  100% {
    transform: scaleY(0.6);
  }
}
</style>