"use client";

import React, { useState } from "react";
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
import Link from "next/link";

const LoginButton = () => {
  const [open, setOpen] = useState<boolean>(false);
  const session = useSession();

  return (
    <Popover>
      <PopoverTrigger>
        <ProfileButton />
      </PopoverTrigger>
      <PopoverContent className="mr-8 w-fit">
        <div className="flex flex-col gap-2 text-sm">
          {session.status === "unauthenticated" ? (
            <>
              <Button variant={"outline"} className="rounded-md">
                <Login />
              </Button>
              <Button variant={"outline"} className="rounded-md">
                <SignUp />
              </Button>
            </>
          ) : (
            <div className="flex flex-col gap-y-2">
              <Link
                className="p-2 md:hidden block font-normal bg-secondary-foreground/5 rounded-md"
                href={"/listing"}
              >
                Add your home
              </Link>
              <Link
                className="p-2 font-normal bg-secondary-foreground/5 rounded-md"
                href={"/listing"}
              >
                My Listing
              </Link>
              <Link
                className="p-2 font-normal bg-secondary-foreground/5 rounded-md"
                href={"/favorite"}
              >
                My Favorite
              </Link>
              <Link
                className="p-2 font-normal bg-secondary-foreground/5 rounded-md"
                href={"/reservation"}
              >
                My Reservations
              </Link>
              <Button variant={"destructive"} onClick={() => signOut()}>
                Logout
              </Button>
            </div>
          )}
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default LoginButton;
