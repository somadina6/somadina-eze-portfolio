"use client";
import { ThemeContext } from "@/context/themeContext";
import { useEffect, useState, useMemo } from "react";

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [componentRendered, setComponentRendered] = useState<boolean>(false);

  const themeFromStorage: boolean =
    typeof localStorage !== "undefined" && localStorage.getItem("soma-theme")
      ? JSON.parse(localStorage.getItem("soma-theme")!)
      : false;

  const [darkTheme, setDarkTheme] = useState<boolean>(themeFromStorage);

  useEffect(() => {
    setComponentRendered(true);
  }, []);

  const contextValue = useMemo(() => ({ darkTheme, setDarkTheme }), [darkTheme]);

  if (!componentRendered) return <></>;

  return (
    <ThemeContext.Provider value={contextValue}>
      <div className={`${darkTheme ? "dark" : ""} `}>
        <div className="dark:text-white dark:bg-black text-black w-screen">
          {children}
        </div>
      </div>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
