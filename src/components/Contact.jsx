import { MdEmail, MdPhone } from "react-icons/md";

export default function Contact() {
    return (
        <section id="contact" className="max-w-7xl mx-auto px-4 py-20">
            <div className="grid md:grid-cols-2 gap-12 items-start">
                {/* LEFT: Contact Form */}
                <div>
                    <h2 className="text-h2 font-semibold font-dm-sans mb-6">
                        Contact Us
                    </h2>
                    <form className="space-y-4">
                        <input
                            type="text"
                            placeholder="Name"
                            className="w-full p-4 rounded-xl font-dm-sans text-body border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full p-4 rounded-xl font-dm-sans text-link border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                        <input
                            type="tel"
                            placeholder="Phone No."
                            className="w-full p-4 rounded-xl font-dm-sans text-link border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                        <input
                            type="text"
                            placeholder="Service Name"
                            className="w-full p-4 rounded-xl font-dm-sans text-link border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                        <textarea
                            placeholder="Message"
                            rows="4"
                            className="w-full p-4 rounded-xl font-dm-sans text-link border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                        <button
                            type="submit"
                            className="w-fit px-8 py-3 rounded-full bg-linear-to-r from-btn-gradient-start to-btn-gradient-end text-white font-semibold shadow hover:scale-105 transition"
                        >
                            Submit
                        </button>
                    </form>
                </div>

                {/* RIGHT: Info Text */}
                <div>
                    <h3 className="text-h3 font-dm-sans font-semibold lg:mt-22 mb-4">
                        Have an idea? A project? A problem to solve? Let’s make
                        something remarkable together.
                    </h3>
                    <p className="text-gray-700 font-dm-sans text-body dark:text-gray-300 mb-6">
                        We're excited to hear from you! Whether you have an
                        idea, a project, or a problem to solve, let’s make
                        something remarkable together. Use the form on the left,
                        send us an email, or give us a call.
                    </p>

                    <div className="flex items-center gap-3 mb-4">
                        <MdEmail className="text-xl text-bg-dark dark:text-bg-light" />
                        <span className="text-sm text-gray-800 dark:text-gray-300">
                            :{" "}
                            <a
                                href="mailto:arcanelabs@digitalsoution.com"
                                className="text-blue-600 text-link dark:text-bg-light underline"
                            >
                                arcanelabs@digitalsoution.com
                            </a>
                        </span>
                    </div>

                    <div className="flex items-center gap-3">
                        <MdPhone className="text-xl text-bg-dark dark:text-bg-light" />
                        <span className="text-sm text-gray-800  dark:text-gray-300">
                            :{" "}
                            <a
                                href="tel:+911234567890"
                                className="text-blue-600 text-link underline dark:text-bg-light"
                            >
                                +91 12345 67890
                            </a>
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}
