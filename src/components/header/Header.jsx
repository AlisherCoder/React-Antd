import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
   return (
      <div className="container mx-auto flex gap-8 p-4 justify-between">
         <h2>Header</h2>
         <div className="flex gap-3 items-center">
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/about"}>Products</NavLink>
            {/* <NavLink to={"/login"}>Login</NavLink> */}
         </div>
      </div>
   );
};

export default Header;
