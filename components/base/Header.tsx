import React from "react";
import BrandLogo from "./brandLogo";
import { Search, Menu, User } from "lucide-react";
import Link from "next/link";
import LoginButton from "./LoginButton";

const Header = () => {
  return (
    <div className="flex justify-between border-b-[1px] py-3 items-center px-8">
      <div className="w-[300px]">
        <BrandLogo />
      </div>
      <div className="w-[400px] flex justify-center">
        <div className="p-2 border flex items-center border-zinc-300 w-fit px-4 rounded-full shadow-md text-sm space-x-3">
          <span className=" cursor-pointer ">Anywhere</span>
          <span>|</span>
          <span className=" cursor-pointer">Any week</span>
          <span>|</span>
          <span className="text-zinc-500 cursor-pointer">Add Guest</span>
          <div className="p-2 bg-brand hover:bg-[#c04345] cursor-pointer rounded-full">
            <Search size={18} className="text-white " />
          </div>
        </div>
      </div>
      <div className="flex items-center gap-3 w-[300px] justify-end">
        <Link
          className="py-2 px-4 text-sm rounded-full hover:bg-zinc-100 transition-all ease-in-out"
          href={"/"}
        >
          Add Your Home
        </Link>
        <LoginButton />
      </div>
    </div>
  );
};

export default Header;
