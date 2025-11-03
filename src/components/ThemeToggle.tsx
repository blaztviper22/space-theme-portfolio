import { Moon, Sun } from "lucide-react";
import { cn } from "../utilities/utils";
import { useTheme } from "../hooks/useTheme";

function ThemeToggle() {

    const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} className={cn("fixed max-sm:hidden top-24 right-24 z-50 p-2 rounded-full transition-colors duration-300",
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