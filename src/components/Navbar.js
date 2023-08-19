import { NavLink, Outlet } from 'react-router-dom';

const Navbar = () => (
  <>
    <nav>
      <h1>Math Magicians</h1>
      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/quote">Quote</NavLink>
        <NavLink to="/calculator">Calculator</NavLink>
      </div>
    </nav>
    <Outlet />
  </>
);
export default Navbar;
