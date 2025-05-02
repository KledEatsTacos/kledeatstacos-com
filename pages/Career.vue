<template>
  <div class="career">
    <EducationTimeline />
  </div>
</template>

<script lang="ts" setup>
const CAREER_TYPE = {
  EXPERIENCE: "Experience",
  EDUCATION: "Education",
};

useHead({
  title: "Career",
});
</script>

<style lang="scss" scoped>
@import "/assets/animation.scss";

.career {
  display: flex;
  flex-direction: column;
  gap: 4rem;

  &__switch-type {
    display: flex;
    justify-content: center;
  }

  animation: fadeIn 0.5s;
}
</style>