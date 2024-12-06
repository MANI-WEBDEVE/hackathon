import { ChevronDown, Heart, Search, ShoppingCart } from "lucide-react";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <>
      <nav className="w-full flex flex-col items-center justify-center gap-6 border-b-[1px] border-gray-400/20    ">
        <section className="w-full flex items-center justify-center bg-black p-4">
          <div className="w-full flex items-center justify-center bg-black text-white gap-4 pl-24">
            <p>
              Summer Sale For All Swim Suits And Free Express Delivery - OFF
              50%!
            </p>
            <Link href="/">ShopNow</Link>
          </div>
          <div className="w-2/6 flex items-center justify-center gap-2">
            <p className="text-white">English</p>
            <ChevronDown />
          </div>
        </section>
        <section className="w-[80%] flex items-center justify-between p-4 ">
          <div>
            <h1 className="text-2xl font-bold uppercase">Exclusive</h1>
          </div>
          <ul className="flex items-center justify-center gap-4">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Blog</li>
          </ul>
          <div className="flex items-center justify-center gap-3 relative">
            <input
              className="px-6 py-2 bg-slate-400/10 placeholder:text-sm placeholder:bg-transparent"
              placeholder="What are you looking for"
              type="text"
            />
            <Search className="absolute right-24" />
            <div className="flex items-center justify-center gap-5">
            <Heart />
            <ShoppingCart />
            </div>
          </div>
        </section>
      </nav>
    </>
  );
};

export default Header;
