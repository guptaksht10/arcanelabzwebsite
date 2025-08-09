import { HiOutlineArrowUpRight } from "react-icons/hi2";
import { FaHammer, FaBoxOpen, FaHeart } from "react-icons/fa";
import { GiSparkles } from "react-icons/gi";

const WhyUs = () => {
    const cards = [
        {
            icon: <FaHammer className="text-2xl text-white" />,
            title: "Build From Scratch. Scaled to Dominate",
            text: "No templates. No shortcuts. We engineer custom solutions that grow as fast as you do."
        },
        {
            icon: <GiSparkles className="text-2xl text-white" />,
            title: "Designs That Command Attention",
            text: "Our UI/UX doesn’t just look good — it drives action, builds trust, and leaves a lasting impression."
        },
        {
            icon: <FaBoxOpen className="text-2xl text-white" />,
            title: "Everything You Need. All in One Place",
            text: "From brand identity to full-stack infra — we own every pixel, every line of code, end-to-end."
        },
        {
            icon: <FaHeart className="text-2xl text-white" />,
            title: "We Don’t Work For You. We Work With You",
            text: "Think of us as your extended tech team — proactive, invested, and always pushing forward."
        }
    ];

    return (
        <section id="whyus" className="relative w-full max-w-screen-xl mx-auto py-50 px-6">
            {/* Heading */}
            <h2 className="text-6xl md:text-8xl font-extrabold font-dm-sans text-white mb-12 relative inline-block">
                Why Us?
                <span className="block h-[4px] w-full absolute -bottom-2 left-0"></span>
            </h2>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-auto mx-lg-1 pt-10">
                {cards.map((card, idx) => (
                    <WhyUsCard key={idx} {...card} />
                ))}
            </div>
        </section>
    );
};

const WhyUsCard = ({ icon, title, text }) => {
    return (
        <div className="bg-gray shadow-lg p-6 rounded-2xl relative overflow-hidden hover:scale-[1.02] transition-transform border border-white">
            <div className="flex items-start justify-between mb-10">
                {icon}
                <HiOutlineArrowUpRight className="text-white text-4xl" />
            </div>
            <h3 className="text-white text-3xl font-semibold mb-6">{title}</h3>
            <p className="text-gray-400 text-2xl mb-6">{text}</p>
        </div>
    );
};

export default WhyUs;
