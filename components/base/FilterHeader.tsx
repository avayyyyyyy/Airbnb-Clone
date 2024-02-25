"use client";
import React from "react";
import Image from "next/image";
import { categories } from "@/app/Config/category";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const FilterHeader = () => {
  const params = useSearchParams();
  const filter = params.get("filter");

  console.log(categories);

  return (
    <div className="mt-5 flex h-auto w-full items-center justify-between px-5 text-zinc-500">
      <div className="flex overflow-x-scroll lg:w-full pb-4 mx-auto gap-5">
        {categories.map((e, i) => {
          return (
            <Link
              href={`?filter=${e.name}`}
              className={`m-auto ${
                filter === e.name ? "border-b-4 " : null
              } flex cursor-pointer flex-col pb-2 items-center space-y-2 border-black`}
            >
              <Image
                className="m-auto min-w-10 min-h-10"
                key={i}
                width={40}
                height={40}
                alt={`${e.name}`}
                src={`${e.imageUrl}`}
              />
              <h1 className="w-fit text-center text-sm">{e.name}</h1>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default FilterHeader;
