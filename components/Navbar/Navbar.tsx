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
    name: "Contact",
    href: "#contact",
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
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const currentScroll =
  //       window.pageYOffset || document.documentElement.scrollTop;
  //     if (currentScroll > lastScrollTop) {
  //       // Scrolling down
  //       setShowNavbar(false);
  //     } else {
  //       // Scrolling up
  //       setShowNavbar(true);
  //     }
  //     setLastScrollTop(currentScroll <= 0 ? 0 : currentScroll);
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, [lastScrollTop]);

  // Handle resume fetch from sanity
  useEffect(() => {
    let isMounted = true;

    const getResumeUrl = async () => {
      try {
        const resume = await getResumeData();
        if (isMounted && resume?.resumeUrl) {
          setResumeURL(`${resume.resumeUrl}/Somadina_Eze_Resume.pdf`);
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
      className={`md:flex items-center justify-between py-1 px-2 md:px-4 md:py-8 dark:bg-black  text-sm md:text-base transition-[0.3s] md:h-12`}
    >
      <Link href={"/"}>
        <h3 className="hidden md:block text-sm">Somadina&apos;s Portfolio</h3>
      </Link>

      <div ref={navRef} className="w-full md:w-[420px] text-left ">
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
          className={`flex-col md:flex-row md:flex ${isMenuOpen ? "flex" : "hidden"} md:w-full justify-between items-end `}
        >
          {navLinks.map(({ href, name }, index) => (
            <li
              key={index}
              className={`text-sm dark:hover:text-white hover:text-blue ${pathname === href ? "text-blue" : "text-gray-100"}`}
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
