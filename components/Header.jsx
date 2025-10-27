import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../src/assets/list.png";

const Header = () => {
  return (
    <div className="header flex justify-between md:p-2 md:px-8 px-3 p-2 shadow-lg items-center top-0 sticky bg-white">
      <div className="flex items-center gap-2">
        <img className="md:w-[2em] w-[2em]" src={logo} alt="icon" />
        <span className="md:text-lg font-bold text-[12px]">My Smart List</span>
      </div>

      <div>
        <ul className="flex md:gap-6 items-center gap-2 text-[11px] md:text-[15px]">
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "text-red-600" : "")}
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "text-red-600" : "")}
              to="/create"
            >
              Create
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "text-red-600" : "")}
              to="/mylists"
            >
              My Lists
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
