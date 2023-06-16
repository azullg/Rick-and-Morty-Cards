import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import Style from "./NavBar.module.css";
import {  NavLink  } from "react-router-dom";
import './NavBar.css'
const NavBar = (props) => {
  const { onSearch, logout} = props;

  return (
    <div className={Style.navconteiner}>
  
    <div className={Style.izq}>
      <NavLink to = '/about'className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : "pending"
    }> <h4>ABOUT</h4></NavLink>
    <NavLink to = '/home' className={({ isActive, isPending }) =>
isPending ? "pending" : isActive ? "active" : "pending"
}> <h4 >CARDS</h4></NavLink>
    <NavLink to = '/favorites'className={({ isActive, isPending }) =>
isPending ? "pending" : isActive ? "active" : "pending"
}> <h4 >FAVORITOS</h4></NavLink>

<NavLink to = '/contactos'className={({ isActive, isPending }) =>
isPending ? "pending" : isActive ? "active" : "pending"
}> <h4 >CONTACTOS</h4></NavLink>
</div>   
  <div>
  <h4 className="link" onClick={logout}>
      LOGOUT
    </h4>
</div>


</div>
  );
};

export default NavBar;
