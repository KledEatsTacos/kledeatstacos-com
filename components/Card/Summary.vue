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
    twitter,
    linkedin,
    github,
    instagram,
    steam,
    twitch,
    youtube,
  },
} = useAppConfig();

const aboutMeWriting = ref(
  "Looks like you stumbled upon my website! Here's a brief glimpse of who I am: I'm a computer engineering student at Sakarya University, constantly trying to learn and improve myself."
);

const socialMediaButtons = [
  {
    icon: "pi pi-twitter",
    ariaLabel: "Twitter",
    onClick: () => useOpenUrl(twitter),
  },
  {
    icon: "pi pi-instagram",
    ariaLabel: "Instagram",
    onClick: () => useOpenUrl(instagram),
  },
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
  {
    icon: "fa-brands fa-steam",
    ariaLabel: "Steam",
    onClick: () => useOpenUrl(steam),
  },
  {
    icon: "pi pi-twitch",
    ariaLabel: "Twitch",
    onClick: () => useOpenUrl(twitch),
  },
  {
    icon: "pi pi-youtube",
    ariaLabel: "YouTube",
    onClick: () => useOpenUrl(youtube),
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
