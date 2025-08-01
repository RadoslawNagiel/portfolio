export enum TagType {
  projectType = `projectType`,
  language = `language`,
  framework = `framework`,
  api = `api`,
  library = `library`,
  utility = `utility`,
}
export interface Tag {
  type: TagType;
  name: string;
  border?: string;
  background?: string;
  color: string;
  tooltip: string;
}

export type Tags = Record<string, Tag>;

export const TAGS: Tags = {
  private: {
    type: TagType.projectType,
    name: `projectType.private`,
    border: `var(--primary-theme)`,
    color: `var(--text-color)`,
    tooltip: `filters.projectType`,
  },
  professional: {
    type: TagType.projectType,
    name: `projectType.professional`,
    border: `#b60aff`,
    color: `var(--text-color)`,
    tooltip: `filters.projectType`,
  },
  group: {
    type: TagType.projectType,
    name: `projectType.group`,
    border: `#8f6629`,
    color: `var(--text-color)`,
    tooltip: `filters.projectType`,
  },
  webApp: {
    type: TagType.projectType,
    name: `projectType.webApp`,
    border: `#5984c1`,
    color: `var(--text-color)`,
    tooltip: `filters.projectType`,
  },
  mobileApp: {
    type: TagType.projectType,
    name: `projectType.mobileApp`,
    border: `#77C159`,
    color: `var(--text-color)`,
    tooltip: `filters.projectType`,
  },
  game: {
    type: TagType.projectType,
    name: `projectType.game`,
    border: `#c15959`,
    color: `var(--text-color)`,
    tooltip: `filters.projectType`,
  },

  typescript: {
    type: TagType.language,
    name: `TypeScript`,
    background: `#3178C6`,
    color: `white`,
    tooltip: `filters.language`,
  },
  javaScript: {
    type: TagType.language,
    name: `JavaScript`,
    background: `#F7DF1E`,
    color: `black`,
    tooltip: `filters.language`,
  },
  cSharp: {
    type: TagType.language,
    name: `C#`,
    background: `#6644D9`,
    color: `white`,
    tooltip: `filters.language`,
  },
  cPlus: {
    type: TagType.language,
    name: `C++`,
    background: `#00599C`,
    color: `white`,
    tooltip: `filters.language`,
  },

  angular12: {
    type: TagType.framework,
    name: `Angular 12`,
    background: `#dd0031`,
    color: `white`,
    tooltip: `filters.framework`,
  },
  angular14: {
    type: TagType.framework,
    name: `Angular 14`,
    background: `#dd0031`,
    color: `white`,
    tooltip: `filters.framework`,
  },
  angular15: {
    type: TagType.framework,
    name: `Angular 15`,
    background: `#dd0031`,
    color: `white`,
    tooltip: `filters.framework`,
  },
  angular16: {
    type: TagType.framework,
    name: `Angular 16`,
    background: `#dd0031`,
    color: `white`,
    tooltip: `filters.framework`,
  },
  angular17: {
    type: TagType.framework,
    name: `Angular 17`,
    background: `#dd0031`,
    color: `white`,
    tooltip: `filters.framework`,
  },
  angular18: {
    type: TagType.framework,
    name: `Angular 18`,
    background: `#dd0031`,
    tooltip: `filters.framework`,
    color: `white`,
  },
  angular19: {
    type: TagType.framework,
    name: `Angular 19`,
    background: `#dd0031`,
    color: `white`,
    tooltip: `filters.framework`,
  },

  primeNG: {
    type: TagType.framework,
    name: `PrimeNG`,
    background: `#C3002F`,
    color: `white`,
    tooltip: `filters.framework`,
  },
  ionic: {
    type: TagType.framework,
    name: `Ionic`,
    background: `#010610`,
    color: `white`,
    tooltip: `filters.framework`,
  },
  tailwindcss: {
    type: TagType.framework,
    name: `Tailwind CSS`,
    background: `#00B9D8`,
    color: `white`,
    tooltip: `filters.framework`,
  },

  apollo: {
    type: TagType.api,
    name: `Apollo`,
    background: `#14252D`,
    color: `white`,
    tooltip: `filters.api`,
  },
  nestJS: {
    type: TagType.api,
    name: `NestJS`,
    background: `#E0224E`,
    color: `white`,
    tooltip: `filters.api`,
  },
  graphQl: {
    type: TagType.api,
    name: `GraphQl`,
    background: `#E10098`,
    color: `white`,
    tooltip: `filters.api`,
  },
  prisma: {
    type: TagType.api,
    name: `Prisma`,
    background: `#0C344B`,
    color: `white`,
    tooltip: `filters.api`,
  },

  ngxs: {
    type: TagType.library,
    name: `NGxS`,
    background: `#1E00FF`,
    color: `white`,
    tooltip: `filters.library`,
  },
  chartJs: {
    type: TagType.library,
    name: `chartJs`,
    background: `#FE777B`,
    color: `white`,
    tooltip: `filters.library`,
  },
  echarts: {
    type: TagType.library,
    name: `ECharts`,
    background: `#A2344A`,
    color: `white`,
    tooltip: `filters.library`,
  },
  luxon: {
    type: TagType.library,
    name: `Luxon`,
    background: `#B792FF`,
    color: `white`,
    tooltip: `filters.library`,
  },
  dateFns: {
    type: TagType.library,
    name: `date-fns`,
    background: `#770C56`,
    color: `white`,
    tooltip: `filters.library`,
  },
  ngxTranslate: {
    type: TagType.library,
    name: `ngx-translate`,
    background: `#373B4D`,
    color: `white`,
    tooltip: `filters.library`,
  },
  bluetoothLe: {
    type: TagType.library,
    name: `bluetooth-le`,
    background: `#0A3D91`,
    color: `white`,
    tooltip: `filters.library`,
  },
  bluetoothSerial: {
    type: TagType.library,
    name: `bluetooth-serial`,
    background: `#0A3D91`,
    color: `white`,
    tooltip: `filters.library`,
  },

  capacitor: {
    type: TagType.utility,
    name: `Capacitor`,
    background: `#53B9FF`,
    color: `white`,
    tooltip: `filters.utility`,
  },
  scss: {
    type: TagType.utility,
    name: `SCSS`,
    background: `#CF649B`,
    color: `white`,
    tooltip: `filters.utility`,
  },
  eslint: {
    type: TagType.utility,
    name: `ESLint`,
    background: `#4B32C3`,
    color: `white`,
    tooltip: `filters.utility`,
  },
  keycloak: {
    type: TagType.utility,
    name: `Keycloak`,
    background: `#008AAA`,
    color: `white`,
    tooltip: `filters.utility`,
  },
  firebase: {
    type: TagType.utility,
    name: `Firebase`,
    background: `#F57C00`,
    color: `white`,
    tooltip: `filters.utility`,
  },
  sentry: {
    type: TagType.utility,
    name: `Sentry`,
    background: `#864F90`,
    color: `white`,
    tooltip: `filters.utility`,
  },
  unity: {
    type: TagType.utility,
    name: `Unity`,
    background: `#808080`,
    color: `white`,
    tooltip: `filters.utility`,
  },
};
