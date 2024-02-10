"use client";

import React from "react";
import Image from "next/image";
import { categories } from "@/app/Config/category";

const FilterHeader = () => {
  return (
    <div className="flex mt-5  px-5 text-zinc-500 w-full justify-between">
      {categories.map((e, i) => {
        return (
          <div className="flex cursor-pointer flex-col m-auto items-center space-y-2">
            <Image
              className="m-auto"
              key={i}
              width={40}
              height={40}
              alt={`${e.name}`}
              src={`${e.icon}`}
            />
            <h1 className="w-fit text-[12px] text-center">{e.name}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default FilterHeader;
