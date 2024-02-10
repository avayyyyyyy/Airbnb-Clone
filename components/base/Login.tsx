"use client";

import React, { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { X } from "lucide-react";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Label } from "../ui/label";

const Login = () => {
  // console.log(open);

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <div>Login</div>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogTitle>
          <div className="text-2xl text-left flex items-center justify-between ">
            Login
            <AlertDialogCancel>
              <X className="cursor-pointer" />
            </AlertDialogCancel>
          </div>
        </AlertDialogTitle>
        <AlertDialogDescription>
          <h1 className="text-sm">Welcome To Airbnb</h1>
        </AlertDialogDescription>
        <Label htmlFor="email">Email:</Label>
        <Input
          type="email"
          name="email"
          id="email"
          autoComplete="none"
          className="outline p-2 rounded-lg outline-zinc-200"
        />
        <Label htmlFor="email">Password:</Label>
        <Input
          type="Password"
          name="Password"
          id="Password"
          className="outline p-2 rounded-lg outline-zinc-200"
        />
        <AlertDialogAction className="w-full">Login</AlertDialogAction>
        <div className="m-auto">OR </div>
        <div className="flex flex-col text-center w-full ">
          <div className="flex flex-col gap-2">
            <Button variant={"outline"} className="p-2 border rounded-lg">
              <Image
                className="w-5 mr-2"
                src={"/images/google.png"}
                alt=""
                width={2}
                height={2}
              />{" "}
              Continue with Google
            </Button>
            <Button variant={"outline"} className="p-2 border rounded-lg">
              <Image
                className="w-5 mr-2"
                src={"/images/github.png"}
                alt=""
                width={2}
                height={2}
              />{" "}
              Continue with GitHub
            </Button>
          </div>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default Login;
