export const techData = {
  Frontend: [
    { name: "React", icon: "⚛️" },
    { name: "Vue.js", icon: "🌐" },
    { name: "Svelte", icon: "🟠" },
    { name: "Angular", icon: "🔺" },
  ],
  Frameworks: [
    { name: "Next.js", icon: "▶️" },
    { name: "Nuxt.js", icon: "⏯️" },
  ],
  Backend: [
    { name: "Node.js", icon: "🟩" },
    { name: "Python", icon: "🐍" },
    { name: "Go", icon: "🐹" },
  ],
  Librerias: [
    { name: "Express", icon: "🔗" },
    { name: "jQuery", icon: "🔳" },
  ],
  DevOps: [
    { name: "Docker", icon: "🐋" },
    { name: "Kubernetes", icon: "☸️" },
  ],
  Mobile: [
    { name: "React Native", icon: "📱" },
    { name: "Flutter", icon: "🌈" },
  ],
} as const;

export interface Tech {
  name: string;
  icon: string;
}

export type TechCategory = keyof typeof techData;
