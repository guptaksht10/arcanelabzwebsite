import Spline from "@splinetool/react-spline";
import { workspaceData } from "../constants";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

const WorkspacePage = () => {
    const navigate = useNavigate();

    const handleScrollToContact = () => {
        navigate("/?scrollTo=contact");
    };
    return (
        <main className="bg-bg-dark">
            <Navbar />
            <main className="bg-bg-dark text-white overflow-x-hidden">
                {/* Header Section with Spline Background */}
                <section className="relative w-full h-[90vh] overflow-hidden">
                    {/* Spline Background */}
                    <div className="absolute inset-0 z-5 pointer-events-auto">
                        <iframe
                            src="https://my.spline.design/untitled-HAtvtahD4EPyDs4nKay65ZBx/"
                            frameBorder="0"
                            width="100%"
                            height="100%"
                            className="w-full h-full"
                            allow="autoplay; fullscreen"
                        ></iframe>
                    </div>

                    {/* Left-Aligned Content */}
                    <div className="relative z-5 h-full flex items-center px-4 sm:px-16 bg-black/40">
                        <div className="max-w-xl">
                            <h1 className="text-5xl sm:text-heading text-white mb-6 font-arcane">
                                Work Space
                            </h1>
                            <p className="text-white text-btn sm:text-xl mb-6 font-dm-sans">
                                Explore the ideas, visuals, and innovations that
                                have helped brands grow.
                            </p>
                            <button
                                onClick={handleScrollToContact}
                                className="inline-block px-6 py-3 text-white bg-gradient-to-r from-btn-gradient-start to-btn-gradient-end rounded-full font-semibold"
                            >
                                See What We Can Do For You
                            </button>
                        </div>
                    </div>
                </section>

                {/* Work Cards Section */}
                <section className="px-4 sm:px-8 py-16 max-w-screen-xl mx-auto">
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {workspaceData.map((project, index) => (
                            <div
                                key={index}
                                className="bg-[#1e1e1e] rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition"
                            >
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-52 object-cover"
                                />
                                <div className="p-4 flex justify-between items-center">
                                    <h3 className="font-medium text-white text-lg font-dm-sans">
                                        {project.title}
                                    </h3>
                                    <button className="text-white hover:text-red-400 transition text-xl">
                                        ♡
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
            <Footer />
        </main>
    );
};

export default WorkspacePage;
