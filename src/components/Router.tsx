import { lazy } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Layout from '../layouts/Default';

const Home = lazy(() => import('../pages/Home'));
const EventsPage = lazy(() => import('../pages/Events'));
const EventEditPage = lazy(() => import('../pages/Edit'));
const NewPage = lazy(() => import('../pages/New'));
const SettingsPage = lazy(() => import('../pages/Settings'));

const router = createBrowserRouter([
  {
    children: [
      {
        element: <Home />,
        path: '/',
      },
      {
        element: <EventsPage />,
        path: '/events',
      },
      {
        element: <EventEditPage />,
        path: '/events/:eventId/edit',
      },
      {
        element: <NewPage />,
        path: '/new',
      },
      {
        element: <SettingsPage />,
        path: '/settings',
      },
    ],
    element: <Layout />,
  },
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
