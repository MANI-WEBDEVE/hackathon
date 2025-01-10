"use client";
import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { IoSearchSharp } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";
import { LuCircleUser } from "react-icons/lu";
import { RxHamburgerMenu } from "react-icons/rx";
import Link from "next/link";
import localFont from "next/font/local";
import useCartStore from "@/store/cartStore";

const intergral = localFont({
  src: "../app/fonts/integralcf.otf",
  variable: "--font-integral",
});

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showPromo, setShowPromo] = useState(true);
  const cart = useCartStore((state) => state.cart);
  return (
    <>
      <nav className="relative w-full">
        {showPromo && (
          <section className="flex w-full flex-col justify-center bg-black px-4 py-3 text-sm text-white sm:flex-row sm:px-10 sm:text-base">
            <div className="flex w-full justify-center gap-3 sm:w-1/2 sm:justify-end">
              <p>Sign up 20% off your first order</p>
              <span className="cursor-pointer border-b border-white font-medium">
                SignUp Now
              </span>
            </div>
            <div className="flex w-full items-center justify-center sm:w-1/2 sm:justify-end">
              <IoMdClose
                className="h-5 w-5 cursor-pointer"
                onClick={() => setShowPromo(false)}
              />
            </div>
          </section>
        )}

        <section className="flex w-full items-center justify-between px-4 py-3 sm:px-10 lg:px-20">
          <div className="hidden items-center gap-4 md:flex lg:flex">
            <h1
              className={`${intergral.className} text-2xl font-extrabold text-black sm:text-3xl lg:text-4xl`}
            >
              SHOP.CO
            </h1>
          </div>
          <div className="flex items-center gap-4 lg:hidden">
            <RxHamburgerMenu
              className="h-6 w-6 cursor-pointer"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            />
            <h1
              className={`${intergral.className} text-2xl font-extrabold text-black sm:text-3xl lg:text-4xl`}
            >
              SHOP.CO
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden list-none items-center gap-8 lg:flex">
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
          <div className="hidden items-center gap-6 lg:flex">
            <div className="relative">
              <IoSearchSharp className="absolute left-2 top-2 h-5 w-5 text-gray-500" />
              <input
                type="text"
                placeholder="Search"
                className="w-[200px] rounded-full border-[1px] border-black/5 bg-gray-400/10 py-2 pl-10 pr-4 focus:border-black/20 focus:outline-none xl:w-[300px]"
              />
            </div>
            <div style={{ position: "relative", display: "inline-block" }}>
             <FiShoppingCart className="h-6 w-6" />
              {cart.length > 0 && (
                <span
                  style={{
                    position: "absolute",
                    top: "-5px",
                    right: "-10px",
                    backgroundColor: "red",
                    color: "white",
                    borderRadius: "50%",
                    padding: "2px 6px",
                    fontSize: "10px",
                  }}
                >
                  {cart.length}
                </span>
              )}
            </div>
            <LuCircleUser className="h-6 w-6 cursor-pointer hover:text-gray-600" />
          </div>

          {/* Mobile Icons */}
          <div className="flex items-center gap-4 lg:hidden">
            <IoSearchSharp className="h-6 w-6" />
            <div style={{ position: "relative", display: "inline-block" }}>
             <FiShoppingCart className="h-6 w-6" />
              {cart.length > 0 && (
                <span
                  style={{
                    position: "absolute",
                    top: "-5px",
                    right: "-10px",
                    backgroundColor: "red",
                    color: "white",
                    borderRadius: "50%",
                    padding: "2px 6px",
                    fontSize: "10px",
                  }}
                >
                  {cart.length}
                </span>
              )}
            </div>
           
          </div>
        </section>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute left-0 top-full z-50 w-full border-t border-gray-200 bg-white shadow-lg lg:hidden">
            <ul className="flex flex-col py-4">
              <Link href="/">
                <li
                  onClick={() => setIsMenuOpen(false)}
                  className="cursor-pointer px-6 py-3 hover:bg-gray-50 hover:text-gray-600"
                >
                  Home
                </li>
              </Link>
              <Link href="/product">
                <li
                  onClick={() => setIsMenuOpen(false)}
                  className="cursor-pointer px-6 py-3 hover:bg-gray-50 hover:text-gray-600"
                >
                  Product
                </li>
              </Link>
              <Link href="/category">
                <li
                  onClick={() => setIsMenuOpen(false)}
                  className="cursor-pointer px-6 py-3 hover:bg-gray-50 hover:text-gray-600"
                >
                  Category
                </li>
              </Link>
              <Link href="/cart">
                <li
                  onClick={() => setIsMenuOpen(false)}
                  className="cursor-pointer px-6 py-3 hover:bg-gray-50 hover:text-gray-600"
                >
                  Cart
                </li>
              </Link>
              <li className="flex cursor-pointer items-center gap-2 px-6 py-3 hover:bg-gray-50">
                <LuCircleUser className="h-5 w-5" />
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
