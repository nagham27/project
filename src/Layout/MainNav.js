import classes from "./MainNav.module.css";
import { Link } from "react-router-dom";

function MainNav() {
  return (
    <div className={classes.container}>
      <h1>NRC</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/contact">Contact us</Link>
        </li>
      </ul>
    </div>
  );
}

export default MainNav;
