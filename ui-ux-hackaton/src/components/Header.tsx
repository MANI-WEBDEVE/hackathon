"use client";
import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { IoSearchSharp } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";
import { LuCircleUser } from "react-icons/lu";
import { RxHamburgerMenu } from "react-icons/rx";
import Link from "next/link";
import localFont from "next/font/local";

const intergral = localFont({
    src: "../app/fonts/integralcf.otf",
    variable: "--font-integral", 
  }); 
  
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showPromo, setShowPromo] = useState(true);

  return (
    <>
      <nav className="w-full relative">
        {showPromo && (
          <section className="w-full bg-black flex flex-col sm:flex-row justify-center px-4 sm:px-10 py-3 text-white text-sm sm:text-base">
            <div className="w-full sm:w-1/2 flex justify-center sm:justify-end gap-3">
              <p>Sign up 20% off your first order</p>
              <span className="font-medium border-b border-white cursor-pointer">
                SignUp Now
              </span>
            </div>
            <div className="w-full sm:w-1/2 flex justify-center sm:justify-end items-center">
              <IoMdClose
                className="w-5 h-5 cursor-pointer"
                onClick={() => setShowPromo(false)}
              />
            </div>
          </section>
        )}

        <section className="w-full flex justify-between items-center py-3 px-4 sm:px-10 lg:px-20">
          <div className="flex items-center gap-4 hidden  lg:flex">
            <h1 className={`${intergral.className} text-2xl sm:text-3xl lg:text-4xl font-extrabold text-black`}>
              SHOP.CO
            </h1>
          </div>
          <div className="flex items-center  lg:hidden gap-4">
            <RxHamburgerMenu
              className="w-6 h-6 cursor-pointer"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            />
            <h1 className={`${intergral.className} text-2xl sm:text-3xl lg:text-4xl font-extrabold text-black`}>
              SHOP.CO
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex gap-8 items-center list-none">
            <Link href="/">
              <li className="cursor-pointer hover:text-gray-600">Home</li>
            </Link>
            <Link href="/product">
              <li className="cursor-pointer hover:text-gray-600">Product</li>
            </Link>
            <Link href="/category">
              <li className="cursor-pointer hover:text-gray-600">Category</li>
            </Link>
            <Link href="/cart">
              <li className="cursor-pointer hover:text-gray-600">Cart</li>
            </Link>
          </div>

          {/* Search and Icons */}
          <div className="hidden lg:flex items-center gap-6">
            <div className="relative">
              <IoSearchSharp className="absolute top-2 left-2 w-5 h-5 text-gray-500" />
              <input
                type="text"
                placeholder="Search"
                className="rounded-full pl-10 pr-4 py-2 w-[200px] xl:w-[300px] bg-gray-400/10 border-[1px] border-black/5 focus:outline-none focus:border-black/20"
              />
            </div>
            <FiShoppingCart className="w-6 h-6 cursor-pointer hover:text-gray-600" />
            <LuCircleUser className="w-6 h-6 cursor-pointer hover:text-gray-600" />
          </div>

          {/* Mobile Icons */}
          <div className="flex lg:hidden items-center gap-4">
            <IoSearchSharp className="w-6 h-6" />
            <FiShoppingCart className="w-6 h-6" />
           
          </div>
        </section>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white z-50 border-t border-gray-200 shadow-lg">
            <ul className="flex flex-col py-4">
              <Link href="/">
                <li className="px-6 py-3 hover:bg-gray-50 cursor-pointer hover:text-gray-600">
                  Home
                </li>
              </Link>
              <Link href="/product">
                <li className="px-6 py-3 hover:bg-gray-50 cursor-pointer hover:text-gray-600">
                  Product
                </li>
              </Link>
              <Link href="/category">
                <li className="px-6 py-3 hover:bg-gray-50 cursor-pointer hover:text-gray-600">
                  Category
                </li>
              </Link>
              <Link href="/cart">
                <li className="px-6 py-3 hover:bg-gray-50 cursor-pointer hover:text-gray-600">
                  Cart
                </li>
              </Link>
              <li className="px-6 py-3 hover:bg-gray-50 cursor-pointer flex items-center gap-2">
                <LuCircleUser className="w-5 h-5" />
                Account
              </li>
            </ul>
          </div>
        )}
      </nav>
    </>
  );
};

export default Header;
