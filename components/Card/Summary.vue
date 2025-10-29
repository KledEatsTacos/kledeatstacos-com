<template>
  <Card>
    <template #title>Mustafa Masri</template>

    <template #subtitle>Computer Engineering student</template>

    <template #content>
      <div class="content">
        <div>Always learning new things</div>
        <div>
          <Button
            v-for="({ icon, onClick, ariaLabel }, index) in socialMediaButtons"
            :key="index"
            :icon
            @click="onClick"
            :ariaLabel
            class="p-button-rounded p-button-text"
          />
        </div>
        <div>
          <small>{{ aboutMeWriting }}</small>
        </div>
      </div>
    </template>
  </Card>
</template>

<script lang="ts" setup>
const {
  profiles: {
    linkedin,
    github,
  },
} = useAppConfig();

const aboutMeWriting = ref(
  "Looks like you stumbled upon my website! Here's a brief glimpse of who I am: I'm a third year computer engineering student at Sakarya University, constantly trying to learn and improve myself. I am currently learning different fields including web development and AI. Feel free to connect with me on LinkedIn or check out my projects on GitHub!"
);

const socialMediaButtons = [
  {
    icon: "pi pi-linkedin",
    ariaLabel: "LinkedIn",
    onClick: () => useOpenUrl(linkedin),
  },
  {
    icon: "pi pi-github",
    ariaLabel: "GitHub",
    onClick: () => useOpenUrl(github),
  },
];
</script>

<style lang="scss" scoped>
.p-card {
  .content {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
}
</style>
