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
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
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

            if (res.ok) {
                setForm({
                    name: "",
                    email: "",
                    phone: "",
                    service: "",
                    message: "",
                });
                toast.success("Message sent successfully! We'll get back to you soon.");
            } else {
                toast.error("Failed to send message. Please try again.");
            }
        } catch {
            toast.error("Something went wrong. Please try again later.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <Toaster position="top-right" />
            <section id="contact" className="max-w-7xl mx-auto px-4 py-20 text-white">
                <div className="grid md:grid-cols-2 gap-12 items-start">
                    {/* LEFT: Contact Form */}
                    <div>
                        <h2 className="text-h2 font-semibold font-dm-sans mb-6">Contact Us</h2>
                        <form className="space-y-4" onSubmit={handleSubmit}>
                            {[
                                { type: "text", name: "name", placeholder: "Name" },
                                { type: "email", name: "email", placeholder: "Email" },
                                { type: "tel", name: "phone", placeholder: "Phone No." },
                            ].map((field) => (
                                <div
                                    key={field.name}
                                    className="p-[1px] rounded-xl bg-gradient-to-r from-btn-gradient-start to-btn-gradient-end"
                                >
                                    <input
                                        {...field}
                                        value={form[field.name]}
                                        onChange={handleChange}
                                        required
                                        className="w-full p-4 rounded-xl bg-black text-white font-dm-sans text-link focus:outline-none"
                                    />
                                </div>
                            ))}

                            {/* Service Dropdown */}
                            <div className="p-[1px] rounded-xl bg-gradient-to-r from-btn-gradient-start to-btn-gradient-end">
                                <select
                                    name="service"
                                    value={form.service}
                                    onChange={handleChange}
                                    required
                                    className="w-full p-4 rounded-xl bg-black text-white font-dm-sans text-link focus:outline-none"
                                >
                                    <option value="">Select a service</option>
                                    {servicesData.map((service) => (
                                        <option key={service.title} value={service.title}>
                                            {service.title}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            {/* Message */}
                            <div className="p-[1px] rounded-xl bg-gradient-to-r from-btn-gradient-start to-btn-gradient-end">
                                <textarea
                                    name="message"
                                    value={form.message}
                                    onChange={handleChange}
                                    required
                                    placeholder="Message"
                                    rows="4"
                                    className="w-full p-4 rounded-xl bg-black text-white font-dm-sans text-link focus:outline-none"
                                />
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="px-8 py-3 rounded-full bg-gradient-to-r from-btn-gradient-start to-btn-gradient-end text-white font-semibold shadow hover:scale-105 transition"
                            >
                                {isSubmitting ? "Sending..." : "Submit"}
                            </button>
                        </form>
                    </div>

                    {/* RIGHT: Info Text */}
                    <div>
                        <h3 className="text-h3 font-dm-sans font-semibold mb-4">
                            Have an idea? A project? A problem to solve? Let’s make something remarkable together.
                        </h3>
                        <p className="font-dm-sans text-body dark:text-gray-300 mb-6">
                            We're excited to hear from you! Whether you have an idea, a project, or a problem to solve,
                            let’s make something remarkable together. Use the form on the left, send us an email, or give us a call.
                        </p>

                        <div className="flex items-center gap-3 mb-4">
                            <MdEmail className="text-xl dark:text-bg-light" />
                            <a href="mailto:team@arcanelabz.in" className="text-sm text-link underline">
                                team@arcanelabz.in
                            </a>
                        </div>

                        <div className="flex items-center gap-3">
                            <MdPhone className="text-xl dark:text-bg-light" />
                            <a href="tel:+917217689599" className="text-sm text-link underline">
                                +91 7217689599
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
