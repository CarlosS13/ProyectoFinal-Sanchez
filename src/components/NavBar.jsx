import CartWidget from "./CartWidget/CartWidget"
import logo from "../assets/logo-barberia.png"
import { NavLink, } from "react-router-dom";

const NavBar = () => {

  return (
    <nav className="navbar">
      <div>
        <img className="logo" src={logo} alt="Logo de la compañia" />
      </div>
      <div className="navbarLinks">
      <NavLink className="navbarItem" to="/">Inicio</NavLink>
      <NavLink className="navbarItem" to="/tienda">Tienda</NavLink>
      <NavLink className="navbarItem" to="/nosotros">Nosotros</NavLink>
      </div>
      <CartWidget/>
    </nav>
  );
};

export default NavBar;