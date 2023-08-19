import { Link, Outlet } from 'react-router-dom';

const Navbar = () => (
  <>
    <nav>
      <h1>Math Magicians</h1>
      <div>
        <Link to="/">Home</Link>
        <Link to="/quote">Quote</Link>
        <Link to="/calculator">Calculator</Link>
      </div>
    </nav>
    <Outlet />
  </>
);
export default Navbar;
