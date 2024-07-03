import {  useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import image from "../../assets/image.png"

import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { BsMortarboard } from "react-icons/bs";
import { AuthContext } from "../../context/AuthContext";

const Header =  () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const { pathname } = location;

  const { user } = useContext(AuthContext)
//  console.log("header user : ", user)
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
    setOpen(false);
  };

  return (
    <nav className="headers relative max-w-6xl mx-auto  flex items-center justify-between px-4 py-2">
      <Link to="/" className="flex gap-2 flex-nowrap items-center" onClick={scrollToTop}>
        <BsMortarboard className="w-7 h-7 text-primary" />
        <h1 className="text-2xl text-primary font-bold cursor-pointer">
          LearnZone
        </h1>
      </Link>

      <nav>
        <ul className="md:flex items-center space-x-10 hidden text-secondary">
          <li
            className={`${
              pathname === "/" ? "font-bold text-primary" : "font-normal"
            }  `}
          >
            <Link to="" onClick={scrollToTop}>Home</Link>
          </li>
          <li
            className={`${
              pathname === "/about" ? "font-bold text-primary" : "font-normal"
            }  `}
          >
            <Link to="about" onClick={scrollToTop}>About</Link>
          </li>
          <li
            className={`${
              pathname === "/courses" ? "font-bold text-primary" : "font-normal"
            }  `}
          >
            <Link to="courses" onClick={scrollToTop}>Courses</Link>
          </li>
          <li
            className={`${
              pathname === "/contact" ? "font-bold text-primary" : "font-normal"
            }  `}
          >
            <Link to="contact" onClick={scrollToTop}>Contact Us</Link>
          </li>
        </ul>
      </nav>

      {!user && (
        <div className="md:flex items-center gap-4 hidden">
          <Link to="/sign-in">
            <button className="bg-primaryBlue hover:bg-blue-700 text-white font-medium py-2 px-4 rounded">
              Login
            </button>
          </Link>
          <Link to="/sign-up">
            <button className="bg-secondary hover: text-tertiary font-medium py-2 px-4 rounded">
              Join for Free
            </button>
          </Link>
        </div>
         )} 
      <div className="flex items-center gap-4">
        {user && (
          <div className="flex items-center gap-4">
              <p>{user.name}</p>
            <img
              src={image}
              alt={user.name}
              className="rounded-full cursor-pointer w-12 h-12 object-cover"
            />
          </div>
        )}
        {user.type === "admin" && (
            <Link to="/dashboard" className="font-medium text-base bg-blue-300 rounded-md p-2">Dashboard</Link>
        )}
        {/* <UserButton /> */}
        <FiMenu
          className="w-7 h-7 cursor-pointer md:hidden"
          onClick={() => setOpen(true)}
        />
      </div>
      {open && (
        <div
          // ref={menuRef}
          className="absolute md:hidden top-0 right-0 w-[17rem] h-screen bg-white"
        >
          <div className="relative flex flex-col items-center justify-center space-y-[10rem] pt-20">
            <ul className="flex flex-col items-center justify-center space-y-16">
              <li
                className={`${
                  pathname === "/" ? "font-bold text-primary" : "font-medium"
                }`}
              >
                <Link to="" onClick={scrollToTop}>
                  Home
                </Link>
              </li>
              <li
                className={`${
                  pathname === "/about"
                    ? "font-bold text-primary"
                    : "font-medium"
                }`}
              >
                <Link to="about" onClick={scrollToTop}>
                  About
                </Link>
              </li>
              <li
                className={`${
                  pathname === "/courses"
                    ? "font-bold text-primary"
                    : "font-medium"
                }`}
              >
                <Link to="courses" onClick={scrollToTop}>
                  Courses
                </Link>
              </li>
              <li
                className={`${
                  pathname === "/contact"
                    ? "font-bold text-primary"
                    : "font-medium"
                }`}
              >
                <Link to="contact" onClick={scrollToTop}>
                  Contact Us
                </Link>
              </li>
            </ul>

            {!user && (

            <div className="flex flex-col w-full gap-4">
              <button className="bg-primaryBlue text-center font-medium rounded-full p-2 text-white">
              <Link to="/sign-in" onClick={() => setOpen(false)}>
                Sign In
              </Link>
              </button>
              <button className="bg-secondary text-center font-medium rounded-full p-2 text-primary">
              <Link to="/sign-up" onClick={() => setOpen(false)}>
              Join for Free
              </Link>
              </button>
            </div>
               )}  

          </div>
          <MdClose
            className="absolute top-3 right-3 text-secondary w-7 h-7 cursor-pointer"
            onClick={() => setOpen(false)}
          />
        </div>
      )}
    </nav>
  );
};

export default Header;
