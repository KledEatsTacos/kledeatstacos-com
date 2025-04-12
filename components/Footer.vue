<template>
  <footer>
    <Toolbar>
      <template #start>
        <div>
          {{ copyrightText }}

          
            {{ theme == themes.dark ? "🤍" : "🖤" }}
          
        </div>
      </template>

      <template #center>
        <div class="center">
            

          <Button
            :label="
              theme == themes.dark ? 'Light theme' : 'Dark theme'
            "
            text
            @click="toggleTheme"
          />
        

        </div>
      </template>

      <template #end>
        <Button
          v-for="({ ariaLabel, icon, onClick }, index) in socialMediaButtons"
          :key="index"
          :icon
          :aria-label
          @click="onClick"
          text
        />
      </template>
    </Toolbar>
  </footer>
</template>

<script lang="ts" setup>
import { version } from "@@/package.json";

const store = useDefaultStore();
const dayjs = useDayjs();
const {
  profiles: { linkedin, github },
  themes,
} = useAppConfig();

const { changelogVisible, theme } = toRefs(store);

const versionText = computed(() => `Version ${version}`);
const copyrightText = computed(() => `${dayjs().year()} © Made with`);

const currentTheme = ref(themes.dark);

const toggleTheme = () => {
  const newTheme =
    currentTheme.value === themes.dark ? themes.light : themes.dark;

  currentTheme.value = newTheme;
  store.theme = newTheme;

  // Find the existing theme link element or create a new one
  let themeLink = document.getElementById("theme-link");
  if (!themeLink) {
    themeLink = document.createElement("link");
    themeLink.setAttribute("rel", "stylesheet");
    themeLink.setAttribute("id", "theme-link");
    document.head.appendChild(themeLink);
  }

  // Update the href attribute of the theme link
  themeLink.setAttribute("href", newTheme);
};

const socialMediaButtons = [
  {
    icon: "pi pi-github",
    ariaLabel: "GitHub",
    onClick: () => useOpenUrl(github),
  },
  {
    icon: "pi pi-linkedin",
    ariaLabel: "LinkedIn",
    onClick: () => useOpenUrl(linkedin),
  },
];
</script>

<style lang="scss" scoped>
.p-toolbar {
  padding: 5vh;
  border: none;
  background: none;

  .center {
    display: flex;
    gap: 1rem;

    @media (max-width: 768px) {
      flex-direction: column;
      gap: 0;
    }
  }

  a {
    text-decoration: none;
  }

  @media (max-width: 1080px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
