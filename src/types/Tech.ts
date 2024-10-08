export type Tech = {
  name: string;
  icon: string;
};

export const techData = {
  Frontend: [
    { name: "React", icon: "⚛️" },
    { name: "Vue.js", icon: "🌐" },
    { name: "Angular", icon: "🔺" },
    { name: "Svelte", icon: "🟠" },
    { name: "Lit", icon: "🕯️" },
    { name: "Stencil", icon: "📐" },
    { name: "TypeScript", icon: "🔷" },
    { name: "WebAssembly", icon: "🌍" },
    { name: "Next.js", icon: "⏩" },
    { name: "Nuxt.js", icon: "🌊" },
  ],
  Backend: [
    { name: "Node.js", icon: "🟩" },
    { name: "Python", icon: "🐍" },
    { name: "Go", icon: "🐹" },
    { name: "Java", icon: "☕" },
    { name: ".NET", icon: "🔷" },
    { name: "Ruby on Rails", icon: "💎" },
    { name: "PHP", icon: "🐘" },
    { name: "Rust", icon: "🦀" },
  ],
  DevOps: [
    { name: "Docker", icon: "🐋" },
    { name: "Kubernetes", icon: "☸️" },
    { name: "Terraform", icon: "🛠️" },
    { name: "Ansible", icon: "📜" },
    { name: "GitOps", icon: "🗂️" },
    {
      name: "Serverless",
      icon: "☁️",
    },
    { name: "CI/CD", icon: "🔄" },
    { name: "Prometheus", icon: "📈" },
    { name: "Grafana", icon: "📊" },
    { name: "Jaeger", icon: "🔍" },
  ],
  Mobile: [
    { name: "React Native", icon: "📱" },
    { name: "Flutter", icon: "🌈" },
    { name: "Xamarin", icon: "🔗" },
    { name: "Ionic", icon: "📱" },
    { name: "Kotlin Multiplatform Mobile", icon: "🌍" },
    { name: "NativeScript", icon: "📜" },
  ],
  OtherLibraries: [
    { name: "Redux", icon: "🔄" },
    { name: "Vuex", icon: "📦" },
    { name: "Lodash", icon: "🔍" },
    { name: "Moment.js", icon: "🕰️" },
    { name: "Axios", icon: "📦" },
    { name: "Jest", icon: "🔍" },
    { name: "Cypress", icon: "🔄" },
    { name: "Storybook", icon: "📚" },
  ],
} as const;

export type TechCategory = keyof typeof techData;
