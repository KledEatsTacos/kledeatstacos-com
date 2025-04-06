<template>
  <Card>
    <template #title>Languages</template>
    <template #subtitle>Language Proficiencies</template>

    <template #content>
      <div class="languages">
        <div v-for="(lang, index) in languages" :key="index" class="language">
          <div class="language-header">
            <span class="language-name">
              <i class="pi pi-globe"></i>
              {{ lang.name }}
            </span>
            <span class="language-level">{{ lang.level }}</span>
          </div>
          <ProgressBar :value="lang.proficiency" :showValue="false" :class="'progress-' + lang.name.toLowerCase()" />
        </div>
      </div>
    </template>
  </Card>
</template>

<script lang="ts" setup>
interface Language {
  name: string;
  level: string;
  proficiency: number;
}

const languages: Language[] = [
  {
    name: "Arabic",
    level: "Native",
    proficiency: 100
  },
  {
    name: "English",
    level: "Fluent",
    proficiency: 100
  },
  {
    name: "Turkish",
    level: "Advanced",
    proficiency: 85
  },
  {
    name: "Russian",
    level: "Beginner",
    proficiency: 15
  }
];
</script>

<style lang="scss" scoped>
.languages {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.language {
  .language-header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.5rem;
  }

  .language-name {
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    
    i {
      font-size: 1rem;
      color: var(--primary-color);
    }
  }
  
  .language-level {
    color: var(--text-color-secondary);
    font-size: 0.9rem;
  }
}

.progress-arabic :deep(.p-progressbar-value) {
  background: #45a29e;
}

.progress-english :deep(.p-progressbar-value) {
  background: #5e60ce;
}

.progress-turkish :deep(.p-progressbar-value) {
  background: #e63946;
}

.progress-russian :deep(.p-progressbar-value) {
  background: #fb8b24;
}
</style>