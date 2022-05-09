import { Link } from 'react-router-dom';

const Sidebar = () => (
  <aside className="border">
    <h2>This is a temporary navigation to test the routes</h2>
    <ul className="flex gap-5">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/signin">Sign in</Link>
      </li>
      <li>
        <Link to="/signup">Sign up</Link>
      </li>
      <li>
        <Link to="/cars/1">Car with id 1</Link>
      </li>
      <li>
        <Link to="/reserve">Reserve a car</Link>
      </li>
    </ul>
  </aside>
);

export default Sidebar;
