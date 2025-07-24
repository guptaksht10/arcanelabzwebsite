import {
    FaFacebookF,
    FaInstagram,
    FaXTwitter,
    FaLinkedinIn,
} from "react-icons/fa6";

export default function Footer() {
    return (
        <footer className="w-full bg-nav text-white py-6 px-4">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
                {/* Left */}
                <p className="text-sm">&copy; 2025 All rights reserved.</p>

                {/* Center
                <div className="flex flex-wrap gap-6 text-sm justify-center">
                    <a href="#" className="hover:underline">
                        Privacy Policy
                    </a>
                    <a href="#" className="hover:underline">
                        Terms of Service
                    </a>
                    <a href="#" className="hover:underline">
                        Cookies Settings
                    </a>
                </div> */}

                {/* Right */}
                <div className="flex gap-4 text-lg">
                    {/* <a href="#" className="hover:text-gray-200">
                        <FaFacebookF />
                    </a> */}
                    <a
                        href="https://www.instagram.com/arcane.labz/"
                        target="_blank"
                        className="hover:text-gray-200"
                    >
                        <FaInstagram />
                    </a>
                    <a
                        href="https://x.com/ArcaneLabz"
                        target="_blank"
                        className="hover:text-gray-200"
                    >
                        <FaXTwitter />
                    </a>
                    <a
                        href="https://www.linkedin.com/company/arcane-labz"
                        target="_blank"
                        className="hover:text-gray-200"
                    >
                        <FaLinkedinIn />
                    </a>
                </div>
            </div>
        </footer>
    );
}
