import { Suspense } from 'react';
import { FiSettings, FiX } from 'react-icons/fi';
import { Outlet, useLocation } from 'react-router-dom';

import { Button } from '../components';

function Layout() {
  const { pathname } = useLocation();
  const isSettings = pathname === '/settings';

  return (
    <div className="app">
      <Suspense>
        <Outlet />
      </Suspense>
      <div className="fixed fixed--padded fixed--bottom fixed--right">
        {isSettings ? (
          <Button to=".." style="round" variant="secondary">
            <FiX />
          </Button>
        ) : (
          <Button to="/settings" style="round" variant="secondary">
            <FiSettings />
          </Button>
        )}
      </div>
    </div>
  );
}

export default Layout;
