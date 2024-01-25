import { NavLink } from 'react-router-dom';
import { Button } from '../button';

const Navbar = () => {
  return (
    <header className="h-16">
      <nav className="flex items-center justify-between w-full h-full max-w-[1250px] px-5 mx-auto font-medium bg-green-500">
        <span className="text-3xl">iRepair</span>
        <ul className="flex items-center gap-8">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <Button>
            <NavLink to="/login">Login</NavLink>
          </Button>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
