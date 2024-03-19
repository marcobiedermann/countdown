import { Suspense } from "react";
import { FiSettings, FiX } from "react-icons/fi";
import { Link, Outlet, useLocation } from "react-router-dom";

function Layout() {
  const { pathname } = useLocation();

  const isSettings = pathname === "/settings";

  return (
    <div className="app">
      <Suspense>
        <Outlet />
      </Suspense>
      <div className="fixed fixed--padded fixed--bottom fixed--right">
        {isSettings ? (
          <Link to=".." className="button button--secondary button--round">
            <FiX />
          </Link>
        ) : (
          <Link
            to="/settings"
            className="button button--secondary button--round"
          >
            <FiSettings />
          </Link>
        )}
      </div>
    </div>
  );
}

export default Layout;
