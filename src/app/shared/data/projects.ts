import { TAG } from './tags';

export interface ProjectInfo {
  dateFrom: Date;
  dateTo?: Date;
  inProgress?: boolean;
  name: string;
  tags: TAG[];
  description: string;
  mainImage: string;
  images: string[];
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
      TAG.angular18,
      TAG.typescript,
      TAG.ionic,
      TAG.capacitor,
      TAG.ngxs,
      TAG.chartJs,
      TAG.firebase,
      TAG.eslint,
      TAG.tailwindcss,
    ],
    description: `projects.targeto.description`,
    mainImage: `./images/targeto/main.jpg`,
    images: [
      `./images/targeto/1.jpg`,
      `./images/targeto/2.jpg`,
      `./images/targeto/3.jpg`,
      `./images/targeto/4.jpg`,
      `./images/targeto/5.jpg`,
      `./images/targeto/6.jpg`,
    ],
  },
  {
    dateFrom: new Date(2025, 2, 18),
    name: `projects.quiz.name`,
    tags: [TAG.angular19, TAG.typescript, TAG.eslint],
    description: `projects.quiz.description`,
    mainImage: `./images/quiz/2.jpg`,
    images: [
      `./images/quiz/1.jpg`,
      `./images/quiz/2.jpg`,
      `./images/quiz/3.jpg`,
      `./images/quiz/4.jpg`,
      `./images/quiz/5.jpg`,
      `./images/quiz/6.jpg`,
      `./images/quiz/7.jpg`,
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
      TAG.angular17,
      TAG.typescript,
      TAG.ionic,
      TAG.capacitor,
      TAG.ngxs,
      TAG.eslint,
      TAG.tailwindcss,
    ],
    description: `projects.wineryV2.description`,
    mainImage: `./images/wineryV2/main.jpg`,
    images: [
      `./images/wineryV2/1.jpg`,
      `./images/wineryV2/2.jpg`,
      `./images/wineryV2/3.jpg`,
      `./images/wineryV2/4.jpg`,
      `./images/wineryV2/5.jpg`,
      `./images/wineryV2/6.jpg`,
      `./images/wineryV2/7.jpg`,
      `./images/wineryV2/8.jpg`,
      `./images/wineryV2/9.jpg`,
      `./images/wineryV2/10.jpg`,
      `./images/wineryV2/11.jpg`,
      `./images/wineryV2/12.jpg`,
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
];
