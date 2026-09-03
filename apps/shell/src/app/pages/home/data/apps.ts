import { AppCard } from '../home.model';

export const APPS: AppCard[] = [
  {
    name: 'App One',
    sub: '(Table)',
    description: 'View and manage records in a data table.',
    path: '/table',
    imgUrl: '/imgs/svgs/table.svg',
    bg: 'bg-blue-50',
    iconBg: 'bg-blue-600',
    buttonBg: 'bg-blue-700 hover:bg-blue-800',
  },
  {
    name: 'App Two',
    sub: '(Data)',
    description: 'View important information and details.',
    path: '/data',
    imgUrl: '/imgs/svgs/document.svg',
    bg: 'bg-green-50',
    iconBg: 'bg-green-600',
    buttonBg: 'bg-green-700 hover:bg-green-800',
  },
];
