import React from "react";
import Link from "next/link";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import ProfileButton from "./ProfileButton";
import Login from "./Login";

const LoginButton = () => {
  return (
    <Popover>
      <PopoverTrigger>
        <ProfileButton />
      </PopoverTrigger>
      <PopoverContent className="mr-8 w-fit">
        <ul className="flex flex-col gap-2 text-sm">
          <Link className="hover:bg-zinc-200 px-2 py-1 rounded-md" href={""}>
            <Login />
          </Link>
          <Link className="hover:bg-zinc-200 px-2 py-1 rounded-md" href={""}>
            SignUp
          </Link>
        </ul>
      </PopoverContent>
    </Popover>
  );
};

export default LoginButton;
