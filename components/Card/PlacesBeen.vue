<template>
  <Card>
    <template #header>
      <div class="card-header">
        <i class="pi pi-cog" />
      </div>
    </template>

    <template #title> Coming soon </template>

    <template #subtitle> This feature is not available yet. </template>
  </Card>
</template>

<script lang="ts" setup>
</script>

<style lang="scss" scoped>
.card-header {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5vh 0;
}

.p-card {
  &:hover {
    i {
      animation: rotate 1s linear none;
    }
  }
}

.pi-cog {
  font-size: 8rem;
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(15deg);
  }
  100% {
    transform: rotate(-15deg);
  }
}
</style>