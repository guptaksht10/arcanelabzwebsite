import { MdEmail, MdPhone } from "react-icons/md";
import { servicesData } from "../constants";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });

            const data = await res.json();
            if (res.ok) {
                setForm({
                    name: "",
                    email: "",
                    phone: "",
                    service: "",
                    message: "",
                });
                toast.success(
                    "Message sent successfully! We'll get back to you soon.",
                    {
                        duration: 4000,
                        position: "top-right",
                    }
                );
            } else {
                toast.error("Failed to send message. Please try again.", {
                    duration: 4000,
                    position: "top-right",
                });
            }
        } catch (error) {
            toast.error("Something went wrong. Please try again later.", {
                duration: 4000,
                position: "top-right",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <Toaster />
            <section id="contact" className="max-w-7xl mx-auto px-4 py-20">
                <div className="grid md:grid-cols-2 gap-12 items-start">
                    {/* LEFT: Contact Form */}
                    <div>
                        <h2 className="text-h2 font-semibold font-dm-sans mb-6">
                            Contact Us
                        </h2>
                        <form className="space-y-4" onSubmit={handleSubmit}>
                            <input
                                type="text"
                                placeholder="Name"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                required
                                className="w-full p-4 rounded-xl font-dm-sans text-link border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                required
                                className="w-full p-4 rounded-xl font-dm-sans text-link border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                            <input
                                type="tel"
                                placeholder="Phone No."
                                name="phone"
                                value={form.phone}
                                onChange={handleChange}
                                required
                                className="w-full p-4 rounded-xl font-dm-sans text-link border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                            <label htmlFor="service" className="hidden">
                                Service
                            </label>
                            <select
                                name="service"
                                value={form.service}
                                onChange={handleChange}
                                className="w-full p-4 rounded-xl font-dm-sans text-link border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:text-bg-light"
                                required
                            >
                                <option value="" className="dark:text-bg-dark">
                                    Select a service
                                </option>
                                {servicesData.map((service) => (
                                    <option
                                        key={service.title}
                                        value={service.title}
                                        className="dark:text-bg-dark"
                                    >
                                        {service.title}
                                    </option>
                                ))}
                            </select>
                            <textarea
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                required
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
                            Have an idea? A project? A problem to solve? Let’s
                            make something remarkable together.
                        </h3>
                        <p className="text-gray-700 font-dm-sans text-body dark:text-gray-300 mb-6">
                            We're excited to hear from you! Whether you have an
                            idea, a project, or a problem to solve, let’s make
                            something remarkable together. Use the form on the
                            left, send us an email, or give us a call.
                        </p>

                        <div className="flex items-center gap-3 mb-4">
                            <MdEmail className="text-xl text-bg-dark dark:text-bg-light" />
                            <span className="text-sm text-gray-800 dark:text-gray-300">
                                :{" "}
                                <a
                                    href="mailto:team@arcanelabz.in"
                                    className="text-blue-600 text-link dark:text-bg-light underline"
                                >
                                    team@arcanelabz.in
                                </a>
                            </span>
                        </div>

                        <div className="flex items-center gap-3">
                            <MdPhone className="text-xl text-bg-dark dark:text-bg-light" />
                            <span className="text-sm text-gray-800  dark:text-gray-300">
                                :{" "}
                                <a
                                    href="tel:+918800484530"
                                    className="text-blue-600 text-link underline dark:text-bg-light"
                                >
                                    +91 8800484530
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
