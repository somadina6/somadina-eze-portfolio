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
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  const navRef = useRef<HTMLDivElement>(null);

  // Handle navbar auto hide scrolling down
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll =
        window.pageYOffset || document.documentElement.scrollTop;
      if (currentScroll > lastScrollTop) {
        // Scrolling down
        setShowNavbar(false);
      } else {
        // Scrolling up
        setShowNavbar(true);
      }
      setLastScrollTop(currentScroll <= 0 ? 0 : currentScroll);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);

  // Handle resume fetch from sanity
  useEffect(() => {
    let isMounted = true;

    const getResumeUrl = async () => {
      try {
        const resume = await getResumeData();
        if (isMounted && resume?.resumeUrl) {
          setResumeURL(`${resume.resumeUrl}/Somadina_Eze_Resume.pdf?dl`);
        }
      } catch (error) {
        console.error("Failed to fetch resume data:", error);
      }
    };

    getResumeUrl();

    return () => {
      isMounted = false;
    };
  }, []);

  // Handle menu option on mobile
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
    <div
      className={`fixed w-[calc(100%-32px)] md:w-[calc(100%-96px)] md:flex items-center justify-between py-1 px-2 md:px-4 md:py-5 bg-black z-2 rounded- text-sm md:text-base transition-[0.3s] ${showNavbar ? "top-0" : "-top-[70px]"}`}
    >
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
                rel={name === "Resume" ? "noopener noreferrer" : ""}
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
