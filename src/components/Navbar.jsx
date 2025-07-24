import React, { useState } from "react";
import { Logo } from "../constants";
import { navItems } from "../constants";
import ThemeToggle from "./ThemeToggle";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 backdrop-blur-lg bg-nav/70 py-3 border-b border-gray-700">
            <div className="max-w-7xl mx-auto px-5 flex items-center justify-between">
                {/* Logo */}
                <a href="#" className="flex items-center gap-2">
                    <img src={Logo} className="w-12 h-12" alt="logo" />
                    <span className="font-arcane sm:text-2xl lg:text-logo text-white">
                        ARCANE LABZ
                    </span>
                </a>

                {/* Desktop nav */}
                <ul className="hidden lg:flex items-center gap-10 font-dm-sans font-semibold text-link text-white">
                    {navItems.map((item) => (
                        <li
                            key={item.label}
                            className="hover:text-btn-gradient-start transition cursor-pointer"
                        >
                            <a href={item.href}>{item.label}</a>
                        </li>
                    ))}
                    {/* <ThemeToggle /> */}
                </ul>

                {/* Mobile menu toggle */}
                <div className="lg:hidden flex items-center gap-4">
                    {/* <ThemeToggle /> */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-2xl text-white"
                    >
                        {isOpen ? <HiX /> : <HiMenu />}
                    </button>
                </div>
            </div>

            {/* Mobile nav menu */}
            {isOpen && (
                <div className="md:hidden px-5 pt-4 pb-6 space-y-4 bg-bg-dark shadow-lg rounded-b-xl">
                    {navItems.map((item) => (
                        <a
                            key={item.label}
                            href={item.href}
                            className="block text-base font-medium font-dm-sans text-white hover:text-btn-gradient-start transition"
                        >
                            {item.label}
                        </a>
                    ))}
                </div>
            )}
        </nav>
    );
};

export default Navbar;
