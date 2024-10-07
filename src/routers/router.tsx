import { createBrowserRouter } from 'react-router-dom';
import { Home } from '@/pages';
import { ROUTES } from '@/libs/constants';
import { Route } from '@/libs/interfaces';

const routes: Route[] = [
  {
    path: ROUTES.Home,
    element: <Home />,
    errorElement: <div>Page Not Found</div>,
    children: [],
  },
];

export const router = createBrowserRouter(routes);
