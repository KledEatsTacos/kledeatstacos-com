<template>
  <Card>
    <template #subtitle>Recently on Steam</template>
    <template #content>
      <div v-if="isLoading" class="loading-state">
        <Skeleton height="60px" class="mb-2"></Skeleton>
        <Skeleton height="60px" class="mb-2"></Skeleton>
        <Skeleton height="60px"></Skeleton>
      </div>
      <div v-else-if="error" class="error-state">
        <i class="pi pi-exclamation-triangle" />
        <span>{{ error }}</span>
      </div>
      <div v-else-if="!games || games.length === 0" class="empty-state">
        <i class="pi pi-info-circle" />
        <span>No recent Steam activity or profile is private.</span>
      </div>
      <div v-else class="games-list">        <a 
          v-for="game in games" 
          :key="game.appId" 
          :href="game.store_link" 
          target="_blank" 
          class="game-entry p-ripple"
          v-ripple
          :style="{ backgroundImage: `url(${game.header_image})` }"
        >
          <div class="game-info">
            <span class="game-name">{{ game.name }}</span>
            <span class="game-playtime">{{ game.playtime_2weeks }} in last 2 weeks</span>
            <span class="game-playtime-total">{{ game.playtime_forever }} total</span>
          </div>
        </a>
      </div>
    </template>
  </Card>
</template>

<script lang="ts" setup>
interface Game {
  appId: number;
  name: string;
  playtime_2weeks: string;
  playtime_forever: string;
  header_image: string;
  store_link: string;
}

const games = ref<Game[]>([]);
const isLoading = ref(true);
const error = ref<string | null>(null);

const STEAM_API_URL = "/api/steam";

onMounted(async () => {
  try {
    const response = await fetch(STEAM_API_URL);
    if (!response.ok) {
      throw new Error(`Failed to fetch Steam data: ${response.status}`);
    }
    const data = await response.json();
    if (data.error) {
      throw new Error(data.error);
    }
    games.value = data.games || [];
  } catch (err: any) {
    console.error("Error fetching Steam games:", err);
    error.value = err.message || "Could not load Steam activity.";
  } finally {
    isLoading.value = false;
  }
});
</script>

<style lang="scss" scoped>
.loading-state,
.error-state,
.empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 150px; // Adjust as needed
  text-align: center;
  gap: 0.5rem;

  i {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }
}

.games-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem; // Space between game entries
}

.game-entry {
  display: flex;
  align-items: flex-end;
  position: relative;
  height: 100px;
  padding: 1rem;
  border-radius: var(--border-radius);
  transition: transform 0.2s ease-in-out;
  text-decoration: none;
  color: inherit;
  background-size: cover;
  background-position: center;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.1) 100%);
    z-index: 1;
  }

  &:hover {
    transform: scale(1.02);
  }
}

.game-info {
  display: flex;
  flex-direction: column;
  width: 100%;
  z-index: 2;
}

.game-name {
  font-weight: bold;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: white;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.8);
  margin-bottom: 0.25rem;
}

.game-playtime,
.game-playtime-total {
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.9);
  text-shadow: 1px 1px 2px rgba(0,0,0,0.8);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.mb-2 {
  margin-bottom: 0.5rem;
}
</style>