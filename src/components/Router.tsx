import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from '../layouts/Default';
import Home from '../pages/Home';
import NewPage from '../pages/New';
import SettingsPage from '../pages/Settings';

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
