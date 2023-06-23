"use client";

import Link from "next/link";
import React from "react";
// import styles from "./navbar.module.css";
// import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
// import { signOut, useSession } from "next-auth/react";
const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Portfolio",
    url: "/portfolio",
  },
  {
    id: 3,
    title: "Blog",
    url: "/blog",
  },
  {
    id: 4,
    title: "About",
    url: "/about",
  },
  {
    id: 5,
    title: "Contact",
    url: "/contact",
  },
  {
    id: 6,
    title: "Dashboard",
    url: "/dashboard",
  },
];

export default function Navbar() {
  return (
    <nav className="h-28 flex justify-between items-start ">
      <Link href="/" className="font-bold pt-1 text-xl">
        lamamia
      </Link>
      <div className="flex justify-between">
        {links.map((eachLink) => {
          return (
            <Link className="hover:bg-white/10 rounded-full p-2 duration-200 " key={eachLink.id} href={eachLink.url}>
              {eachLink.title}
            </Link>
          );
        })}
        <button
         onClick={() => console.log("log out")}
         className="bg-white/20 rounded-full px-2 "
         >Log out</button>
      </div>
    </nav>
  );
}
