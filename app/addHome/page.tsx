"use client";
import React from "react";
import { RandomNumber } from "@/lib/utils";
import CountUp from "react-countup";
import Image from "next/image";
import AddHomeForm from "@/components/base/AddHomeForm";

const AddHome = () => {
  return (
    <div className="flex w-[80%] mt-8 h-full flex-wrap mx-auto gap-x-14 justify-between">
      <div className="justify-center h-full gap-y-4 text-center my-auto mx-auto lg:text-left">
        <div className="font-bold text-4xl lg:text-7xl text-brand">
          Airbnb it
        </div>
        <div className="lg:text-3xl text-xl font-bold">you could earn</div>
        <div className="text-2xl font-semibold my-4">
          <span>
            ₹<CountUp duration={2} end={RandomNumber()} />
            /per night
          </span>
        </div>
        <div className="lg:flex hidden space-x-2">
          <Image
            width={200}
            className="rounded-2xl object-cover"
            height={300}
            src={
              "https://i.pinimg.com/564x/50/f4/6f/50f46f70830fcd0789416131b8f05f9d.jpg"
            }
            alt="image"
          />
          <Image
            className="rounded-2xl object-cover"
            width={200}
            height={400}
            src={
              "https://i.pinimg.com/564x/1b/39/5c/1b395c056ecc792614beea04db47d1bc.jpg"
            }
            alt="image"
          />
        </div>
      </div>
      <div className="text-4xl w-full lg:w-fit">
        <AddHomeForm />{" "}
      </div>
    </div>
  );
};

export default AddHome;
