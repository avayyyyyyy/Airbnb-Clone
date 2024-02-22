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
import { signOut, useSession } from "next-auth/react";

const LoginButton = () => {
  const [open, setOpen] = useState<boolean>(false);
  const session = useSession();

  return (
    <Popover>
      <PopoverTrigger>
        <ProfileButton />
      </PopoverTrigger>
      <PopoverContent className="mr-8 w-fit">
        <ul className="flex flex-col gap-2 text-sm">
          {session.status === "unauthenticated" ? (
            <>
              <Button variant={"ghost"} className="rounded-md">
                <Login />
              </Button>
              <Button variant={"ghost"} className="rounded-md">
                <SignUp />
              </Button>
            </>
          ) : (
            <Button variant={"destructive"} onClick={() => signOut()}>
              Logout
            </Button>
          )}
        </ul>
      </PopoverContent>
    </Popover>
  );
};

export default LoginButton;
