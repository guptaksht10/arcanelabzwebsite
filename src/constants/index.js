import Logo from "../assets/images/image.png";
import HeroImg from "../assets/images/Hero-img.avif";
import AboutImg_3 from "../assets/images/about-3-img.avif";
import ComingSoon_1 from "../assets/images/ComingSoon-1.avif";
import ComingSoon_3 from "../assets/images/ComingSoon-3.avif";
import ComingSoon_4 from "../assets/images/ComingSoon-4.avif";
import Mobile from "../assets/images/mobile.png";
import Cloud from "../assets/images/cloud.png";
import Custom from "../assets/images/custom.png";
import UiUx from "../assets/images/ui-ux.png";
import Website from "../assets/images/website.png";
import Graphic from "../assets/images/graphic.png";

export const navItems = [
    { label: "About Us", href: "#about" },
    { label: "Our Work", href: "#our-work" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
];

export const servicesData = [
    {
        title: "Website Design & Development",
        description:
            "We build fast, modern websites optimized for performance & user experience.",
        icon: Website,
    },
    {
        title: "Mobile App Development for All Platforms",
        description:
            "We build native and hybrid apps that perform — intuitive UX meets powerful backend",
        icon: Mobile,
    },
    {
        title: "Robust Backend Systems & Cloud Infrastructure",
        description:
            "From scalable APIs to cloud deployments, we engineer secure backend systems that grow with your business.",
        icon: Cloud,
    },
    {
        title: "UI/UX Design & Prototyping",
        description:
            "From wireframes to wow — we craft delightful and functional user experiences.",
        icon: UiUx,
    },
    {
        title: "Graphic Design & Brand Identity",
        description:
            "We help brands stand out with visuals that speak louder than words — from logos to complete identity systems.",
        icon: Graphic,
    },
    {
        title: "Custom Software Solutions That Elevate Your Business",
        description:
            "Tailored software solutions built around your workflows, not the other way around.",
        icon: Custom,
    },
];

export { Logo, HeroImg, AboutImg_3, ComingSoon_1, ComingSoon_3, ComingSoon_4 };
