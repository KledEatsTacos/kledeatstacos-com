<template>
  <div class="education">
    <EducationTimeline />
  </div>
</template>

<script lang="ts" setup>
useHead({
  title: "Education",
});
</script>

<style lang="scss" scoped>
@import "/assets/animation.scss";

.education {
  display: flex;
  flex-direction: column;
  gap: 4rem;

  animation: fadeIn 0.5s;
}
</style>
