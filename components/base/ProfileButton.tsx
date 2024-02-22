import React from "react";
import { User, Menu } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { useSession } from "next-auth/react";

const ProfileButton = () => {
  const session = useSession();

  return (
    <div className="flex items-center space-x-2 border rounded-full hover:shadow-md cursor-pointer p-2">
      <Menu size={20} />
      {session.status === "unauthenticated" ? (
        <div className="p-1 bg-zinc-600 text-white rounded-full">
          <User size={17} />
        </div>
      ) : (
        <Avatar className="w-8 h-8">
          <AvatarImage src={session.data?.user?.image!} />
          <AvatarFallback>
            {session.data?.user?.name?.charAt(0).toUpperCase() as string}
          </AvatarFallback>
        </Avatar>
      )}
    </div>
  );
};

export default ProfileButton;
