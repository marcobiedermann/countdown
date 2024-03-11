import { FiSettings } from "react-icons/fi";
import { Link, Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="app">
      <Outlet />
      <Link to="/settings">
        <FiSettings />
      </Link>
    </div>
  );
}

export default Layout;
