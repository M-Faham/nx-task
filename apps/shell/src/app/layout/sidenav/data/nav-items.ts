import { NavItem } from '../components/nav-item/nav-item.model';

export const NAV_ITEMS: NavItem[] = [
  { path: '/', label: 'Home', subtitle: null, imgUrl: '/imgs/svgs/home.svg', iconBg: 'bg-yellow-600', exact: true },
  { path: '/table', label: 'App One', subtitle: '(Table)', imgUrl: '/imgs/svgs/table.svg', iconBg: 'bg-blue-600', exact: false },
  { path: '/data', label: 'App Two', subtitle: '(Data)', imgUrl: '/imgs/svgs/document.svg', iconBg: 'bg-green-600', exact: false },
];
