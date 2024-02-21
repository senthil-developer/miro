"use client";

import { ZoomParallax } from "@/components/ZoomParallax";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import Link from "next/link";
import Image from "next/image";
import UserInfo from "@/components/UserInfo";
import InfiniteScroll from "@/components/InfiniteScroll";
import { SignInButton, useUser } from "@clerk/nextjs";
import Section from "@/components/Section";
import { Metadata } from "next";
import FooterMainPage from "@/components/Footer";

export const HomePage = () => {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  const user = useUser();
  return (
    <main className="h-full w-full bg-[#fbf7ee]">
      <section className="w-full flex items-center justify-center mx-auto py-2 fixed top-0 bg-white z-10 border-[#cccbc8] border-b">
        <ul className=" flex justify-between w-[80%] ">
          <li>
            <Link href="/" className="flex gap-2 items-center">
              <div className="relative w-[50px] h-[50px]">
                <Image src={"/logo.svg"} alt="logo" fill />
              </div>
              MIRO
            </Link>
          </li>
          <li className="flex gap-4 items-center">
            <UserInfo redirectUrl="/board">
              <Link href="/board" className="border-2 p-2 rounded-xl">
                Create Board
              </Link>
            </UserInfo>
            <UserInfo redirectUrl="/" />
          </li>
        </ul>
      </section>

      <section className="w-full flex-col-center gap-7 mt-48 mb-30 overflow-x-hidden">
        <div className="flex-col-center text-center gap-5">
          <h1 className="text-[32px] md:text-[44px] lg:text-[56px]">
            Enter with a dream.
            <br /> Exit with the next big thing.
          </h1>
          <p className="text-lg w-[85%] lg:w-full">
            Build, iterate, and design faster with Miro - the visual workspace
            for innovation.
          </p>
        </div>
        <div className="flex-col-center gap-5 w-[348px]">
          {!user ? (
            <div className="w-full bg-blue-600 text-center text-white py-3 rounded-lg">
              <SignInButton redirectUrl="/" mode="modal">
                Sign up free
              </SignInButton>
            </div>
          ) : (
            <Link
              href="/board"
              className="border-2 p-2 rounded-xl bg-blue-500 text-white px-3"
            >
              Create Board
            </Link>
          )}
          <p className="text-sm text-nowrap mt-2">
            Keep work and life separate by using your work email
          </p>
        </div>
        <div className="text-center my-7 flex-col-center gap-4 ">
          <p className="text-lg ">Rated 4.8 out of 5,134+ G2 reviews</p>
          <InfiniteScroll />
        </div>
      </section>
      <section>
        <ZoomParallax />
      </section>
      <section className="flex-col-center gap-5 text-center mt-5">
        <h2 className="text-[24px] md:text-[32px] lg:text-[44px">
          Next big thing? No big deal. <br /> Three simple keys to the future.
        </h2>
        <Section />
      </section>
      <footer className="w-full flex-col-center gap-3 overflow-x-hidden mt-5">
        <FooterMainPage />
      </footer>
    </main>
  );
};
