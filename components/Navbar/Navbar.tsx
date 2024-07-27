"use client";
import { getResumeData } from "@/sanity/lib/api";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
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

  {
    name: "Resume",
    href: "/docs/Somadina_Eze.pdf",
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const [myResumeURL, setResumeURL] = useState("/docs/Somadina_Eze.pdf");

  useEffect(() => {
    const getResumeUrl = async () => {
      const resume = await getResumeData();
      if (resume?.resumeUrl) {
        setResumeURL(resume.resumeUrl);
      }
    };
    getResumeUrl();
  }, []);

  return (
    <div className="w-full md:flex items-center justify-between py-1 px-4 md:px-6 md:py-3 divbg rounded-full text-sm md:text-lg">
      <h3 className="hidden md:block">Somadina&apos;s Portfolio</h3>

      <ul className="flex items-center justify-between w-full md:w-[70%]">
        {navLinks.map(({ href, name }, index) => (
          <li
            key={index}
            className={`hover:text-white ${pathname === href ? "dark:text-blue" : "dark:text-gray-100"}`}
          >
            <a
              href={name === "Resume" ? myResumeURL : href}
              target={`${name === "Resume" ? "_blank" : "_parent"}`}
            >
              {name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
