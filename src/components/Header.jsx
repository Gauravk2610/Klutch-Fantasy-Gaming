import React, { useState } from "react";
import {Bars3Icon, XMarkIcon} from "@heroicons/react/24/outline"

const menuList = [
  "Home",
  "My Matches",
  "Leadboard",
  "Fantasy Point System",
  "About Us",
  "FAQs",
  "Contact Us",
];

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-[#211134] shadow-sm px-6 py-4 h-[78px] flex items-center justify-between">
      {/* Logo */}
      <img className="cursor-pointer" src="/assets/Klutchh logo.png" />
      {/* Menu */}
      <div className="space-x-6 hidden lg:flex">
        {menuList.map((item, index) => {
          return (
            <div
              className="text-white text-sm font-medium cursor-pointer"
              key={index}
            >
              {item}
            </div>
          );
        })}
      </div>
      {/* Logout */}
      <div className="flex items-center space-x-4">
        <Bars3Icon className="h-6 w-6 text-white cursor-pointer lg:hidden" onClick={() => setOpen(!open)} />
        <img
          className="w-5 h-5 object-contain cursor-pointer"
          src="/assets/Wallet.png"
          alt=""
        />
        <div className="flex items-center space-x-2">
          <img
            className="w-4 h-4 object-contain cursor-pointer"
            src="/assets/Logout.png"
            alt=""
          />
          <span className="text-white text-sm font-semibold cursor-pointer">
            Logout
          </span>
        </div>
      </div>
      {/* Burger Nav */}
      <div className={`fixed ${open ? 'translate-x-[0%]' : 'translate-x-[100%]' } duration-200 transition-transform top-0 bottom-0 right-0 bg-[#211134] z-50 lg:hidden`}>
        <div className="bg-[#211134] px-4 w-[300px] h-[100vh] flex flex-col items-center mt-6 space-y-4">
          <div className="ml-auto">
            <XMarkIcon onClick={() => setOpen(false)} className="w-6 h-6 text-white cursor-pointer" />
          </div>
          {menuList.map((item, index) => {
            return (
              <div
                className="text-white text-lg font-medium cursor-pointer"
                key={index}
              >
                {item}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Header;
