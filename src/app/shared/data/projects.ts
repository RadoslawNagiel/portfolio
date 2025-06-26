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
];
