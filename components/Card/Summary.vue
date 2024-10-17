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
          <small> {{ aboutMeWritingSummary }}</small>
        </div>
      </div>
    </template>

    <template #footer>
      <Panel header="Read More" toggleable collapsed>
        <small>{{ aboutMeWritingMoreContent }}</small>
      </Panel>
    </template>
  </Card>
</template>

<script lang="ts" setup>
const store = useDefaultStore();
const { age } = toRefs(store);

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
  `Looks like you stumbled upon my website! Here's a brief glimpse of who I am: I'm a computer engineering student at Sakarya University, constantly trying to learn and improve myself. I'm ${age.value} years old, Syrian, born and raised in Saudi Arabia.
    My love for computers was born the moment my father bought us our first computer (which I ruined in a week).
    this has ultimately led me to pursue a career in computer engineering.
    Sometimes I may not seem like a very social person, but once you get to know me, 
    you'll find that I'm a sparkling conversationalist.
    Others have often described me as a smart and intelligent man (with a really good sense of humor).
    While I am very flattered by these kind words, I just try to the right thing.
    I would like to thank you for taking the time to read all of this, it means the world to me. Stay safe!`
);

const aboutMeWritingParagraphs = aboutMeWriting.value.split(".");

const aboutMeWritingSummary =
  aboutMeWritingParagraphs[0] + "." + aboutMeWritingParagraphs[1] + ".";

const aboutMeWritingMoreContent = aboutMeWritingParagraphs.slice(2).join("\n");

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

  .p-card-footer {
    display: flex;
    justify-content: flex-end;
  }
}
</style>
