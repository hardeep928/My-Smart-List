import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import logo from "../src/assets/list.png";

const Header = () => {
  const { loginWithRedirect } = useAuth0();
  const { isAuthenticated, isLoading, logout } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    <>
      <div className="header flex justify-between md:p-2 md:px-8 px-3 p-2 shadow-lg items-center top-0 sticky bg-white">
        <div className="flex items-center gap-2">
          <img className="md:w-[2em] w-[2em]" src={logo} alt="icon" />
          <span className="md:text-lg font-bold text-[12px]">
            My Smart List
          </span>
        </div>

        {isAuthenticated ? (
          <>
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

              <li>
                <button
                  onClick={() =>
                    logout({
                      logoutParams: { returnTo: window.location.origin },
                    })
                  }
                  className="cursor-pointer bg-red-500 text-white font-semibold  py-1 px-2 md:py-1 md:px-4 rounded-md shadow-md hover:bg-red-600 hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                >
                  Logout
                </button>
              </li>
            </ul>
          </>
        ) : (
          <ul>
            <li>
              <button
                onClick={() => loginWithRedirect()}
                className="cursor-pointer bg-red-500 text-white font-semibold py-1 px-2 md:py-1 md:px-4 rounded-md shadow-md hover:bg-red-600 hover:shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                Login
              </button>
            </li>
          </ul>
        )}
      </div>
    </>
  );
};

export default Header;
