import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import prisma from "@/prisma/db";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const alreadyUser = await prisma?.user.findUnique({
      where: {
        email: body.email,
      },
    });

    if (alreadyUser) {
      return NextResponse.json(
        {
          message: "User Already Exists",
        },
        { status: 409 }
      );
    }

    const hashedPass = await bcrypt.hash(body.password, 10);

    const user = await prisma?.user.create({
      data: {
        name: body.name,
        email: body.email,
        Password: hashedPass,
      },
    });

    if (user) {
      return NextResponse.json(
        {
          message: "User created successfully",
        },
        { status: 200 }
      );
    }

    return NextResponse.json(
      { message: "User creation failed" },
      { status: 400 }
    );
  } catch (error) {
    console.error("Error during user registration:", error);
    return NextResponse.json(
      { message: "Something went wrong during user registration", error },
      { status: 400 }
    );
  }
}
