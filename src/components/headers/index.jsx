import React from "react";
import { tabTexts } from "../../../data";
import { NavLink } from "react-router-dom";

export const Headers = () => {
  return (
    <>
      <nav className="flex justify-between items-center px-[2rem] py-[1rem]">
        <NavLink to="/">
          <img src="/assets/askzaralogo.png" alt="Logo" className="w-[6rem]" />
        </NavLink>
        <ul className="flex justify-center items-center gap-6">
          {tabTexts.map((nav) => (
            <NavLink
              to={nav.url}
              key={nav.id}
              className={({ isActive }) =>
                `font-montserrat text-[0.9rem] ${
                  isActive
                    ? `border-b border-[#ff6f61] text-[#ff6f61]`
                    : `hover:text-[#ff6f61]`
                }`
              }
            >
              <li>{nav.text}</li>
            </NavLink>
          ))}
        </ul>
        <ul className="flex justify-center items-center gap-8">
          <NavLink to="/login">
            <li className="hover:text-[#ff6f61]">Login</li>
          </NavLink>
          <NavLink to="/register">
            <li className="hover:text-[#ff6f61]">Sign Up</li>
          </NavLink>
        </ul>
      </nav>
    </>
  );
};
