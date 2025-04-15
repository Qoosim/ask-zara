import React, { useState } from "react";
import { tabTexts } from "../../constant/data";
import { Link, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faBars } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "../../redux/auth/actions";

export const Headers = () => {
  const [isMobileNav, setMobileNav] = useState(false);
  const navigate = useNavigate();
  const onClose = () => setMobileNav((prev) => !prev);

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
          <NavLink to="/signup">
            <li className="bg-[#ff6f61] px-[1.2rem] py-[0.3rem] rounded-md text-[#fff]">
              Sign Up
            </li>
          </NavLink>
        </ul>
        <button
          onClick={onClose}
          type="button"
          className="block px-2 sm:hidden"
        >
          <FontAwesomeIcon icon={faBars} className="text-[1rem]" />
        </button>
        {isMobileNav && (
          <MobileNav close={onclose} />
        )}
      </nav>
    </>
  );
};

const MobileNav = ({ close }) => {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(signOut());
    navigate("/");
    close();
  };

  return (
    <>
      <div
        role="button"
        onClick={close}
        className="fixed inset-0 z-[100] h-full w-full"
      >
        <div className="absolute inset-0 bg-black opacity-50 backdrop-blur-md" />

        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          role="button"
          className="modal swipeIn absolute right-0 top-0 flex h-full w-[75%] flex-col items-start justify-start rounded-tl-2xl border-l bg-white p-6 shadow-lg sm:w-[300px] transition-all duration-500 ease-out"
        >
          <div className="flex w-full flex-col items-start justify-start gap-y-2">
            <div className="flex w-full items-end justify-end">
              <button type="button" onClick={close} className="">
                <FontAwesomeIcon
                  icon={faBars}
                  className="text-[1rem] text-[#000]"
                />
              </button>
            </div>
            {tabTexts.map((item) => {
              return (
                <Link
                  onClick={() => {
                    close();
                  }}
                  key={item.text}
                  to={`${item.text}`}
                  className="mb-[0.5rem]"
                >
                  {item.text}
                </Link>
              );
            })}
          </div>
          <div className="mt-4 flex w-full flex-col gap-4 font-montserrat font-semibold">
            {user ? (
              <div
                className="flex justify-center items-center gap-2 font-normal text-red-500 outline-1 px-3 py-1 rounded-lg hover:opacity-60"
                onClick={handleLogout}
              >
                <button className="italic">Logout</button>
              </div>
            ) : (
              <div className="flex flex-col gap-4">
                <Link to={`/login`}>
                  <button
                    onClick={close}
                    type="button"
                    className="w-full bg-white px-4 py-3 text-lg font-semibold text-[#7780A1] shadow-inner outline-1"
                  >
                    Login
                  </button>
                </Link>
                <Link to={`/signup`}>
                  <button
                    onClick={close}
                    type="button"
                    className="w-full bg-[#0c691f] px-4 py-3 text-lg font-semibold text-white shadow-inner"
                  >
                    Register
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
