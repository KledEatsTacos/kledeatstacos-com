<template>
  <Card @click="useOpenUrl(github)">
    <template #content>
      <div class="card-content">
        <i class="pi pi-github" />
      </div>
    </template>

    <template #footer>
      <p>My work</p>
    </template>
  </Card>
</template>

<script lang="ts" setup>
const {
  profiles: { github },
} = useAppConfig();
</script>

<style lang="scss" scoped>
.card-content {
  display: flex;
  align-items: center;
  justify-content: center;

  i {
    font-size: 6rem;
  }
}

.p-card {
  p {
    text-align: center;
  }

  &:hover {
    i {
      animation: rotate 1s linear none;
    }
  }
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(5deg);
  }
  100% {
    transform: rotate(-5deg);
  }
}
</style>
