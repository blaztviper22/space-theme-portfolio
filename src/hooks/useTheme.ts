// src/hooks/useTheme.js
import { useEffect, useState } from "react";

export function useTheme() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
        // Check local storage for theme preference and accessing directly the html element to apply dark mode styles
        const storedTheme = localStorage.getItem("theme");  
        if (storedTheme === "dark") {
            setIsDarkMode(true);
            document.documentElement.classList.add("dark");
        } else {
            localStorage.setItem("theme", "light");
            setIsDarkMode(false);
        }
    }, []);

  const toggleTheme = () => {
        if (isDarkMode) {
            // removing custom styles in index.css (see .dark)
            document.documentElement.classList.remove("dark");
            // storing data in localStorage
            localStorage.setItem("theme", "light");
            setIsDarkMode(false);
        } else {
            // applying custom styles in index.css (see .dark)
            document.documentElement.classList.add("dark");
            // storing data in localStorage
            localStorage.setItem("theme", "dark");
            setIsDarkMode(true);
        }
    }

  return { isDarkMode, toggleTheme };
}