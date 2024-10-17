<template>
  <Card>
    <template #title>
      <div>Coming soon</div>
    </template>

    <template #subtitle>
      <div>Working as hard as I can.</div>
    </template>

    <template #content>
      <div class="content">
        <p>This is very time consuming.</p>
      </div>
    </template>

    <template #footer class="footer">
      <div>Thank you for your patience.</div>
    </template>
  </Card>
</template>

<script lang="ts" setup>
// No need to import store or dayjs since they are not used
</script>

<style lang="scss" scoped>
.button-container {
  display: flex;
  gap: 1rem;
  justify-content: space-between;

  a,
  button {
    width: 100%;
  }

  @media (max-width: 1920px) {
    flex-direction: column;
  }
}

.p-card {
  cursor: default !important;

  .content {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
}
</style>