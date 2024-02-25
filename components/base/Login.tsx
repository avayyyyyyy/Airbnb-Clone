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
  const [open, setOpen] = useState(false);
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
    <AlertDialog open={open} onOpenChange={() => setOpen(!open)}>
      <AlertDialogTrigger asChild>
        <div>Login</div>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogTitle>
          <div className="flex items-center justify-between text-left text-2xl ">
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
            className="rounded-lg p-2 outline outline-zinc-200"
          />
          <Label htmlFor="email">Password:</Label>
          <Input
            type="Password"
            name="Password"
            id="Password"
            onChange={(e) => setBody({ ...body, password: e.target.value })}
            className="rounded-lg p-2 outline outline-zinc-200"
          />
          <Button type="submit" className="mt-3 w-full">
            Login
          </Button>
        </form>
        <div className="m-auto">OR </div>
        <div className="flex w-full flex-col text-center ">
          <div className="flex flex-col gap-2">
            <Button
              variant={"outline"}
              onClick={() => signIn("github")}
              className="rounded-lg border p-2"
            >
              <Image
                className="mr-2 w-5"
                src={"/images/github.png"}
                alt=""
                width={2}
                height={2}
              />{" "}
              Continue with GitHub
            </Button>
          </div>
          <div className="text-zinc-700 mt-2 text-xs">
            New to Airbnb?{" "}
            <span className="hover:cursor-pointer hover:underline">
              Register
            </span>
          </div>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default Login;
