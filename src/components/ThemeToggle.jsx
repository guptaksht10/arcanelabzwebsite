import { Moon, Sun } from "lucide-react";
import React, { useEffect, useState } from "react";

const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");
        if (storedTheme === "dark") {
            document.querySelector("html").classList.add("dark");
            setIsDarkMode(true);
        } else {
            document.querySelector("html").classList.remove("dark");
            setIsDarkMode(false);
        }
    }, []);

    const toggleTheme = () => {
        if (isDarkMode) {
            localStorage.setItem("theme", "light");
            document.querySelector("html").classList.remove("dark");
            setIsDarkMode(false);
        } else {
            localStorage.setItem("theme", "dark");
            document.querySelector("html").classList.add("dark");
            setIsDarkMode(true);
        }
    };

    return (
        <button onClick={toggleTheme}>
            {isDarkMode ? (
                <Sun size={20} className="rounded-full text-white" />
            ) : (
                <Moon size={20} className=" rounded-full text-black" />
            )}
        </button>
    );
};

export default ThemeToggle;
