import Logo from '../assets/images/image.png'
import HeroImg from '../assets/images/Hero-img.png'
import AboutImg from '../assets/images/about-img.png'
import AboutImg_2 from '../assets/images/about-2-img.png'
import AboutImg_3 from '../assets/images/about-3-img.png'
import ComingSoon_1 from '../assets/images/ComingSoon-1.png'
import ComingSoon_2 from '../assets/images/ComingSoon-2.png'
import ComingSoon_3 from '../assets/images/ComingSoon-3.png'
import ComingSoon_4 from '../assets/images/ComingSoon-4.png'
import Mobile from '../assets/images/mobile.png'
import Cloud from '../assets/images/cloud.png'
import Custom from '../assets/images/custom.png'
import UiUx from '../assets/images/ui-ux.png'
import Website from '../assets/images/website.png'

export const navItems = [
    { label: 'About Us', href: '#about' },
    { label: 'Our Work', href: '#our-work' },
    { label: 'Services', href: '#services' },
    { label: 'Contact', href: '#contact' },
];

export const servicesData = [

    {
        title: "Website Design & Development",
        description: "We build fast, modern websites optimized for performance & user experience.",
        icon: Website
    },
    {
        title: "Mobile App Development for All Platforms",
        description: "Native/Hybrid apps with powerful UX and scalable architecture.",
        icon: Mobile
    },
    {
        title: "Robust Backend Systems & Cloud Infrastructure",
        description: "Native/Hybrid apps with powerful UX and scalable architecture.",
        icon: Cloud
    },
    {
        title: "UI/UX Design & Prototyping",
        description: "We craft clean, intuitive designs for seamless user experiences.",
        icon: UiUx
    },
    {
        title: "Custom Software Solutions That Elevate Your Business",
        description: "We develop bespoke software tailored to your requirements.",
        icon: Custom
    },

];

export { Logo, HeroImg, AboutImg, AboutImg_2, AboutImg_3, ComingSoon_1, ComingSoon_2, ComingSoon_3, ComingSoon_4 };