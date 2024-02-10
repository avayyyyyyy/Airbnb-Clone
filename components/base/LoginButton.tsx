"use client";

import React, { useState } from "react";
// import Link from "next/link";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import ProfileButton from "./ProfileButton";
import Login from "./Login";
import { Button } from "../ui/button";
import SignUp from "./SIgnUp";

const LoginButton = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Popover>
      <PopoverTrigger>
        <ProfileButton />
      </PopoverTrigger>
      <PopoverContent className="mr-8 w-fit">
        <ul className="flex flex-col gap-2 text-sm">
          <Button variant={"ghost"} className="rounded-md">
            <Login />
          </Button>
          <Button variant={"ghost"} className="rounded-md">
            <SignUp />
          </Button>
        </ul>
      </PopoverContent>
    </Popover>
  );
};

export default LoginButton;
