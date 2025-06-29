export enum TAG {
  private = 'private',
  professional = 'professional',
  group = 'group',
  webApp = 'webApp',
  mobileApp = 'mobileApp',
  game = 'game',

  typescript = 'typescript',
  javaScript = 'javaScript',
  cSharp = 'cSharp',
  cPlus = 'cPlus',

  angular16 = 'angular16',
  angular17 = 'angular17',
  angular18 = 'angular18',
  angular19 = 'angular19',
  primeNG = 'primeNG',
  ionic = 'ionic',
  tailwindcss = 'tailwindcss',

  apollo = 'apollo',
  nestJS = 'nestJS',
  graphQl = 'graphQl',
  prisma = 'prisma',

  ngxs = 'ngxs',
  chartJs = 'chartJs',
  echarts = 'echarts',
  luxon = 'luxon',
  ngxTranslate = 'ngxTranslate',

  capacitor = 'capacitor',
  eslint = 'eslint',
  keycloak = 'keycloak',
  firebase = 'firebase',
  sentry = 'sentry',
}

export const TAGS: Record<
  string,
  {
    name: string;
    border?: string;
    background?: string;
    color: string;
    tooltip: string;
  }
> = {
  private: {
    name: `projectType.private`,
    border: `var(--primary-theme)`,
    color: `white`,
    tooltip: `filters.projectType`,
  },
  professional: {
    name: `projectType.professional`,
    border: `#b60aff`,
    color: `white`,
    tooltip: `filters.projectType`,
  },
  group: {
    name: `projectType.group`,
    border: `#0affa5`,
    color: `white`,
    tooltip: `filters.projectType`,
  },
  webApp: {
    name: `projectType.webApp`,
    border: `#5984c1`,
    color: `white`,
    tooltip: `filters.projectType`,
  },
  mobileApp: {
    name: `projectType.mobileApp`,
    border: `#77C159`,
    color: `white`,
    tooltip: `filters.projectType`,
  },
  game: {
    name: `projectType.game`,
    border: `#c15959`,
    color: `white`,
    tooltip: `filters.projectType`,
  },

  typescript: {
    name: `TypeScript`,
    background: `#3178C6`,
    color: `white`,
    tooltip: `filters.language`,
  },
  javaScript: {
    name: `JavaScript`,
    background: `#F7DF1E`,
    color: `black`,
    tooltip: `filters.language`,
  },
  cSharp: {
    name: `C#`,
    background: `#6644D9`,
    color: `white`,
    tooltip: `filters.language`,
  },
  cPlus: {
    name: `C++`,
    background: `#00599C`,
    color: `white`,
    tooltip: `filters.language`,
  },

  angular16: {
    name: `Angular 16`,
    background: `#dd0031`,
    color: `white`,
    tooltip: `filters.framework`,
  },
  angular17: {
    name: `Angular 17`,
    background: `#dd0031`,
    color: `white`,
    tooltip: `filters.framework`,
  },
  angular18: {
    name: `Angular 18`,
    background: `#dd0031`,
    tooltip: `filters.framework`,
    color: `white`,
  },
  angular19: {
    name: `Angular 19`,
    background: `#dd0031`,
    color: `white`,
    tooltip: `filters.framework`,
  },

  primeNG: {
    name: `PrimeNG`,
    background: `#C3002F`,
    color: `white`,
    tooltip: `filters.framework`,
  },
  ionic: {
    name: `Ionic`,
    background: `#010610`,
    color: `white`,
    tooltip: `filters.framework`,
  },
  tailwindcss: {
    name: `Tailwind CSS`,
    background: `#00B9D8`,
    color: `white`,
    tooltip: `filters.framework`,
  },

  apollo: {
    name: `Apollo`,
    background: `#14252D`,
    color: `white`,
    tooltip: `filters.api`,
  },
  nestJS: {
    name: `NestJS`,
    background: `#E0224E`,
    color: `white`,
    tooltip: `filters.api`,
  },
  graphQl: {
    name: `GraphQl`,
    background: `#E10098`,
    color: `white`,
    tooltip: `filters.api`,
  },
  prisma: {
    name: `Prisma`,
    background: `#0C344B`,
    color: `white`,
    tooltip: `filters.api`,
  },

  ngxs: {
    name: `NGxS`,
    background: `#1E00FF`,
    color: `white`,
    tooltip: `filters.library`,
  },

  chartJs: {
    name: `chartJs`,
    background: `#FE777B`,
    color: `white`,
    tooltip: `filters.library`,
  },
  echarts: {
    name: `ECharts`,
    background: `#A2344A`,
    color: `white`,
    tooltip: `filters.library`,
  },
  luxon: {
    name: `Luxon`,
    background: `#B792FF`,
    color: `white`,
    tooltip: `filters.library`,
  },
  ngxTranslate: {
    name: `ngx-translate`,
    background: `#373B4D`,
    color: `white`,
    tooltip: `filters.library`,
  },

  capacitor: {
    name: `Capacitor`,
    background: `#53B9FF`,
    color: `white`,
    tooltip: `filters.utility`,
  },
  eslint: {
    name: `ESLint`,
    background: `#4B32C3`,
    color: `white`,
    tooltip: `filters.utility`,
  },
  keycloak: {
    name: `Keycloak`,
    background: `#008AAA`,
    color: `white`,
    tooltip: `filters.utility`,
  },
  firebase: {
    name: `Firebase`,
    background: `#F57C00`,
    color: `white`,
    tooltip: `filters.utility`,
  },
  sentry: {
    name: `Sentry`,
    background: `#864F90`,
    color: `white`,
    tooltip: `filters.utility`,
  },
};
