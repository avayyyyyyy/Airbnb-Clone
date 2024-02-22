"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { X } from "lucide-react";
import { signIn } from "next-auth/react";

import {
  AlertDialog,
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

  const [body, setBody] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  async function submitForm(e: any) {
    e.preventDefault();
    try {
      await signIn("credentials", {
        email: body.email,
        password: body.password,
        callbackUrl: "/",
        redirect: true,
      });
    } catch (error) {}

    console.log(body);
  }

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
        <form onSubmit={(e) => submitForm(e)}>
          <Label htmlFor="email">Email:</Label>
          <Input
            type="email"
            name="email"
            id="email"
            autoComplete="none"
            onChange={(e) => setBody({ ...body, email: e.target.value })}
            className="outline p-2 rounded-lg outline-zinc-200"
          />
          <Label htmlFor="email">Password:</Label>
          <Input
            type="Password"
            name="Password"
            id="Password"
            onChange={(e) => setBody({ ...body, password: e.target.value })}
            className="outline p-2 rounded-lg outline-zinc-200"
          />
          <Button type="submit" className="w-full mt-3">
            Login
          </Button>
        </form>
        <div className="m-auto">OR </div>
        <div className="flex flex-col text-center w-full ">
          <div className="flex flex-col gap-2">
            {/* <Button variant={"outline"} className="p-2 border rounded-lg">
              <Image
                className="w-5 mr-2"
                src={"/images/google.png"}
                alt=""
                width={2}
                height={2}
              />{" "}
              Continue with Google
            </Button> */}
            <Button
              variant={"outline"}
              onClick={() => signIn("github")}
              className="p-2 border rounded-lg"
            >
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
