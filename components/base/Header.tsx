import React from "react";
import BrandLogo from "./brandLogo";
import { Search, Menu, User } from "lucide-react";
import Link from "next/link";
import LoginButton from "./LoginButton";

const Header = () => {
  return (
    <>
      <div className="flex items-center justify-between border-b-[1px] px-8 py-3">
        <div className="w-[300px] md:block hidden">
          <BrandLogo />
        </div>
        <div className="flex w-[400px] justify-center">
          <div className="flex items-center space-x-3 rounded-full border border-zinc-300 p-2 px-4 text-sm shadow-md">
            <span className="text-xs lg:text-sm  cursor-pointer ">
              Anywhere
            </span>
            <span>|</span>
            <span className=" cursor-pointer  lg:text-sm text-xs">
              Any week
            </span>
            <span>|</span>
            <span className="cursor-pointer   lg:text-sm text-xs text-zinc-500">
              Add Guest
            </span>
            <div className="bg-brand cursor-pointer rounded-full p-2 hover:bg-[#c04345]">
              <Search size={18} className="text-white " />
            </div>
          </div>
        </div>
        <div className="flex w-[300px] items-center justify-end gap-3">
          <Link
            href={"/addHome"}
            className="rounded-full hidden md:block px-4 py-2 lg:text-sm text-xs  transition-all ease-in-out hover:bg-zinc-100"
          >
            Airbnb Your Home
          </Link>
          <LoginButton />
        </div>
      </div>
    </>
  );
};

export default Header;
