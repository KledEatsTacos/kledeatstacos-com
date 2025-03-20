<template>
  <Card>
    <template #subtitle> Coming Soon </template>
    <template #content>
      <div class="card-content">
        <i class="pi pi-cog pi-spin" />
        <span>Coming Soon...</span>
      </div>
    </template>
  </Card>
</template>

<script lang="ts" setup>
</script>

<style lang="scss" scoped>
.card-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  i {
    font-size: 2rem;
  }
}
</style>
