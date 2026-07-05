import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(
    localStorage.getItem("saveTheme") || "light",
  );

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("saveTheme", theme);
  }, [theme]);

  const handleMode = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const handleLight = () => {
    if (theme === "dark") {
      setTheme("light");
    }
  };

  const handleDark = () => {
    if (theme === "light") {
      setTheme("dark");
    }
  };

  return (
    <>
      <ThemeContext.Provider
        value={{ theme, handleMode, handleLight, handleDark }}
      >
        {children}
      </ThemeContext.Provider>
    </>
  );
};
