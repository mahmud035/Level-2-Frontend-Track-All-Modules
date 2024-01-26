import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="sticky top-0 left-0 h-screen col-span-2 p-5 overflow-auto bg-light-gray">
      <nav className="flex flex-col">
        <NavLink
          to="/admin"
          className="p-3 text-center truncate transition-all rounded-md bg-gray hover:bg-dark-gray hover:text-white"
        >
          Dashboard
        </NavLink>
        <NavLink to="/admin/service-list">Service List</NavLink>
        <NavLink to="/admin/add-service">Add Service</NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
