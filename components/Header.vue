<template>
  <header class="navigation">
    <ButtonGroup>
      <Button
        v-for="(
          { label, icon, text, click, disabled, badge, badgeSeverity }, index
        ) in buttonGroup"
        :key="index"
        :label="!isMobile ? label : ''"
        :icon
        :text
        :onClick="click"
        :disabled
        :badge="!isMobile ? badge : ''"
        :badgeSeverity
      />
    </ButtonGroup>
  </header>
</template>

<script lang="ts" setup>
const router = useRouter();

const isMobile = useResize(768);

const buttonGroup = [
  {
    label: "Home",
    icon: "pi pi-home",
    text: true,
    click: () => router.push("/"),
  },  {
    label: "Education",
    icon: "pi pi-book",
    text: true,
    click: () => router.push("/education"),
  },
  {
    label: "About",
    icon: "pi pi-user",
    text: true,
    disabled: true,
    badge: "soon",
    badgeSeverity: "contrast",
  },
  {
    label: "Contact",
    icon: "pi pi-envelope",
    text: true,
    click: () => router.push("/contact"),
  },
];
</script>

<style lang="scss" scoped>
.navigation {
  display: flex;
  justify-content: center;
  padding: 5vh 0;
}
</style>
