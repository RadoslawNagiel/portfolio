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
    url: string;
    thumb: string;
  }[];
  buttons?: {
    text: string;
    url: string;
  }[];
}

export const PROJECTS: ProjectInfo[] = [
  {
    inProgress: true,
    dateFrom: new Date(2024, 11, 26),
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
  },
  {
    dateFrom: new Date(2025, 2, 18),
    name: `projects.quiz.name`,
    tags: [
      TAGS[`private`],
      TAGS[`webApp`],
      TAGS[`typescript`],
      TAGS[`angular19`],
      TAGS[`ngxTranslate`],
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
  },
  {
    dateFrom: new Date(2024, 5, 11),
    dateTo: new Date(2025, 1, 17),
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
  },
  {
    dateFrom: new Date(2023, 6, 16),
    dateTo: new Date(2024, 9, 30),
    name: `projects.safetyHab.name`,
    tags: [
      TAGS[`professional`],
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
      TAGS[`eslint`],
      TAGS[`keycloak`],
      TAGS[`sentry`],
    ],
    description: `projects.safetyHab.description`,
    mainImage: `./images/safetyHab/main.jpg`,
    images: [
      {
        url: `./images/safetyHab/1.jpg`,
        thumb: `./images/safetyHab/thumbnails/1.jpg`,
      },
      {
        url: `./images/safetyHab/2.jpg`,
        thumb: `./images/safetyHab/thumbnails/2.jpg`,
      },
      {
        url: `./images/safetyHab/3.jpg`,
        thumb: `./images/safetyHab/thumbnails/3.jpg`,
      },
      {
        url: `./images/safetyHab/4.jpg`,
        thumb: `./images/safetyHab/thumbnails/4.jpg`,
      },
      {
        url: `./images/safetyHab/5.jpg`,
        thumb: `./images/safetyHab/thumbnails/5.jpg`,
      },
      {
        url: `./images/safetyHab/6.jpg`,
        thumb: `./images/safetyHab/thumbnails/6.jpg`,
      },
      {
        url: `./images/safetyHab/7.jpg`,
        thumb: `./images/safetyHab/thumbnails/7.jpg`,
      },
      {
        url: `./images/safetyHab/8.jpg`,
        thumb: `./images/safetyHab/thumbnails/8.jpg`,
      },
      {
        url: `./images/safetyHab/9.jpg`,
        thumb: `./images/safetyHab/thumbnails/9.jpg`,
      },
    ],
    buttons: [
      {
        text: `projects.safetyHab.webPage`,
        url: `https://safetyhab.com/pl`,
      },
    ],
  },
];
