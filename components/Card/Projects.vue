<template>
  <Card>
    <template #title>Projects</template>
    <template #subtitle>What I'm working on</template>
    <template #content>
      <div class="card-content">
        <div v-for="(project, index) in projects" 
             :key="index" 
             class="project"
             @click="project.url && useOpenUrl(project.url)"
        >
          <i :class="project.icon" />
          <div class="project-info">
            <h3>{{ project.name }}</h3>
            <p>{{ project.description }}</p>
          </div>
        </div>
      </div>
    </template>
  </Card>
</template>

<script lang="ts" setup>
import { useOpenUrl } from '~/composables';

const {
  profiles: { github },
} = useAppConfig();

interface Project {
  name: string;
  description: string;
  icon: string;
  url?: string;
}

const projects: Project[] = [
  {
    name: "MedAI",
    description: "AI-powered chatbot for medical students using Gemini, focused on medicine and healthcare education",
    icon: "pi pi-heart",
    url: "https://medaiapp-livid.vercel.app/"
  },  
  { //SOMEBODY TOUCHA MAH SPAGHETT
    name: "Word Spaghetti",
    description: "Interactive word game where you type to create floating letters that connect to form words",
    icon: "pi pi-pencil",
    url: "https://kledeatstacos.github.io/word-spaghetti/"
  },
  {
    name: "Calculator",
    description: "A simple calculator project (with a twist!)",
    icon: "pi pi-calculator",
    url: "https://kledeatstacos.github.io/calculator/"
  },
  {
    name: "More Projects",
    description: "More projects on my GitHub page!",
    icon: "pi pi-github",
    url: github
  }
];
</script>

<style lang="scss" scoped>
.card-content {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.project {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.5rem;
  border-radius: var(--border-radius);
  transition: background-color 0.2s;
  cursor: pointer;

  &:hover {
    background-color: var(--surface-hover);
    transform: translateY(-2px);
    transition: transform 0.2s ease;
  }

  i {
    font-size: 2rem;
    color: var(--primary-color);
  }

  .project-info {
    h3 {
      margin: 0;
      font-size: 1.1rem;
    }

    p {
      margin: 0.5rem 0 0;
      font-size: 0.9rem;
      color: var(--text-color-secondary);
    }
  }
}
</style>