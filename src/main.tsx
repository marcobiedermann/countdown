import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import App from './App';
import './i18n';
import './index.css';
import Layout from './Layout';
import NewPage from './New';
import SettingsPage from './Settings';
import { persistor, store } from './store';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <App />,
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

function Providers() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Providers />
  </StrictMode>,
);
