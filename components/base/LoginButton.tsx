import React from "react";
import { User, Menu } from "lucide-react";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import ProfileButton from "./ProfileButton";

const LoginButton = () => {
  return (
    <Popover>
      <PopoverTrigger>
        <ProfileButton />
        {/* <Menu /> */}
      </PopoverTrigger>
      <PopoverContent className="mr-8">
        <h1>DARK</h1>
        <h1>DARK</h1>
        <h1>DARK</h1>
        <h1>DARK</h1>
      </PopoverContent>
    </Popover>
  );
};

export default LoginButton;
