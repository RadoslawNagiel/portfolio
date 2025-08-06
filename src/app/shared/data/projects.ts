import { Tag, TAGS } from './tags';

export interface ProjectInfo {
  dateFrom: Date;
  dateTo?: Date;
  inProgress?: boolean;
  name: string;
  tags: Tag[];
  description: string;
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
    inProgress: true,
    dateFrom: new Date(2024, 10, 26),
    name: `projects.targeto.name`,
    tags: [
      TAGS[`private`],
      TAGS[`mobileApp`],
      TAGS[`typescript`],
      TAGS[`angular18`],
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
    description: `projects.targeto.description`,
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
    dateFrom: new Date(2025, 1, 18),
    name: `projects.quiz.name`,
    tags: [
      TAGS[`private`],
      TAGS[`webApp`],
      TAGS[`typescript`],
      TAGS[`angular19`],
      TAGS[`ngxTranslate`],
      TAGS[`scss`],
      TAGS[`eslint`],
    ],
    description: `projects.quiz.description`,
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
    dateFrom: new Date(2024, 4, 11),
    dateTo: new Date(2025, 0, 17),
    name: `projects.wineryV2.name`,
    tags: [
      TAGS[`private`],
      TAGS[`mobileApp`],
      TAGS[`typescript`],
      TAGS[`angular17`],
      TAGS[`ionic`],
      TAGS[`tailwindcss`],
      TAGS[`ngxs`],
      TAGS[`capacitor`],
      TAGS[`scss`],
      TAGS[`eslint`],
    ],
    description: `projects.wineryV2.description`,
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
    dateFrom: new Date(2023, 5, 16),
    dateTo: new Date(2024, 8, 30),
    name: `projects.safetyHab.name`,
    tags: [
      TAGS[`professional`],
      TAGS[`group`],
      TAGS[`webApp`],
      TAGS[`mobileApp`],
      TAGS[`typescript`],
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
    description: `projects.safetyHab.description`,
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
    dateFrom: new Date(2021, 0, 10),
    dateTo: new Date(2024, 5, 11),
    name: `projects.lureForReal.name`,
    tags: [
      TAGS[`professional`],
      TAGS[`group`],
      TAGS[`webApp`],
      TAGS[`mobileApp`],
      TAGS[`typescript`],
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
    description: `projects.lureForReal.description`,
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
    dateFrom: new Date(2022, 5, 24),
    dateTo: new Date(2024, 1, 12),
    name: `projects.warlockIdle.name`,
    tags: [
      TAGS[`professional`],
      TAGS[`group`],
      TAGS[`mobileApp`],
      TAGS[`game`],
      TAGS[`typescript`],
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
    description: `projects.warlockIdle.description`,
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
    color: `#301411`,
  },
  {
    dateFrom: new Date(2023, 0, 5),
    dateTo: new Date(2024, 0, 19),
    name: `projects.rh.name`,
    tags: [
      TAGS[`professional`],
      TAGS[`group`],
      TAGS[`mobileApp`],
      TAGS[`typescript`],
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
    description: `projects.rh.description`,
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
    dateFrom: new Date(2022, 11, 7),
    dateTo: new Date(2023, 9, 10),
    name: `projects.zdrowiej.name`,
    tags: [
      TAGS[`professional`],
      TAGS[`group`],
      TAGS[`mobileApp`],
      TAGS[`typescript`],
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
    description: `projects.zdrowiej.description`,
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
    dateFrom: new Date(2023, 1, 21),
    dateTo: new Date(2023, 7, 19),
    name: `projects.dkar.name`,
    tags: [
      TAGS[`professional`],
      TAGS[`group`],
      TAGS[`mobileApp`],
      TAGS[`typescript`],
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
    description: `projects.dkar.description`,
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
    dateFrom: new Date(2021, 10, 13),
    dateTo: new Date(2022, 1, 26),
    name: `projects.winery.name`,
    tags: [
      TAGS[`private`],
      TAGS[`mobileApp`],
      TAGS[`typescript`],
      TAGS[`angular12`],
      TAGS[`ionic`],
      TAGS[`tailwindcss`],
      TAGS[`capacitor`],
      TAGS[`scss`],
      TAGS[`eslint`],
    ],
    description: `projects.winery.description`,
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
    color: `#7A1616`,
  },
  {
    dateFrom: new Date(2021, 9, 3),
    // dateTo: new Date(2021, 10, 5),
    name: `projects.akameis.name`,
    tags: [
      TAGS[`private`],
      TAGS[`group`],
      TAGS[`game`],
      TAGS[`cSharp`],
      TAGS[`unity`],
    ],
    description: `projects.akameis.description`,
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
        text: `projects.akameis.projectButton`,
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
    dateFrom: new Date(2021, 2, 25),
    // dateTo: new Date(2021, 2, 26),
    name: `projects.simulation.name`,
    tags: [TAGS[`private`], TAGS[`game`], TAGS[`cSharp`], TAGS[`unity`]],
    description: `projects.simulation.description`,
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
    dateFrom: new Date(2020, 2, 23),
    dateTo: new Date(2020, 5, 15),
    name: `projects.inventory.name`,
    tags: [
      TAGS[`private`],
      TAGS[`group`],
      TAGS[`mobileApp`],
      TAGS[`cSharp`],
      TAGS[`dotNet`],
      TAGS[`xamarin`],
    ],
    description: `projects.inventory.description`,
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
    dateFrom: new Date(2019, 11, 1),
    dateTo: new Date(2020, 3, 1),
    name: `projects.lamp.name`,
    tags: [TAGS[`private`], TAGS[`arduino`], TAGS[`cPlus`]],
    description: `projects.lamp.description`,
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
];
