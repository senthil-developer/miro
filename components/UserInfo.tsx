"use client";
import React from "react";
import { useUser, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { SignInButton } from "@clerk/nextjs";

const UserInfo = ({
  redirectUrl,
  children,
}: {
  redirectUrl: string;
  children?: React.ReactNode;
}) => {
  const { user } = useUser();
  return !user ? (
    <SignInButton mode="modal" redirectUrl={redirectUrl}>
      <button className=" hover:opacity-90 rounded-2xl  text-white font-semibold bg-purple-400 py-1 text-center px-3">
        {redirectUrl === "/" ? "Login" : "Create Board"}
      </button>
    </SignInButton>
  ) : children ? (
    <>{children}</>
  ) : (
    <UserButton />
  );
};

export default UserInfo;
