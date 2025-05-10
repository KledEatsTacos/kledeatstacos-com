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
      <div v-else class="games-list">
        <a 
          v-for="game in games" 
          :key="game.appId" 
          :href="game.store_link" 
          target="_blank" 
          class="game-entry p-ripple"
          v-ripple
        >
          <img :src="game.header_image" :alt="game.name" class="game-image" />
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
  align-items: center;
  gap: 0.75rem; // Space between image and text
  padding: 0.5rem;
  border-radius: var(--border-radius);
  transition: background-color 0.2s ease-in-out;
  text-decoration: none;
  color: inherit;

  &:hover {
    background-color: var(--surface-hover);
  }
}

.game-image {
  width: 120px; // Adjust as needed
  height: auto; // Maintain aspect ratio, header.jpg is usually 460x215
  max-height: 56px; // header.jpg aspect ratio is ~2.13, so 120/2.13 = 56.3
  border-radius: var(--border-radius-sm);
  object-fit: cover;
}

.game-info {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.game-name {
  font-weight: bold;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.game-playtime,
.game-playtime-total {
  font-size: 0.8rem;
  color: var(--text-color-secondary);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.mb-2 {
  margin-bottom: 0.5rem;
}
</style>