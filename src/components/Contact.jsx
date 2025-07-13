import { MdEmail, MdPhone } from "react-icons/md";
import { servicesData } from "../constants";
import { useState } from "react";

export default function Contact() {
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
        } else {
            console.log(data.message || "Failed to send message");
        }
    };

    return (
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
                        <select
                            name="service"
                            value={form.service}
                            onChange={handleChange}
                            className="w-full p-4 rounded-xl font-dm-sans text-link border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            required
                        >
                            <option value="" className="">
                                Select a service
                            </option>
                            {servicesData.map((service) => (
                                <option
                                    key={service.title}
                                    value={service.title}
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
                                href="mailto:arcanelabz.in@gmail.com"
                                className="text-blue-600 text-link dark:text-bg-light underline"
                            >
                                arcanelabz.in@gmail.com
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
    );
}
