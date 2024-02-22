import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import axios from "axios";
import { X } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogTitle,
  AlertDialogTrigger,
  AlertDialogCancel,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Label } from "../ui/label";
import { redirect } from "next/navigation";
import { signIn } from "next-auth/react";

const SignUp = () => {
  const [body, setBody] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [userCreated, setUserCreated] = useState(false);

  async function submitForm(e: any) {
    e.preventDefault();
    setError("");
    setUserCreated(false);

    if (body.password !== body.confirmPassword) {
      setError("Passwords do not match");
    } else {
      try {
        const res = await axios.post("/api/register", {
          name: body.name,
          email: body.email,
          password: body.confirmPassword,
        });

        // Check if the registration was successful
        if (res.status === 200) {
          setUserCreated(true);
          setError("");
          setBody({
            ...body,
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
          });
          await signIn("credentials", {
            email: body.email,
            password: body.password,
            callbackUrl: "/",
            redirect: true,
          });
        } else {
          setError("Something went wrong during registration");
        }
      } catch (error) {
        console.error("Error during registration:", error);
        setError("User already exists");
      } finally {
        // Reset loading state outside the finally block
      }
      setLoading(false);
    }
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <div>SignUp</div>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogTitle>
          <div className="text-2xl text-left flex items-center justify-between ">
            SignUp
            <AlertDialogCancel>
              <X className="cursor-pointer" />
            </AlertDialogCancel>
          </div>
        </AlertDialogTitle>
        <AlertDialogDescription>
          <h1 className="text-sm">Welcome To Airbnb</h1>
        </AlertDialogDescription>
        {userCreated && (
          <div className="mx-auto bg-green-600 w-full text-center p-1 rounded-md text-white">
            User Created Successfully, try <span>logging</span> In
          </div>
        )}
        {error && (
          <div className="mx-auto bg-red-600 w-full text-center p-1 rounded-md text-white">
            {error}
          </div>
        )}
        <form onSubmit={(e) => submitForm(e)} className="space-y-1">
          <Label htmlFor="name">Name:</Label>
          <Input
            type="name"
            name="name"
            id="name"
            autoComplete="none"
            onChange={(e) => setBody({ ...body, name: e.target.value })}
            className="outline p-2 rounded-lg outline-zinc-200"
          />
          <Label htmlFor="email">Email:</Label>
          <Input
            type="email"
            name="email"
            id="email"
            autoComplete="none"
            onChange={(e) => setBody({ ...body, email: e.target.value })}
            className="outline p-2 rounded-lg outline-zinc-200"
          />
          <Label htmlFor="password">Password:</Label>
          <Input
            type="password"
            name="password"
            id="password"
            onChange={(e) => setBody({ ...body, password: e.target.value })}
            className="outline p-2 rounded-lg outline-zinc-200"
          />
          <Label htmlFor="confirmPassword">Confirm Password:</Label>
          <Input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            onChange={(e) =>
              setBody({ ...body, confirmPassword: e.target.value })
            }
            className="outline p-2 rounded-lg outline-zinc-200"
          />
          {loading ? (
            <Button disabled type="submit" className="w-full">
              Register
            </Button>
          ) : (
            <Button type="submit" className="w-full">
              Register
            </Button>
          )}
        </form>
        <div className="m-auto">OR</div>
        <div className="flex flex-col text-center w-full ">
          <div className="flex flex-col gap-2">
            {/* <Button variant="outline" className="p-2 border rounded-lg">
              <Image
                className="w-5 mr-2"
                src="/images/google.png"
                alt=""
                width={2}
                height={2}
              />
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

export default SignUp;
