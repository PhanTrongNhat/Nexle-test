import { Dashboard, Login, Signup } from 'pages';
import { DefaultLayout } from '../components';

const publicRoutes = [
  {
    path: '/signup',
    component: Signup,
    layout: '',
  },
  {
    path: '/login',
    component: Login,
  },
];

const privateRoutes = [
  {
    path: '/dashboard',
    component: Dashboard,
    layout: DefaultLayout,
  },
];

export { publicRoutes, privateRoutes };
