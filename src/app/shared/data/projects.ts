import { Tag, TAGS } from './tags';

export interface ProjectInfo {
  id: string;
  dateFrom: Date;
  dateTo?: Date;
  inProgress?: boolean;
  tags: Tag[];
  mainImage: string;
  images: {
    type?: `youtube`;
    url: string;
    thumb: string;
  }[];
  buttons?: {
    text: string;
    url: string;
  }[];
  color: string;
}

export const PROJECTS: ProjectInfo[] = [
  {
    id: `targeto`,
    inProgress: true,
    dateFrom: new Date(2024, 10, 26),
    tags: [
      TAGS[`private`],
      TAGS[`individual`],
      TAGS[`mobileApp`],
      TAGS[`typescript`],
      TAGS[`html`],
      TAGS[`css`],
      TAGS[`angular18`],
      TAGS[`angular20`],
      TAGS[`ionic`],
      TAGS[`tailwindcss`],
      TAGS[`ngxs`],
      TAGS[`chartJs`],
      TAGS[`ngxTranslate`],
      TAGS[`capacitor`],
      TAGS[`scss`],
      TAGS[`eslint`],
      TAGS[`firebase`],
    ],
    mainImage: `./images/targeto/main.jpg`,
    images: [
      {
        url: `./images/targeto/1.jpg`,
        thumb: `./images/targeto/thumbnails/1.jpg`,
      },
      {
        url: `./images/targeto/2.jpg`,
        thumb: `./images/targeto/thumbnails/2.jpg`,
      },
      {
        url: `./images/targeto/3.jpg`,
        thumb: `./images/targeto/thumbnails/3.jpg`,
      },
      {
        url: `./images/targeto/4.jpg`,
        thumb: `./images/targeto/thumbnails/4.jpg`,
      },
      {
        url: `./images/targeto/5.jpg`,
        thumb: `./images/targeto/thumbnails/5.jpg`,
      },
      {
        url: `./images/targeto/6.jpg`,
        thumb: `./images/targeto/thumbnails/6.jpg`,
      },
    ],
    color: `#5EB3B6`,
  },
  {
    id: `portfolio`,
    dateFrom: new Date(2025, 5, 24),
    dateTo: new Date(2025, 8, 4),
    tags: [
      TAGS[`private`],
      TAGS[`individual`],
      TAGS[`webApp`],
      TAGS[`typescript`],
      TAGS[`html`],
      TAGS[`css`],
      TAGS[`angular19`],
      TAGS[`angular20`],
      TAGS[`angularMaterial`],
      TAGS[`luxon`],
      TAGS[`ngxTranslate`],
      TAGS[`scss`],
      TAGS[`eslint`],
      TAGS[`jasmine`],
      TAGS[`karma`],
      TAGS[`playwright`],
    ],
    mainImage: `./images/portfolio/main.jpg`,
    images: [
      {
        url: `./images/portfolio/1.jpg`,
        thumb: `./images/portfolio/thumbnails/1.jpg`,
      },
      {
        url: `./images/portfolio/2.jpg`,
        thumb: `./images/portfolio/thumbnails/2.jpg`,
      },
      {
        url: `./images/portfolio/3.jpg`,
        thumb: `./images/portfolio/thumbnails/3.jpg`,
      },
      {
        url: `./images/portfolio/4.jpg`,
        thumb: `./images/portfolio/thumbnails/4.jpg`,
      },
      {
        url: `./images/portfolio/5.jpg`,
        thumb: `./images/portfolio/thumbnails/5.jpg`,
      },
    ],
    buttons: [
      {
        text: `projects.portfolio.gitHubButton`,
        url: `https://github.com/RadoslawNagiel/portfolio`,
      },
    ],
    color: `#F9CF09`,
  },
  {
    id: `quiz`,
    dateFrom: new Date(2025, 1, 18),
    tags: [
      TAGS[`private`],
      TAGS[`individual`],
      TAGS[`webApp`],
      TAGS[`typescript`],
      TAGS[`html`],
      TAGS[`css`],
      TAGS[`angular19`],
      TAGS[`ngxTranslate`],
      TAGS[`scss`],
      TAGS[`eslint`],
    ],
    mainImage: `./images/quiz/main.jpg`,
    images: [
      {
        url: `./images/quiz/1.jpg`,
        thumb: `./images/quiz/thumbnails/1.jpg`,
      },
      {
        url: `./images/quiz/2.jpg`,
        thumb: `./images/quiz/thumbnails/2.jpg`,
      },
      {
        url: `./images/quiz/3.jpg`,
        thumb: `./images/quiz/thumbnails/3.jpg`,
      },
      {
        url: `./images/quiz/4.jpg`,
        thumb: `./images/quiz/thumbnails/4.jpg`,
      },
      {
        url: `./images/quiz/5.jpg`,
        thumb: `./images/quiz/thumbnails/6.jpg`,
      },
      {
        url: `./images/quiz/7.jpg`,
        thumb: `./images/quiz/thumbnails/7.jpg`,
      },
    ],
    buttons: [
      {
        text: `projects.quiz.gitHubButton`,
        url: `https://github.com/RadoslawNagiel/MAE-quiz`,
      },
      {
        text: `projects.quiz.quizButton`,
        url: `https://radoslawnagiel.github.io/MAE-quiz/`,
      },
    ],
    color: `#6B2854`,
  },
  {
    id: `wineryV2`,
    dateFrom: new Date(2024, 4, 11),
    dateTo: new Date(2025, 0, 17),
    tags: [
      TAGS[`private`],
      TAGS[`individual`],
      TAGS[`mobileApp`],
      TAGS[`typescript`],
      TAGS[`html`],
      TAGS[`css`],
      TAGS[`angular17`],
      TAGS[`ionic`],
      TAGS[`tailwindcss`],
      TAGS[`ngxs`],
      TAGS[`capacitor`],
      TAGS[`scss`],
      TAGS[`eslint`],
    ],
    mainImage: `./images/wineryV2/main.jpg`,
    images: [
      {
        url: `./images/wineryV2/1.jpg`,
        thumb: `./images/wineryV2/thumbnails/1.jpg`,
      },
      {
        url: `./images/wineryV2/2.jpg`,
        thumb: `./images/wineryV2/thumbnails/2.jpg`,
      },
      {
        url: `./images/wineryV2/3.jpg`,
        thumb: `./images/wineryV2/thumbnails/3.jpg`,
      },
      {
        url: `./images/wineryV2/4.jpg`,
        thumb: `./images/wineryV2/thumbnails/4.jpg`,
      },
      {
        url: `./images/wineryV2/5.jpg`,
        thumb: `./images/wineryV2/thumbnails/5.jpg`,
      },
      {
        url: `./images/wineryV2/6.jpg`,
        thumb: `./images/wineryV2/thumbnails/6.jpg`,
      },
      {
        url: `./images/wineryV2/7.jpg`,
        thumb: `./images/wineryV2/thumbnails/7.jpg`,
      },
      {
        url: `./images/wineryV2/8.jpg`,
        thumb: `./images/wineryV2/thumbnails/8.jpg`,
      },
      {
        url: `./images/wineryV2/9.jpg`,
        thumb: `./images/wineryV2/thumbnails/9.jpg`,
      },
      {
        url: `./images/wineryV2/10.jpg`,
        thumb: `./images/wineryV2/thumbnails/10.jpg`,
      },
      {
        url: `./images/wineryV2/11.jpg`,
        thumb: `./images/wineryV2/thumbnails/11.jpg`,
      },
      {
        url: `./images/wineryV2/12.jpg`,
        thumb: `./images/wineryV2/thumbnails/12.jpg`,
      },
    ],
    buttons: [
      {
        text: `projects.wineryV2.gitHubButton`,
        url: `https://github.com/RadoslawNagiel/wineryV2`,
      },
      {
        text: `projects.wineryV2.shopButton`,
        url: `https://play.google.com/store/apps/details?id=com.bekarn.winery`,
      },
    ],
    color: `#7A1616`,
  },
  {
    id: `safetyHab`,
    dateFrom: new Date(2023, 5, 16),
    dateTo: new Date(2024, 8, 30),
    tags: [
      TAGS[`professional`],
      TAGS[`group`],
      TAGS[`webApp`],
      TAGS[`mobileApp`],
      TAGS[`typescript`],
      TAGS[`html`],
      TAGS[`css`],
      TAGS[`angular17`],
      TAGS[`angular16`],
      TAGS[`primeNG`],
      TAGS[`ionic`],
      TAGS[`tailwindcss`],
      TAGS[`apollo`],
      TAGS[`nestJS`],
      TAGS[`graphQl`],
      TAGS[`prisma`],
      TAGS[`echarts`],
      TAGS[`luxon`],
      TAGS[`ngxTranslate`],
      TAGS[`capacitor`],
      TAGS[`scss`],
      TAGS[`eslint`],
      TAGS[`keycloak`],
      TAGS[`sentry`],
    ],
    mainImage: `./images/safetyHab/main.jpg`,
    images: [
      {
        url: `./images/safetyHab/1.webp`,
        thumb: `./images/safetyHab/thumbnails/1.webp`,
      },
      {
        url: `./images/safetyHab/2.webp`,
        thumb: `./images/safetyHab/thumbnails/2.webp`,
      },
      {
        url: `./images/safetyHab/3.webp`,
        thumb: `./images/safetyHab/thumbnails/3.webp`,
      },
      {
        url: `./images/safetyHab/4.webp`,
        thumb: `./images/safetyHab/thumbnails/4.webp`,
      },
      {
        url: `./images/safetyHab/5.webp`,
        thumb: `./images/safetyHab/thumbnails/5.webp`,
      },
      {
        url: `./images/safetyHab/6.webp`,
        thumb: `./images/safetyHab/thumbnails/6.webp`,
      },
      {
        url: `./images/safetyHab/7.webp`,
        thumb: `./images/safetyHab/thumbnails/7.webp`,
      },
      {
        url: `./images/safetyHab/8.webp`,
        thumb: `./images/safetyHab/thumbnails/8.webp`,
      },
      {
        url: `./images/safetyHab/9.webp`,
        thumb: `./images/safetyHab/thumbnails/9.webp`,
      },
    ],
    buttons: [
      {
        text: `projects.safetyHab.webPage`,
        url: `https://safetyhab.com/pl`,
      },
    ],
    color: `#EFBD46`,
  },
  {
    id: `lureForReal`,
    dateFrom: new Date(2022, 0, 10),
    dateTo: new Date(2024, 5, 11),
    tags: [
      TAGS[`professional`],
      TAGS[`group`],
      TAGS[`webApp`],
      TAGS[`mobileApp`],
      TAGS[`typescript`],
      TAGS[`html`],
      TAGS[`css`],
      TAGS[`angular12`],
      TAGS[`angular14`],
      TAGS[`angular17`],
      TAGS[`primeNG`],
      TAGS[`ionic`],
      TAGS[`tailwindcss`],
      TAGS[`apollo`],
      TAGS[`nestJS`],
      TAGS[`graphQl`],
      TAGS[`prisma`],
      TAGS[`ngxs`],
      TAGS[`dateFns`],
      TAGS[`ngxTranslate`],
      TAGS[`capacitor`],
      TAGS[`scss`],
      TAGS[`eslint`],
      TAGS[`firebase`],
    ],
    mainImage: `./images/lureForReal/main.jpg`,
    images: [
      {
        url: `./images/lureForReal/1.webp`,
        thumb: `./images/lureForReal/thumbnails/1.webp`,
      },
      {
        url: `./images/lureForReal/2.webp`,
        thumb: `./images/lureForReal/thumbnails/2.webp`,
      },
      {
        url: `./images/lureForReal/3.webp`,
        thumb: `./images/lureForReal/thumbnails/3.webp`,
      },
      {
        url: `./images/lureForReal/4.webp`,
        thumb: `./images/lureForReal/thumbnails/4.webp`,
      },
      {
        url: `./images/lureForReal/5.webp`,
        thumb: `./images/lureForReal/thumbnails/5.webp`,
      },
      {
        url: `./images/lureForReal/6.webp`,
        thumb: `./images/lureForReal/thumbnails/6.webp`,
      },
    ],
    buttons: [
      {
        text: `projects.lureForReal.androidButton`,
        url: `https://play.google.com/store/apps/details?id=com.lure4real.lure4real`,
      },
      {
        text: `projects.lureForReal.iosButton`,
        url: `https://apps.apple.com/pl/app/lure-for-real/id1618006854`,
      },
      {
        text: `projects.lureForReal.webPage`,
        url: `https://lure4real.com/`,
      },
    ],
    color: `#000A4C`,
  },
  {
    id: `warlockIdle`,
    dateFrom: new Date(2022, 5, 24),
    dateTo: new Date(2024, 1, 12),
    tags: [
      TAGS[`professional`],
      TAGS[`group`],
      TAGS[`mobileApp`],
      TAGS[`game`],
      TAGS[`typescript`],
      TAGS[`html`],
      TAGS[`css`],
      TAGS[`angular14`],
      TAGS[`ionic`],
      TAGS[`tailwindcss`],
      TAGS[`apollo`],
      TAGS[`nestJS`],
      TAGS[`graphQl`],
      TAGS[`prisma`],
      TAGS[`ngxs`],
      TAGS[`dateFns`],
      TAGS[`ngxTranslate`],
      TAGS[`capacitor`],
      TAGS[`scss`],
      TAGS[`eslint`],
      TAGS[`firebase`],
    ],
    mainImage: `./images/warlockIdle/main.jpg`,
    images: [
      {
        url: `./images/warlockIdle/1.jpg`,
        thumb: `./images/warlockIdle/thumbnails/1.jpg`,
      },
      {
        url: `./images/warlockIdle/2.jpg`,
        thumb: `./images/warlockIdle/thumbnails/2.jpg`,
      },
      {
        url: `./images/warlockIdle/3.jpg`,
        thumb: `./images/warlockIdle/thumbnails/3.jpg`,
      },
      {
        url: `./images/warlockIdle/4.jpg`,
        thumb: `./images/warlockIdle/thumbnails/4.jpg`,
      },
      {
        url: `./images/warlockIdle/5.jpg`,
        thumb: `./images/warlockIdle/thumbnails/5.jpg`,
      },
      {
        url: `./images/warlockIdle/6.jpg`,
        thumb: `./images/warlockIdle/thumbnails/6.jpg`,
      },
      {
        url: `./images/warlockIdle/7.jpg`,
        thumb: `./images/warlockIdle/thumbnails/7.jpg`,
      },
      {
        url: `./images/warlockIdle/8.jpg`,
        thumb: `./images/warlockIdle/thumbnails/8.jpg`,
      },
      {
        url: `./images/warlockIdle/9.jpg`,
        thumb: `./images/warlockIdle/thumbnails/9.jpg`,
      },
      {
        url: `./images/warlockIdle/10.jpg`,
        thumb: `./images/warlockIdle/thumbnails/10.jpg`,
      },
      {
        url: `./images/warlockIdle/11.jpg`,
        thumb: `./images/warlockIdle/thumbnails/11.jpg`,
      },
      {
        url: `./images/warlockIdle/12.jpg`,
        thumb: `./images/warlockIdle/thumbnails/12.jpg`,
      },
      {
        url: `./images/warlockIdle/13.jpg`,
        thumb: `./images/warlockIdle/thumbnails/13.jpg`,
      },
    ],
    buttons: [
      {
        text: `projects.warlockIdle.androidButton`,
        url: `https://play.google.com/store/apps/details?id=pl.radrat.warlock_idle`,
      },
    ],
    color: `#BE9D75`,
  },
  {
    id: `rh`,
    dateFrom: new Date(2023, 0, 5),
    dateTo: new Date(2024, 0, 19),
    tags: [
      TAGS[`professional`],
      TAGS[`group`],
      TAGS[`mobileApp`],
      TAGS[`typescript`],
      TAGS[`html`],
      TAGS[`css`],
      TAGS[`angular15`],
      TAGS[`ionic`],
      TAGS[`tailwindcss`],
      TAGS[`graphQl`],
      TAGS[`bluetoothLe`],
      TAGS[`bluetoothSerial`],
      TAGS[`capacitor`],
      TAGS[`scss`],
      TAGS[`eslint`],
    ],
    mainImage: `./images/rh/main.jpg`,
    images: [
      {
        url: `./images/rh/1.webp`,
        thumb: `./images/rh/thumbnails/1.webp`,
      },
      {
        url: `./images/rh/2.webp`,
        thumb: `./images/rh/thumbnails/2.webp`,
      },
      {
        url: `./images/rh/3.webp`,
        thumb: `./images/rh/thumbnails/3.webp`,
      },
      {
        url: `./images/rh/4.webp`,
        thumb: `./images/rh/thumbnails/4.webp`,
      },
      {
        url: `./images/rh/5.webp`,
        thumb: `./images/rh/thumbnails/5.webp`,
      },
      {
        url: `./images/rh/6.webp`,
        thumb: `./images/rh/thumbnails/6.webp`,
      },
    ],
    color: `#3B7EFC`,
  },
  {
    id: `zdrowiej`,
    dateFrom: new Date(2022, 11, 7),
    dateTo: new Date(2023, 9, 10),
    tags: [
      TAGS[`professional`],
      TAGS[`group`],
      TAGS[`mobileApp`],
      TAGS[`typescript`],
      TAGS[`html`],
      TAGS[`css`],
      TAGS[`angular15`],
      TAGS[`ionic`],
      TAGS[`tailwindcss`],
      TAGS[`graphQl`],
      TAGS[`ngxs`],
      TAGS[`chartJs`],
      TAGS[`echarts`],
      TAGS[`dateFns`],
      TAGS[`bluetoothLe`],
      TAGS[`bluetoothSerial`],
      TAGS[`capacitor`],
      TAGS[`scss`],
      TAGS[`eslint`],
      TAGS[`firebase`],
      TAGS[`sentry`],
    ],
    mainImage: `./images/zdrowiej/main.jpg`,
    images: [
      {
        url: `./images/zdrowiej/1.webp`,
        thumb: `./images/zdrowiej/thumbnails/1.webp`,
      },
      {
        url: `./images/zdrowiej/2.webp`,
        thumb: `./images/zdrowiej/thumbnails/2.webp`,
      },
      {
        url: `./images/zdrowiej/3.webp`,
        thumb: `./images/zdrowiej/thumbnails/3.webp`,
      },
      {
        url: `./images/zdrowiej/4.webp`,
        thumb: `./images/zdrowiej/thumbnails/4.webp`,
      },
      {
        url: `./images/zdrowiej/5.webp`,
        thumb: `./images/zdrowiej/thumbnails/5.webp`,
      },
      {
        url: `./images/zdrowiej/6.webp`,
        thumb: `./images/zdrowiej/thumbnails/6.webp`,
      },
    ],
    buttons: [
      {
        text: `projects.zdrowiej.androidButton`,
        url: `https://play.google.com/store/apps/details?id=com.genexo.zdrowiej`,
      },
      {
        text: `projects.zdrowiej.iosButton`,
        url: `https://apps.apple.com/pl/app/zdrowiej/id1573385835`,
      },
      {
        text: `projects.zdrowiej.webPage`,
        url: `https://genexodladiabetyka.pl/aplikacje-i-programy/zdrowiej/`,
      },
    ],
    color: `#08A0AF`,
  },
  {
    id: `dkar`,
    dateFrom: new Date(2023, 1, 21),
    dateTo: new Date(2023, 7, 19),
    tags: [
      TAGS[`professional`],
      TAGS[`group`],
      TAGS[`mobileApp`],
      TAGS[`typescript`],
      TAGS[`html`],
      TAGS[`css`],
      TAGS[`angular15`],
      TAGS[`ionic`],
      TAGS[`tailwindcss`],
      TAGS[`graphQl`],
      TAGS[`luxon`],
      TAGS[`ngxTranslate`],
      TAGS[`bluetoothLe`],
      TAGS[`bluetoothSerial`],
      TAGS[`capacitor`],
      TAGS[`scss`],
      TAGS[`eslint`],
      TAGS[`sentry`],
    ],
    mainImage: `./images/dkar/main.jpg`,
    images: [
      {
        url: `./images/dkar/1.webp`,
        thumb: `./images/dkar/thumbnails/1.webp`,
      },
      {
        url: `./images/dkar/2.webp`,
        thumb: `./images/dkar/thumbnails/2.webp`,
      },
      {
        url: `./images/dkar/3.webp`,
        thumb: `./images/dkar/thumbnails/3.webp`,
      },
      {
        url: `./images/dkar/4.webp`,
        thumb: `./images/dkar/thumbnails/4.webp`,
      },
      {
        url: `./images/dkar/5.webp`,
        thumb: `./images/dkar/thumbnails/5.webp`,
      },
    ],
    color: `#3B7EFC`,
  },
  {
    id: `winery`,
    dateFrom: new Date(2021, 10, 13),
    dateTo: new Date(2022, 1, 26),
    tags: [
      TAGS[`private`],
      TAGS[`individual`],
      TAGS[`mobileApp`],
      TAGS[`typescript`],
      TAGS[`html`],
      TAGS[`css`],
      TAGS[`angular12`],
      TAGS[`ionic`],
      TAGS[`tailwindcss`],
      TAGS[`capacitor`],
      TAGS[`scss`],
      TAGS[`eslint`],
    ],
    mainImage: `./images/winery/main.jpg`,
    images: [
      {
        url: `./images/winery/1.jpg`,
        thumb: `./images/winery/thumbnails/1.jpg`,
      },
      {
        url: `./images/winery/2.jpg`,
        thumb: `./images/winery/thumbnails/2.jpg`,
      },
      {
        url: `./images/winery/3.jpg`,
        thumb: `./images/winery/thumbnails/3.jpg`,
      },
      {
        url: `./images/winery/4.jpg`,
        thumb: `./images/winery/thumbnails/4.jpg`,
      },
      {
        url: `./images/winery/5.jpg`,
        thumb: `./images/winery/thumbnails/5.jpg`,
      },
      {
        url: `./images/winery/6.jpg`,
        thumb: `./images/winery/thumbnails/6.jpg`,
      },
      {
        url: `./images/winery/7.jpg`,
        thumb: `./images/winery/thumbnails/7.jpg`,
      },
      {
        url: `./images/winery/8.jpg`,
        thumb: `./images/winery/thumbnails/8.jpg`,
      },
      {
        url: `./images/winery/9.jpg`,
        thumb: `./images/winery/thumbnails/9.jpg`,
      },
      {
        url: `./images/winery/10.jpg`,
        thumb: `./images/winery/thumbnails/10.jpg`,
      },
    ],
    buttons: [
      {
        text: `projects.winery.gitHubButton`,
        url: `https://github.com/RadoslawNagiel/winery`,
      },
    ],
    color: `#C72523`,
  },
  {
    id: `akameis`,
    dateFrom: new Date(2021, 9, 3),
    // dateTo: new Date(2021, 10, 5),
    tags: [TAGS[`private`], TAGS[`group`], TAGS[`game`], TAGS[`cSharp`], TAGS[`unity`]],
    mainImage: `./images/akameis/main.jpg`,
    images: [
      {
        url: `./images/akameis/1.jpg`,
        thumb: `./images/akameis/thumbnails/1.jpg`,
      },
      {
        url: `./images/akameis/2.jpg`,
        thumb: `./images/akameis/thumbnails/2.jpg`,
      },
      {
        url: `./images/akameis/3.jpg`,
        thumb: `./images/akameis/thumbnails/3.jpg`,
      },
      {
        url: `./images/akameis/4.jpg`,
        thumb: `./images/akameis/thumbnails/4.jpg`,
      },
      {
        url: `./images/akameis/5.jpg`,
        thumb: `./images/akameis/thumbnails/5.jpg`,
      },
      {
        url: `./images/akameis/6.jpg`,
        thumb: `./images/akameis/thumbnails/6.jpg`,
      },
      {
        url: `./images/akameis/7.jpg`,
        thumb: `./images/akameis/thumbnails/7.jpg`,
      },
      {
        url: `./images/akameis/8.jpg`,
        thumb: `./images/akameis/thumbnails/8.jpg`,
      },
    ],
    buttons: [
      {
        text: `projects.akameis.gameJamButton`,
        url: `https://ldjam.com/events/ludum-dare/49/akameis`,
      },
      {
        text: `projects.akameis.gameButton`,
        url: `https://kawabart.itch.io/akameis`,
      },
    ],
    color: `#6E508A`,
  },
  {
    id: `organizer`,
    dateFrom: new Date(2021, 2, 21),
    dateTo: new Date(2021, 5, 21),
    tags: [TAGS[`private`], TAGS[`group`], TAGS[`webApp`], TAGS[`cSharp`], TAGS[`dotNet`]],
    mainImage: `./images/organizer/main.jpg`,
    images: [
      {
        url: `./images/organizer/1.jpg`,
        thumb: `./images/organizer/thumbnails/1.jpg`,
      },
      {
        url: `./images/organizer/2.jpg`,
        thumb: `./images/organizer/thumbnails/2.jpg`,
      },
      {
        url: `./images/organizer/3.jpg`,
        thumb: `./images/organizer/thumbnails/3.jpg`,
      },
      {
        url: `./images/organizer/4.jpg`,
        thumb: `./images/organizer/thumbnails/4.jpg`,
      },
      {
        url: `./images/organizer/5.jpg`,
        thumb: `./images/organizer/thumbnails/5.jpg`,
      },
      {
        url: `./images/organizer/6.jpg`,
        thumb: `./images/organizer/thumbnails/6.jpg`,
      },
      {
        url: `./images/organizer/7.jpg`,
        thumb: `./images/organizer/thumbnails/7.jpg`,
      },
      {
        url: `./images/organizer/8.jpg`,
        thumb: `./images/organizer/thumbnails/8.jpg`,
      },
    ],
    color: `#8D3D99`,
  },
  {
    id: `simulation`,
    dateFrom: new Date(2021, 2, 25),
    // dateTo: new Date(2021, 2, 26),
    tags: [TAGS[`private`], TAGS[`individual`], TAGS[`game`], TAGS[`cSharp`], TAGS[`unity`], TAGS[`blender`]],
    mainImage: `./images/simulation/main.jpg`,
    images: [
      {
        type: `youtube`,
        url: `YN8HpL22V7Y`,
        thumb: `./images/simulation/thumbnails/video.jpg`,
      },
      {
        url: `./images/simulation/1.jpg`,
        thumb: `./images/simulation/thumbnails/1.jpg`,
      },
      {
        url: `./images/simulation/2.jpg`,
        thumb: `./images/simulation/thumbnails/2.jpg`,
      },
      {
        url: `./images/simulation/3.jpg`,
        thumb: `./images/simulation/thumbnails/3.jpg`,
      },
      {
        url: `./images/simulation/4.jpg`,
        thumb: `./images/simulation/thumbnails/4.jpg`,
      },
      {
        url: `./images/simulation/5.jpg`,
        thumb: `./images/simulation/thumbnails/5.jpg`,
      },
      {
        url: `./images/simulation/6.jpg`,
        thumb: `./images/simulation/thumbnails/6.jpg`,
      },
    ],
    buttons: [
      {
        text: `projects.simulation.gitHubButton`,
        url: `https://github.com/RadoslawNagiel/Symulacja`,
      },
    ],
    color: `#b0a176`,
  },
  {
    id: `printer`,
    dateFrom: new Date(2020, 1, 27),
    dateTo: new Date(2020, 9, 26),
    tags: [TAGS[`private`], TAGS[`individual`], TAGS[`arduino`], TAGS[`blender`]],
    mainImage: `./images/printer/main.jpg`,
    images: [
      {
        url: `./images/printer/1.jpg`,
        thumb: `./images/printer/thumbnails/1.jpg`,
      },
      {
        url: `./images/printer/2.jpg`,
        thumb: `./images/printer/thumbnails/2.jpg`,
      },
      {
        url: `./images/printer/3.jpg`,
        thumb: `./images/printer/thumbnails/3.jpg`,
      },
      {
        url: `./images/printer/4.jpg`,
        thumb: `./images/printer/thumbnails/4.jpg`,
      },
      {
        url: `./images/printer/5.jpg`,
        thumb: `./images/printer/thumbnails/5.jpg`,
      },
      {
        url: `./images/printer/6.jpg`,
        thumb: `./images/printer/thumbnails/6.jpg`,
      },
      {
        url: `./images/printer/7.jpg`,
        thumb: `./images/printer/thumbnails/7.jpg`,
      },
      {
        url: `./images/printer/8.jpg`,
        thumb: `./images/printer/thumbnails/8.jpg`,
      },
      {
        url: `./images/printer/9.jpg`,
        thumb: `./images/printer/thumbnails/9.jpg`,
      },
      {
        url: `./images/printer/10.jpg`,
        thumb: `./images/printer/thumbnails/10.jpg`,
      },
    ],
    color: `#a3a3a3`,
  },
  {
    id: `spaceTaxi`,
    dateFrom: new Date(2020, 9, 4),
    // dateTo: new Date(2020, 9, 5),
    tags: [TAGS[`private`], TAGS[`individual`], TAGS[`game`], TAGS[`cSharp`], TAGS[`unity`]],
    mainImage: `./images/spaceTaxi/main.jpg`,
    images: [
      {
        type: `youtube`,
        url: `U20gMhQrHco`,
        thumb: `./images/spaceTaxi/thumbnails/video.jpg`,
      },
      {
        url: `./images/spaceTaxi/1.jpg`,
        thumb: `./images/spaceTaxi/thumbnails/1.jpg`,
      },
      {
        url: `./images/spaceTaxi/2.jpg`,
        thumb: `./images/spaceTaxi/thumbnails/2.jpg`,
      },
      {
        url: `./images/spaceTaxi/3.jpg`,
        thumb: `./images/spaceTaxi/thumbnails/3.jpg`,
      },
      {
        url: `./images/spaceTaxi/4.jpg`,
        thumb: `./images/spaceTaxi/thumbnails/4.jpg`,
      },
      {
        url: `./images/spaceTaxi/5.jpg`,
        thumb: `./images/spaceTaxi/thumbnails/5.jpg`,
      },
      {
        url: `./images/spaceTaxi/6.jpg`,
        thumb: `./images/spaceTaxi/thumbnails/6.jpg`,
      },
      {
        url: `./images/spaceTaxi/7.jpg`,
        thumb: `./images/spaceTaxi/thumbnails/7.jpg`,
      },
    ],
    buttons: [
      {
        text: `projects.spaceTaxi.gameButton`,
        url: `https://radzios.itch.io/space-taxt`,
      },
      {
        text: `projects.spaceTaxi.gameJamButton`,
        url: `https://ldjam.com/events/ludum-dare/47/space-taxi`,
      },
      {
        text: `projects.spaceTaxi.gitHubButton`,
        url: `https://github.com/RadoslawNagiel/LD47`,
      },
    ],
    color: `#E419E5`,
  },
  {
    id: `guessPhrase`,
    dateFrom: new Date(2020, 5, 27),
    tags: [TAGS[`private`], TAGS[`individual`], TAGS[`php`], TAGS[`sql`], TAGS[`html`], TAGS[`css`], TAGS[`mySQL`], TAGS[`xampp`]],
    mainImage: `./images/guessPhrase/main.jpg`,
    images: [
      {
        url: `./images/guessPhrase/1.jpg`,
        thumb: `./images/guessPhrase/thumbnails/1.jpg`,
      },
      {
        url: `./images/guessPhrase/2.jpg`,
        thumb: `./images/guessPhrase/thumbnails/2.jpg`,
      },
      {
        url: `./images/guessPhrase/3.jpg`,
        thumb: `./images/guessPhrase/thumbnails/3.jpg`,
      },
      {
        url: `./images/guessPhrase/4.jpg`,
        thumb: `./images/guessPhrase/thumbnails/4.jpg`,
      },
      {
        url: `./images/guessPhrase/5.jpg`,
        thumb: `./images/guessPhrase/thumbnails/5.jpg`,
      },
    ],
    color: `#52629D`,
  },
  {
    id: `inventory`,
    dateFrom: new Date(2020, 2, 23),
    dateTo: new Date(2020, 5, 15),
    tags: [TAGS[`private`], TAGS[`group`], TAGS[`mobileApp`], TAGS[`cSharp`], TAGS[`dotNet`], TAGS[`xamarin`]],
    mainImage: `./images/inventory/main.jpg`,
    images: [
      {
        url: `./images/inventory/1.jpg`,
        thumb: `./images/inventory/thumbnails/1.jpg`,
      },
      {
        url: `./images/inventory/2.jpg`,
        thumb: `./images/inventory/thumbnails/2.jpg`,
      },
      {
        url: `./images/inventory/3.jpg`,
        thumb: `./images/inventory/thumbnails/3.jpg`,
      },
      {
        url: `./images/inventory/4.jpg`,
        thumb: `./images/inventory/thumbnails/4.jpg`,
      },
      {
        url: `./images/inventory/5.jpg`,
        thumb: `./images/inventory/thumbnails/5.jpg`,
      },
      {
        url: `./images/inventory/6.jpg`,
        thumb: `./images/inventory/thumbnails/6.jpg`,
      },
      {
        url: `./images/inventory/7.jpg`,
        thumb: `./images/inventory/thumbnails/7.jpg`,
      },
      {
        url: `./images/inventory/8.jpg`,
        thumb: `./images/inventory/thumbnails/8.jpg`,
      },
    ],
    buttons: [
      {
        text: `projects.inventory.gitHubButton`,
        url: `https://github.com/MikolajczukKamil/inwentaryzacja`,
      },
    ],
    color: `#8EE3BA`,
  },
  {
    id: `lamp`,
    dateFrom: new Date(2019, 11, 1),
    dateTo: new Date(2020, 3, 1),
    tags: [TAGS[`private`], TAGS[`individual`], TAGS[`arduino`], TAGS[`cPlus`], TAGS[`blender`]],
    mainImage: `./images/lamp/main.jpg`,
    images: [
      {
        type: `youtube`,
        url: `gkK5NovJHSE`,
        thumb: `./images/lamp/thumbnails/video1.jpg`,
      },
      {
        type: `youtube`,
        url: `J5rgi0PkX6c`,
        thumb: `./images/lamp/thumbnails/video2.jpg`,
      },
      {
        type: `youtube`,
        url: `akLKidme3Ug`,
        thumb: `./images/lamp/thumbnails/video3.jpg`,
      },
      {
        type: `youtube`,
        url: `9yQyKkOA7x4`,
        thumb: `./images/lamp/thumbnails/video4.jpg`,
      },
      {
        url: `./images/lamp/1.jpg`,
        thumb: `./images/lamp/thumbnails/1.jpg`,
      },
      {
        url: `./images/lamp/2.jpg`,
        thumb: `./images/lamp/thumbnails/2.jpg`,
      },
      {
        url: `./images/lamp/3.jpg`,
        thumb: `./images/lamp/thumbnails/3.jpg`,
      },
      {
        url: `./images/lamp/4.jpg`,
        thumb: `./images/lamp/thumbnails/4.jpg`,
      },
      {
        url: `./images/lamp/5.jpg`,
        thumb: `./images/lamp/thumbnails/5.jpg`,
      },
      {
        url: `./images/lamp/6.jpg`,
        thumb: `./images/lamp/thumbnails/6.jpg`,
      },
    ],
    color: `#FF0000`,
  },
  {
    id: `craneSimulator`,
    dateFrom: new Date(2020, 1, 1),
    // dateFrom: new Date(2020, 0, 31),
    // dateTo: new Date(2020, 1, 2),
    tags: [TAGS[`private`], TAGS[`group`], TAGS[`game`], TAGS[`cSharp`], TAGS[`arduino`], TAGS[`cPlus`], TAGS[`unity`]],
    mainImage: `./images/craneSimulator/main.jpg`,
    images: [
      {
        url: `./images/craneSimulator/1.jpg`,
        thumb: `./images/craneSimulator/thumbnails/1.jpg`,
      },
      {
        url: `./images/craneSimulator/2.jpg`,
        thumb: `./images/craneSimulator/thumbnails/2.jpg`,
      },
      {
        url: `./images/craneSimulator/3.jpg`,
        thumb: `./images/craneSimulator/thumbnails/3.jpg`,
      },
      {
        url: `./images/craneSimulator/4.jpg`,
        thumb: `./images/craneSimulator/thumbnails/4.jpg`,
      },
      {
        url: `./images/craneSimulator/5.jpg`,
        thumb: `./images/craneSimulator/thumbnails/5.jpg`,
      },
      {
        url: `./images/craneSimulator/6.jpg`,
        thumb: `./images/craneSimulator/thumbnails/6.jpg`,
      },
      {
        url: `./images/craneSimulator/7.jpg`,
        thumb: `./images/craneSimulator/thumbnails/7.jpg`,
      },
    ],
    buttons: [
      {
        text: `projects.craneSimulator.gameButton`,
        url: `https://bartdrown.itch.io/crane-simulator-polyjam`,
      },
    ],
    color: `#F75121`,
  },
  {
    id: `thiefMobile`,
    dateFrom: new Date(2019, 7, 27),
    dateTo: new Date(2019, 8, 11),
    tags: [TAGS[`private`], TAGS[`mobileApp`], TAGS[`game`], TAGS[`cSharp`], TAGS[`unity`], TAGS[`blender`]],
    mainImage: `./images/thiefMobile/main.jpg`,
    images: [
      {
        type: `youtube`,
        url: `6jQmd1TIQ-w`,
        thumb: `./images/thiefMobile/thumbnails/video.jpg`,
      },
      {
        url: `./images/thiefMobile/1.jpg`,
        thumb: `./images/thiefMobile/thumbnails/1.jpg`,
      },
      {
        url: `./images/thiefMobile/2.jpg`,
        thumb: `./images/thiefMobile/thumbnails/2.jpg`,
      },
      {
        url: `./images/thiefMobile/3.jpg`,
        thumb: `./images/thiefMobile/thumbnails/3.jpg`,
      },
      {
        url: `./images/thiefMobile/4.jpg`,
        thumb: `./images/thiefMobile/thumbnails/4.jpg`,
      },
      {
        url: `./images/thiefMobile/5.jpg`,
        thumb: `./images/thiefMobile/thumbnails/5.jpg`,
      },
    ],
    color: `#2C61FF`,
  },
  {
    id: `dothing`,
    dateFrom: new Date(2019, 9, 5),
    // dateTo: new Date(2019, 9, 7),
    tags: [TAGS[`private`], TAGS[`group`], TAGS[`game`], TAGS[`cSharp`], TAGS[`unity`]],
    mainImage: `./images/dothing/main.jpg`,
    images: [
      {
        url: `./images/dothing/1.jpg`,
        thumb: `./images/dothing/thumbnails/1.jpg`,
      },
      {
        url: `./images/dothing/2.jpg`,
        thumb: `./images/dothing/thumbnails/2.jpg`,
      },
      {
        url: `./images/dothing/3.jpg`,
        thumb: `./images/dothing/thumbnails/3.jpg`,
      },
      {
        url: `./images/dothing/4.jpg`,
        thumb: `./images/dothing/thumbnails/4.jpg`,
      },
    ],
    buttons: [
      {
        text: `projects.dothing.gameButton`,
        url: `https://radzios.itch.io/dothing`,
      },
      {
        text: `projects.dothing.gitHubButton`,
        url: `https://github.com/RadoslawNagiel/LD45`,
      },
    ],
    color: `#E17776`,
  },
  {
    id: `thief`,
    dateFrom: new Date(2018, 2, 29),
    dateTo: new Date(2019, 7, 19),
    tags: [TAGS[`private`], TAGS[`game`], TAGS[`cSharp`], TAGS[`unity`], TAGS[`blender`]],
    mainImage: `./images/thief/main.jpg`,
    images: [
      {
        url: `./images/thief/1.jpg`,
        thumb: `./images/thief/thumbnails/1.jpg`,
      },
      {
        url: `./images/thief/2.jpg`,
        thumb: `./images/thief/thumbnails/2.jpg`,
      },
      {
        url: `./images/thief/3.jpg`,
        thumb: `./images/thief/thumbnails/3.jpg`,
      },
      {
        url: `./images/thief/4.jpg`,
        thumb: `./images/thief/thumbnails/4.jpg`,
      },
      {
        url: `./images/thief/5.jpg`,
        thumb: `./images/thief/thumbnails/5.jpg`,
      },
      {
        url: `./images/thief/6.jpg`,
        thumb: `./images/thief/thumbnails/6.jpg`,
      },
      {
        url: `./images/thief/7.jpg`,
        thumb: `./images/thief/thumbnails/7.jpg`,
      },
      {
        url: `./images/thief/8.jpg`,
        thumb: `./images/thief/thumbnails/8.jpg`,
      },
      {
        url: `./images/thief/9.jpg`,
        thumb: `./images/thief/thumbnails/9.jpg`,
      },
      {
        url: `./images/thief/10.jpg`,
        thumb: `./images/thief/thumbnails/10.jpg`,
      },
      {
        url: `./images/thief/11.jpg`,
        thumb: `./images/thief/thumbnails/11.jpg`,
      },
      {
        url: `./images/thief/12.jpg`,
        thumb: `./images/thief/thumbnails/12.jpg`,
      },
      {
        url: `./images/thief/13.jpg`,
        thumb: `./images/thief/thumbnails/13.jpg`,
      },
      {
        url: `./images/thief/14.jpg`,
        thumb: `./images/thief/thumbnails/14.jpg`,
      },
      {
        url: `./images/thief/15.jpg`,
        thumb: `./images/thief/thumbnails/15.jpg`,
      },
      {
        url: `./images/thief/16.jpg`,
        thumb: `./images/thief/thumbnails/16.jpg`,
      },
      {
        url: `./images/thief/17.jpg`,
        thumb: `./images/thief/thumbnails/17.jpg`,
      },
    ],
    color: `#6C2221`,
  },
  {
    id: `demonSnail`,
    dateFrom: new Date(2019, 0, 25),
    // dateTo: new Date(2019, 0, 27),
    tags: [TAGS[`private`], TAGS[`group`], TAGS[`game`], TAGS[`cSharp`], TAGS[`unity`]],
    mainImage: `./images/demonSnail/main.jpg`,
    images: [
      {
        url: `./images/demonSnail/1.gif`,
        thumb: `./images/demonSnail/thumbnails/1.gif`,
      },
      {
        url: `./images/demonSnail/1.jpg`,
        thumb: `./images/demonSnail/thumbnails/1.jpg`,
      },
      {
        url: `./images/demonSnail/2.jpg`,
        thumb: `./images/demonSnail/thumbnails/2.jpg`,
      },
      {
        url: `./images/demonSnail/3.jpg`,
        thumb: `./images/demonSnail/thumbnails/3.jpg`,
      },
      {
        url: `./images/demonSnail/4.jpg`,
        thumb: `./images/demonSnail/thumbnails/4.jpg`,
      },
      {
        url: `./images/demonSnail/5.jpg`,
        thumb: `./images/demonSnail/thumbnails/5.jpg`,
      },
      {
        url: `./images/demonSnail/6.jpg`,
        thumb: `./images/demonSnail/thumbnails/6.jpg`,
      },
      {
        url: `./images/demonSnail/7.jpg`,
        thumb: `./images/demonSnail/thumbnails/7.jpg`,
      },
      {
        url: `./images/demonSnail/8.jpg`,
        thumb: `./images/demonSnail/thumbnails/8.jpg`,
      },
    ],
    buttons: [
      {
        text: `projects.demonSnail.gameButton`,
        url: `https://kawabart.itch.io/demon-snail-revenge`,
      },
      {
        text: `projects.demonSnail.gitHubButton`,
        url: `https://github.com/kawabart/Demon-Snail-Revenge`,
      },
    ],
    color: `#76428a`,
  },
  {
    id: `sftk`,
    dateFrom: new Date(2018, 11, 2),
    // dateTo: new Date(2018, 11, 3),
    tags: [TAGS[`private`], TAGS[`mobileApp`], TAGS[`game`], TAGS[`cSharp`], TAGS[`unity`]],
    mainImage: `./images/sftk/main.jpg`,
    images: [
      {
        url: `./images/sftk/1.gif`,
        thumb: `./images/sftk/thumbnails/1.gif`,
      },
      {
        url: `./images/sftk/2.jpg`,
        thumb: `./images/sftk/thumbnails/2.jpg`,
      },
      {
        url: `./images/sftk/3.jpg`,
        thumb: `./images/sftk/thumbnails/3.jpg`,
      },
      {
        url: `./images/sftk/4.jpg`,
        thumb: `./images/sftk/thumbnails/4.jpg`,
      },
      {
        url: `./images/sftk/5.jpg`,
        thumb: `./images/sftk/thumbnails/5.jpg`,
      },
      {
        url: `./images/sftk/6.jpg`,
        thumb: `./images/sftk/thumbnails/6.jpg`,
      },
    ],
    buttons: [
      {
        text: `projects.sftk.gameJamButton`,
        url: `https://ldjam.com/events/ludum-dare/43/sacrifice-for-the-king`,
      },
      {
        text: `projects.sftk.gameButton`,
        url: `https://radzios.itch.io/sacrifice-for-the-king`,
      },
      {
        text: `projects.sftk.gitLabButton`,
        url: `https://gitlab.com/xGraupx/sacrifice-for-the-king`,
      },
    ],
    color: `#E0E529`,
  },
  {
    id: `wsfGameJam4`,
    dateFrom: new Date(2018, 10, 9),
    // dateTo: new Date(2018, 10, 11),
    tags: [TAGS[`private`], TAGS[`group`], TAGS[`game`], TAGS[`cSharp`], TAGS[`unity`]],
    mainImage: `./images/wsfGameJam4/main.jpg`,
    images: [
      {
        url: `./images/wsfGameJam4/1.jpg`,
        thumb: `./images/wsfGameJam4/thumbnails/1.jpg`,
      },
      {
        url: `./images/wsfGameJam4/2.jpg`,
        thumb: `./images/wsfGameJam4/thumbnails/2.jpg`,
      },
      {
        url: `./images/wsfGameJam4/3.jpg`,
        thumb: `./images/wsfGameJam4/thumbnails/3.jpg`,
      },
      {
        url: `./images/wsfGameJam4/4.jpg`,
        thumb: `./images/wsfGameJam4/thumbnails/4.jpg`,
      },
      {
        url: `./images/wsfGameJam4/5.jpg`,
        thumb: `./images/wsfGameJam4/thumbnails/5.jpg`,
      },
      {
        url: `./images/wsfGameJam4/6.jpg`,
        thumb: `./images/wsfGameJam4/thumbnails/6.jpg`,
      },
      {
        url: `./images/wsfGameJam4/7.jpg`,
        thumb: `./images/wsfGameJam4/thumbnails/7.jpg`,
      },
    ],
    color: `#A13741`,
  },
  {
    id: `ciosy`,
    dateFrom: new Date(2017, 8, 25),
    dateTo: new Date(2017, 11, 8),
    tags: [
      TAGS[`private`],
      TAGS[`individual`],
      TAGS[`game`],
      TAGS[`javaScript`],
      TAGS[`php`],
      TAGS[`sql`],
      TAGS[`html`],
      TAGS[`css`],
      TAGS[`mySQL`],
      TAGS[`xampp`],
    ],
    mainImage: `./images/ciosy/main.jpg`,
    images: [
      {
        url: `./images/ciosy/1.gif`,
        thumb: `./images/ciosy/thumbnails/1.gif`,
      },
      {
        url: `./images/ciosy/1.jpg`,
        thumb: `./images/ciosy/thumbnails/1.jpg`,
      },
      {
        url: `./images/ciosy/2.jpg`,
        thumb: `./images/ciosy/thumbnails/2.jpg`,
      },
      {
        url: `./images/ciosy/3.jpg`,
        thumb: `./images/ciosy/thumbnails/3.jpg`,
      },
      {
        url: `./images/ciosy/4.jpg`,
        thumb: `./images/ciosy/thumbnails/4.jpg`,
      },
      {
        url: `./images/ciosy/5.jpg`,
        thumb: `./images/ciosy/thumbnails/5.jpg`,
      },
      {
        url: `./images/ciosy/6.jpg`,
        thumb: `./images/ciosy/thumbnails/6.jpg`,
      },
      {
        url: `./images/ciosy/7.jpg`,
        thumb: `./images/ciosy/thumbnails/7.jpg`,
      },
      {
        url: `./images/ciosy/8.jpg`,
        thumb: `./images/ciosy/thumbnails/8.jpg`,
      },
      {
        url: `./images/ciosy/9.jpg`,
        thumb: `./images/ciosy/thumbnails/9.jpg`,
      },
      {
        url: `./images/ciosy/10.jpg`,
        thumb: `./images/ciosy/thumbnails/10.jpg`,
      },
      {
        url: `./images/ciosy/11.jpg`,
        thumb: `./images/ciosy/thumbnails/11.jpg`,
      },
    ],
    buttons: [
      {
        text: `projects.ciosy.gitHubButton`,
        url: `https://github.com/RadoslawNagiel/Ciosy`,
      },
    ],
    color: `#6CAB40`,
  },
  {
    id: `ball`,
    dateFrom: new Date(2017, 5, 27),
    dateTo: new Date(2017, 6, 24),
    tags: [TAGS[`private`], TAGS[`individual`], TAGS[`game`], TAGS[`cSharp`], TAGS[`unity`]],
    mainImage: `./images/ball/main.jpg`,
    images: [
      {
        type: `youtube`,
        url: `HGfoOiZFY5A`,
        thumb: `./images/ball/thumbnails/video.jpg`,
      },
      {
        url: `./images/ball/1.jpg`,
        thumb: `./images/ball/thumbnails/1.jpg`,
      },
      {
        url: `./images/ball/2.jpg`,
        thumb: `./images/ball/thumbnails/2.jpg`,
      },
      {
        url: `./images/ball/3.jpg`,
        thumb: `./images/ball/thumbnails/3.jpg`,
      },
      {
        url: `./images/ball/4.jpg`,
        thumb: `./images/ball/thumbnails/4.jpg`,
      },
    ],
    color: `#829ECC`,
  },
  {
    id: `simpleGame`,
    dateFrom: new Date(2017, 3, 22),
    // dateTo: new Date(2017, 4, 1),
    tags: [TAGS[`private`], TAGS[`individual`], TAGS[`mobileApp`], TAGS[`game`], TAGS[`cSharp`], TAGS[`unity`], TAGS[`blender`]],
    mainImage: `./images/simpleGame/main.jpg`,
    images: [
      {
        url: `./images/simpleGame/1.gif`,
        thumb: `./images/simpleGame/thumbnails/1.gif`,
      },
      {
        url: `./images/simpleGame/2.jpg`,
        thumb: `./images/simpleGame/thumbnails/2.jpg`,
      },
      {
        url: `./images/simpleGame/3.jpg`,
        thumb: `./images/simpleGame/thumbnails/3.jpg`,
      },
      {
        url: `./images/simpleGame/4.jpg`,
        thumb: `./images/simpleGame/thumbnails/4.jpg`,
      },
    ],
    color: `#448895`,
  },
  {
    id: `blockGame`,
    dateFrom: new Date(2016, 4, 4),
    dateTo: new Date(2016, 4, 23),
    tags: [TAGS[`private`], TAGS[`individual`], TAGS[`game`], TAGS[`cPlus`], TAGS[`cPlusBuilder`]],
    mainImage: `./images/blockGame/main.jpg`,
    images: [
      {
        url: `./images/blockGame/1.gif`,
        thumb: `./images/blockGame/thumbnails/1.gif`,
      },
      {
        url: `./images/blockGame/1.jpg`,
        thumb: `./images/blockGame/thumbnails/1.jpg`,
      },
      {
        url: `./images/blockGame/2.jpg`,
        thumb: `./images/blockGame/thumbnails/2.jpg`,
      },
      {
        url: `./images/blockGame/3.jpg`,
        thumb: `./images/blockGame/thumbnails/3.jpg`,
      },
    ],
    color: `#814723`,
  },
  {
    id: `arkanoid`,
    dateFrom: new Date(2015, 8, 25),
    dateTo: new Date(2016, 3, 2),
    tags: [TAGS[`private`], TAGS[`individual`], TAGS[`game`], TAGS[`cPlus`], TAGS[`cPlusBuilder`]],
    mainImage: `./images/arkanoid/main.jpg`,
    images: [
      {
        url: `./images/arkanoid/1.gif`,
        thumb: `./images/arkanoid/thumbnails/1.gif`,
      },
      {
        url: `./images/arkanoid/1.jpg`,
        thumb: `./images/arkanoid/thumbnails/1.jpg`,
      },
      {
        url: `./images/arkanoid/2.jpg`,
        thumb: `./images/arkanoid/thumbnails/2.jpg`,
      },
      {
        url: `./images/arkanoid/3.jpg`,
        thumb: `./images/arkanoid/thumbnails/3.jpg`,
      },
      {
        url: `./images/arkanoid/4.jpg`,
        thumb: `./images/arkanoid/thumbnails/4.jpg`,
      },
      {
        url: `./images/arkanoid/5.jpg`,
        thumb: `./images/arkanoid/thumbnails/5.jpg`,
      },
    ],
    color: `#11DD3C`,
  },
  {
    id: `stocks`,
    dateFrom: new Date(2014, 8, 6),
    dateTo: new Date(2016, 2, 7),
    tags: [TAGS[`private`], TAGS[`individual`], TAGS[`game`], TAGS[`cPlus`]],
    mainImage: `./images/stocks/main.jpg`,
    images: [
      {
        url: `./images/stocks/1.jpg`,
        thumb: `./images/stocks/thumbnails/1.jpg`,
      },
      {
        url: `./images/stocks/2.jpg`,
        thumb: `./images/stocks/thumbnails/2.jpg`,
      },
      {
        url: `./images/stocks/3.jpg`,
        thumb: `./images/stocks/thumbnails/3.jpg`,
      },
      {
        url: `./images/stocks/4.jpg`,
        thumb: `./images/stocks/thumbnails/4.jpg`,
      },
      {
        url: `./images/stocks/5.jpg`,
        thumb: `./images/stocks/thumbnails/5.jpg`,
      },
      {
        url: `./images/stocks/6.jpg`,
        thumb: `./images/stocks/thumbnails/6.jpg`,
      },
      {
        url: `./images/stocks/7.jpg`,
        thumb: `./images/stocks/thumbnails/7.jpg`,
      },
      {
        url: `./images/stocks/8.jpg`,
        thumb: `./images/stocks/thumbnails/8.jpg`,
      },
      {
        url: `./images/stocks/9.jpg`,
        thumb: `./images/stocks/thumbnails/9.jpg`,
      },
    ],
    color: `#555555`,
  },
  {
    id: `farmaSama`,
    dateFrom: new Date(2014, 4, 8),
    // dateTo: new Date(2014, 4, 28),
    tags: [TAGS[`private`], TAGS[`individual`], TAGS[`game`], TAGS[`html`], TAGS[`css`]],
    mainImage: `./images/farmaSama/main.jpg`,
    images: [
      {
        url: `./images/farmaSama/1.jpg`,
        thumb: `./images/farmaSama/thumbnails/1.jpg`,
      },
      {
        url: `./images/farmaSama/2.jpg`,
        thumb: `./images/farmaSama/thumbnails/2.jpg`,
      },
      {
        url: `./images/farmaSama/3.jpg`,
        thumb: `./images/farmaSama/thumbnails/3.jpg`,
      },
      {
        url: `./images/farmaSama/4.jpg`,
        thumb: `./images/farmaSama/thumbnails/4.jpg`,
      },
      {
        url: `./images/farmaSama/5.jpg`,
        thumb: `./images/farmaSama/thumbnails/5.jpg`,
      },
      {
        url: `./images/farmaSama/6.jpg`,
        thumb: `./images/farmaSama/thumbnails/6.jpg`,
      },
      {
        url: `./images/farmaSama/7.jpg`,
        thumb: `./images/farmaSama/thumbnails/7.jpg`,
      },
    ],
    color: `#998062`,
  },
  {
    id: `football`,
    dateFrom: new Date(2013, 5, 20),
    // dateTo: new Date(2013, 6, 1),
    tags: [TAGS[`private`], TAGS[`individual`], TAGS[`html`], TAGS[`css`]],
    mainImage: `./images/football/main.jpg`,
    images: [
      {
        url: `./images/football/1.jpg`,
        thumb: `./images/football/thumbnails/1.jpg`,
      },
    ],
    color: `#008001`,
  },
  {
    id: `volleyball`,
    dateFrom: new Date(2013, 2, 15),
    dateTo: new Date(2013, 3, 23),
    tags: [TAGS[`private`], TAGS[`individual`], TAGS[`html`], TAGS[`css`]],
    mainImage: `./images/volleyball/main.jpg`,
    images: [
      {
        url: `./images/volleyball/1.jpg`,
        thumb: `./images/volleyball/thumbnails/1.jpg`,
      },
      {
        url: `./images/volleyball/2.jpg`,
        thumb: `./images/volleyball/thumbnails/2.jpg`,
      },
      {
        url: `./images/volleyball/3.jpg`,
        thumb: `./images/volleyball/thumbnails/3.jpg`,
      },
    ],
    color: `#AFA60C`,
  },
  {
    id: `maze`,
    dateFrom: new Date(2013, 2, 28),
    tags: [TAGS[`private`], TAGS[`individual`], TAGS[`html`]],
    mainImage: `./images/maze/main.jpg`,
    images: [
      {
        url: `./images/maze/1.jpg`,
        thumb: `./images/maze/thumbnails/1.jpg`,
      },
      {
        url: `./images/maze/2.jpg`,
        thumb: `./images/maze/thumbnails/2.jpg`,
      },
      {
        url: `./images/maze/3.jpg`,
        thumb: `./images/maze/thumbnails/3.jpg`,
      },
      {
        url: `./images/maze/4.jpg`,
        thumb: `./images/maze/thumbnails/4.jpg`,
      },
      {
        url: `./images/maze/5.jpg`,
        thumb: `./images/maze/thumbnails/5.jpg`,
      },
    ],
    color: `#FE0000`,
  },
];
