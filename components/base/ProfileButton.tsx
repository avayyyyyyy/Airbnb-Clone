import React from "react";
import { User, Menu } from "lucide-react";

const ProfileButton = () => {
  return (
    <div className="flex items-center space-x-2 border rounded-full hover:shadow-md cursor-pointer p-2">
      <Menu size={20} />
      <div className="p-1 bg-zinc-600 text-white rounded-full">
        <User size={17} />
      </div>
    </div>
  );
};

export default ProfileButton;
