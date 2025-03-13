import React from "react";
import { tabTexts } from "../../constant/data";
import { NavLink } from "react-router-dom";

export const Headers = () => {
  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-[2rem] py-[1rem] bg-[#f6f5dd]">
        <NavLink to="/">
          <img
            src="/assets/askzaralogo.png"
            alt="Logo"
            className="w-[5.8rem]"
          />
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
        <ul className="flex justify-center items-center gap-8 text-[0.8rem] font-semibold font-montserrat">
          <NavLink to="/login">
            <li className="outline-1 outline-[#ff6f61] px-[1.2rem] py-[0.3rem] rounded-md">
              Login
            </li>
          </NavLink>
          <NavLink to="/register">
            <li className="bg-[#ff6f61] px-[1.2rem] py-[0.3rem] rounded-md text-[#fff]">
              Sign Up
            </li>
          </NavLink>
        </ul>
      </nav>
    </>
  );
};
