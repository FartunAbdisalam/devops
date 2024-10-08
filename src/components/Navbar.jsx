import React from "react";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navItems } from "../constants";
import { HashLink as Link } from "react-router-hash-link";

const Navbar = () => {
  const [mobileDrewerOpen, setMobileDrewerOpen] = useState(false);
  const toggleNavbar = () => {
    setMobileDrewerOpen(!mobileDrewerOpen);
  };
  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/800 border-teal-700 ">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <span className="text-xl tracking-tight">KismayoDevOps</span>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link to={item.href}> {item.label}</Link>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex justify-center items-center space-x-12">
            <a
              href="#"
              className="bg-gradient-to-r from-teal-500 to-teal-800 py-2 px-3 rounded-md"
            >
              Get In Touch Now
            </a>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrewerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrewerOpen && (
          <div className="fixed right-0 z 20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              {navItems.map((items, index) => (
                <li key={index} className="py-4">
                  <a href={items.href}>{items.label}</a>
                </li>
              ))}
            </ul>
            <div className="flex space-x-6">
              <a
                href="#"
                className="bg-gradient-to-r from-teal-500 to-teal-800 py-2 px-3 rounded-md"
              >
                Hire Us Now
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
