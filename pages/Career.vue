<template>
  <div class="career">
    <!--
    <SelectButton
      class="career__switch-type"
      v-model="careerType"
      :options="careerTypes"
      :allow-empty="false"
      @change="
        (e) => {
          careerType = e.value;
        }
      "
    />
    -->

    <!-- <ExperienceTimeline v-if="isCareerTypeExperience" /> -->

    <EducationTimeline />
  </div>
</template>

<script lang="ts" setup>
const CAREER_TYPE = {
  EXPERIENCE: "Experience",
  EDUCATION: "Education",
};

// const careerTypes = ref(["Experience", "Education"]);
// const careerType = ref(CAREER_TYPE.EXPERIENCE);

// const isCareerTypeExperience = computed(
//   () => careerType.value === CAREER_TYPE.EXPERIENCE
// );

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