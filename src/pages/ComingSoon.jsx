import React from "react";
import logo from "../assets/image.png";
// import "../assets/fonts/HyperbuzzDemo.otf";

export default function ComingSoon() {
    return (
        <div className="min-h-screen bg-white text-black flex items-center justify-center px-6 font-sans">
            <div className="text-center max-w-xl">
                <img
                    src={logo}
                    alt="ArcaneLabz Logo"
                    className="w-28 h-28 mx-auto mb-6"
                />
                <h1 className="text-5xl mb-4 tracking-normal custom-font">
                    Arcane Labz
                </h1>
                <p className="text-xl mb-8">
                    We're working hard behind the scenes. Something magical is
                    coming soon.
                </p>

                {/* <form className="flex flex-col sm:flex-row items-center justify-center gap-3">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="px-4 py-2 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 w-full sm:w-auto"
                    />
                    <button
                        type="submit"
                        className="px-6 py-2 rounded-md bg-purple-600 hover:bg-purple-700 transition"
                    >
                        Notify Me
                    </button>
                </form> */}

                <p className="mt-8 text-sm text-black">
                    © 2025 ArcaneLabz. All rights reserved.
                </p>
            </div>
        </div>
    );
}
