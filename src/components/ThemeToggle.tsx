import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "../utilities/utils";

function ThemeToggle() {
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

  return (
    <button onClick={toggleTheme} className={cn("fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300",
        "focus:outline-none"
    )}>
        {" "}
        {isDarkMode ? (
            <Sun className="h-6 w-6 text-yellow-300" />
        ) : (
            <Moon className="h-6 w-6 text-blue-900" />
        )}
    </button>
  )
}

export default ThemeToggle