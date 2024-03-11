import { FiSettings } from "react-icons/fi";
import { Link, Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="app">
      <Outlet />
      <div className="fixed fixed--padded fixed--bottom fixed--right">
        <Link to="/settings" className="button button--secondary button--round">
          <FiSettings />
        </Link>
      </div>
    </div>
  );
}

export default Layout;
