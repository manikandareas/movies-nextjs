"use client";
import { asideMenus, headerLists } from "@/common/mock/header";
import { AlignJustify } from "lucide-react";
import { ModeToggle } from "../ui/toggle-theme";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useHeader } from "./header.hook";

const AppHeader = () => {
  const { isAside, setIsAside } = useHeader();
  return (
    <>
      <header className="md:hidden fixed w-screen z-10 ">
        <nav className="w-full p-4 h-14 flex gap-4 items-center">
          <button onClick={() => setIsAside(!isAside)}>
            <AlignJustify />
          </button>
          <h1 className="font-extrabold text-2xl">
            Logo<span className="text-red-600">Film</span>
          </h1>
        </nav>
        <aside
          className={`min-h-screen w-[13.2rem] bg-primary-foreground absolute top-0 left-0 transition-all ease-in flex flex-col p-6 border border-right dark:border-none border-inherit ${
            !isAside ? "-translate-x-52" : "translate-x-0"
          }`}
        >
          <div className={`w-full`}>
            <button
              onClick={() => setIsAside(!isAside)}
              className="flex justify-end items-end w-full"
            >
              <AlignJustify
                className={`transition-all ease-in ${
                  isAside ? "rotate-90" : "rotate-0"
                }`}
              />
            </button>
          </div>
          <div className="w-full grid place-items-center">
            <h1 className="font-extrabold text-2xl">
              Logo<span className="text-red-600">Film</span>
            </h1>
          </div>

          {asideMenus.map((aside, idx) => (
            <ul key={idx} className="flex flex-col w-full gap-8">
              <li className="text-xl text-start uppercase mt-8">
                {aside.name}
              </li>
              {aside.lists.map((list, i) => (
                <li key={i} className="w-full">
                  {list.name === "theme mode" ? (
                    <list.icon />
                  ) : (
                    <Link
                      href={list.path}
                      className="flex gap-3 uppercase items-center"
                    >
                      <list.icon /> {list.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          ))}
        </aside>
      </header>
      <header className="hidden md:block fixed w-screen  z-10 transition-all ease-in">
        <nav className="w-full p-8 h-14 flex gap-8 items-center ">
          <h1 className="font-bold text-2xl">
            Logo<span className="text-red-600">Film</span>
          </h1>
          <ul className="flex gap-4 items-center">
            {headerLists.map((nav, i) => (
              <li key={i}>
                <Link
                  href={"#"}
                  className={`uppercase text-sm font-medium px-3 py-2 rounded-md active:bg-red-600 active:text-white ${
                    i === 0 && "bg-red-600"
                  }`}
                >
                  {nav}
                </Link>
              </li>
            ))}
            <ModeToggle />
          </ul>
        </nav>
      </header>
    </>
  );
};

export default AppHeader;
