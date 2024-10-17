<template>
  <Card>
    <template #header>
      <div class="card-header">
        <i class="pi pi-book" />
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

.pi-book {
  font-size: 8rem;
}

@keyframes rotate {
  0% {
    transform: perspective(1000px) rotateY(0deg);
  }
  50% {
    transform: perspective(1000px) rotateY(30deg);
  }
  100% {
    transform: perspective(1000px) rotateY(-30deg);
  }
}
</style>