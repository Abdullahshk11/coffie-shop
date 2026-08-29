import { useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { IoMenu, IoClose } from "react-icons/io5";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <nav className=" slidedown sticky top-6 z-50 mx-auto w-[92%] md:w-[85%] lg:w-1/2 rounded-full border border-white/40 bg-white/30 px-4 py-3 backdrop-blur-xl md:px-6 md:py-4">

        <div className="flex items-center justify-between">

          {/* Logo */}
          <div className="font-bold text-xl md:text-2xl hover:cursor-pointer">
            <a href="/"> Coffie Time </a>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex gap-7">
            <li className="hover:underline hover:cursor-pointer hover:text-white">
              Home
            </li>

            <li className="hover:underline hover:cursor-pointer hover:text-white">
              Menu
            </li>

            <li className="hover:underline hover:cursor-pointer hover:text-white">
              Contact Us
            </li>
          </ul>

          {/* Desktop Icons */}
          <ul className="hidden md:flex gap-5">

            <Link to="/Order">
              <li className="hover:cursor-pointer">
                <FaCartShopping size="2em" />
              </li>
            </Link>
            <li className="hover:cursor-pointer"></li>
          </ul>

          {/* Hamburger */}
          <button
            onClick={() => setIsOpen(true)}
            className="md:hidden hover:cursor-pointer"
          >
            <IoMenu size="2em" />
          </button>

        </div>
      </nav>


      {/* ================= MOBILE SIDEBAR ================= */}

      {/* Overlay */}
      <div
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm transition-opacity duration-300 md:hidden
          ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}
        `}
      ></div>


      {/* Sidebar */}
      <aside
        className={`fixed right-0 top-0 z-[70] h-screen w-[75%] max-w-sm
          bg-white/80 backdrop-blur-2xl
          border-l border-white/40
          shadow-2xl
          transition-transform duration-500 ease-in-out
          md:hidden
          ${isOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >

        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-6">

          <div className="font-bold text-2xl">
            Coffie Time
          </div>

          <button
            onClick={() => setIsOpen(false)}
            className="hover:cursor-pointer"
          >
            <IoClose size="2em" />
          </button>

        </div>


        {/* Mobile Navigation */}
        <ul className="flex flex-col items-center gap-8 mt-10 text-lg">

          <li
            onClick={() => setIsOpen(false)}
            className="hover:underline hover:cursor-pointer hover:text-white"
          >
            <a href="/">Home </a>
          </li>

          <li
            onClick={() => setIsOpen(false)}
            className="hover:underline hover:cursor-pointer hover:text-white"
          >
            Menu
          </li>

          <li
            onClick={() => setIsOpen(false)}
            className="hover:underline hover:cursor-pointer hover:text-white"
          >
            Contact Us
          </li>

        </ul>


        {/* Mobile Icons */}
        <ul className="flex justify-center gap-7 mt-10">



          <li className="hover:cursor-pointer">
            <FaCartShopping size="2em" />
          </li>

          <li className="hover:cursor-pointer"></li>

        </ul>

      </aside>
    </>
  );
};

export default Navbar;