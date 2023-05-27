import { NavLink } from "react-router-dom";
import classes from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav className={classes.navItems}>
      <NavLink className={classes.navItem} to="/categories">
        Categories
      </NavLink>
      <NavLink className={classes.navItem} to="/shoppingCart">
        Shopping Cart
      </NavLink>
    </nav>
  );
};

export default Navigation;
