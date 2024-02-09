import React from "react";
import { Input } from "@/components/ui/input";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Label } from "../ui/label";

const Login = () => {
  return (
    <div>
      <AlertDialog>
        <AlertDialogTrigger>Login</AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogTitle>Login</AlertDialogTitle>
          <AlertDialogDescription>
            <h1 className="text-sm">Welcome To Airbnb</h1>
          </AlertDialogDescription>
          <Label htmlFor="email">Email:</Label>
          <Input
            type="email"
            name="email"
            id="email"
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
                <div>
                  {" "}
                  <img
                    className="w-5"
                    src="public/images/google.png"
                    alt=""
                  />{" "}
                  <h1>Continue with Google</h1>
                </div>
              </Button>
              <Button
                variant={"outline"}
                className="p-2 border rounded-lg"
              >
                <div>
                  {" "}
                  <img src="public/images/github.png" alt="" />{" "}
                  <h1>Continue with GitHub</h1>
                </div>
              </Button>
            </div>
          </div>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default Login;
