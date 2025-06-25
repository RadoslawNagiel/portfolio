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
      TAG.angular,
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
];
