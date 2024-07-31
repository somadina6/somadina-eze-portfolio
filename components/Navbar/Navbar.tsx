"use client";
import { getResumeData } from "@/sanity/lib/api";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const navLinks = [
  {
    name: "Home",
    href: "/",
  },
  
  {
    name: "Projects",
    href: "#projects",
  },
  {
    name: "Experience",
    href: "/experience",
  },
  {
    name: "Contact",
    href: "/contact",
  },
  {
    name: "Resume",
    href: "/docs/Somadina_Eze.pdf", // default value, will be updated
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const [myResumeURL, setResumeURL] = useState("/docs/Somadina_Eze.pdf");
  const [isMenuOpen, setMenuOpen] = useState(false);

  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const getResumeUrl = async () => {
      const resume = await getResumeData();
      if (resume?.resumeUrl) {
        setResumeURL(resume.resumeUrl);
      }
    };
    getResumeUrl();
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [navRef]);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-full md:flex items-center justify-between py-1 px-2 md:px-4 md:py-2 divbg rounded-full text-sm md:text-base">
      <h3 className="hidden md:block">Somadina&apos;s Portfolio</h3>

      <div ref={navRef} className="md:w-[70%]">
        <button onClick={toggleMenu} className="focus:outline-none md:hidden">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            ></path>
          </svg>
        </button>

        <ul
          className={`flex-col md:flex-row md:flex ${isMenuOpen ? "flex" : "hidden"} md:w-full justify-between`}
        >
          {navLinks.map(({ href, name }, index) => (
            <li
              key={index}
              className={`hover:text-white ${pathname === href ? "dark:text-blue" : "dark:text-gray-100"}`}
            >
              <Link
                href={name === "Resume" ? myResumeURL : href}
                target={name === "Resume" ? "_blank" : "_self"}
                onClick={() => setMenuOpen(false)}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
