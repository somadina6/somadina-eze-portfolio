"use client";
import { usePathname } from "next/navigation";
import React from "react";
// import "./navbar.css";

const navLinks = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Experience",
    href: "/experience",
  },
  {
    name: "Projects",
    href: "#projects",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

export default function Navbar() {
  const pathname = usePathname();
  return (
    <div className="w-full flex items-center justify-between py-1 px-4 md:px-6 md:py-3 divbg rounded-full text-sm md:text-lg">
      <h3>Somadina&apos;s Portfolio</h3>

      <ul className="flex items-center justify-between w-2/5">
        {navLinks.map(({ href, name }, index) => (
          <li
            key={index}
            className={`hover:text-white ${pathname === href ? "dark:text-blue" : "dark:text-gray-100"}`}
          >
            <a href={href}>{name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
