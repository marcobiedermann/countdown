import { lazy } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from '../layouts/Default';

const Home = lazy(() => import('../pages/Home'));
const NewPage = lazy(() => import('../pages/New'));
const SettingsPage = lazy(() => import('../pages/Settings'));

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/new',
        element: <NewPage />,
      },
      {
        path: '/settings',
        element: <SettingsPage />,
      },
    ],
  },
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
