import React, { useState } from "react";
import { motion } from "framer-motion";
import { servicesData } from "../constants"; // Assuming this is where your data is
import toast, { Toaster } from "react-hot-toast";

// Import social media icons
import { FaInstagram, FaXTwitter, FaLinkedinIn, FaPhoneAlt, FaEnvelope, FaWhatsapp } from "react-icons/fa";

// Animation variants for the parent container
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Stagger children animations
    },
  },
};

// Animation variants for individual children
const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const socialIconVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

export default function ContactUs() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
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
          phone: "",
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
    <div>
      <Toaster position="top-right" />
      <motion.section
        id="contact"
        className="max-w-7xl mx-auto px-4 py-20 text-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
      >
        <motion.div variants={itemVariants}>
          <h2 className="text-5xl md:text-7xl font-bold font-dm-sans mb-4 text-center">
            Ready to Build <br /> Something Bold?
          </h2>
        </motion.div>
        <motion.p
          className="text-lg md:text-xl font-dm-sans mb-12 max-w-2xl mx-auto text-center"
          variants={itemVariants}
        >
          Let’s bring your vision to life. Reach out and we'll get back fast.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-12 items-start text-left">
          {/* LEFT: Contact Form */}
          <motion.div variants={itemVariants}>
            <form className="space-y-4" onSubmit={handleSubmit}>
              {[
                { type: "text", name: "name", placeholder: "Name" },
                { type: "tel", name: "phone", placeholder: "Phone No." },
              ].map((field) => (
                <div
                  key={field.name}
                  className="p-[1px] rounded-xl bg-gradient-to-r from-blue-500 to-purple-500"
                >
                  <input
                    {...field}
                    value={form[field.name]}
                    onChange={handleChange}
                    required
                    className="w-full p-4 rounded-xl bg-black text-white font-dm-sans text-link placeholder-gray-500 focus:outline-none"
                  />
                </div>
              ))}

              {/* Message */}
              <div className="p-[1px] rounded-xl bg-gradient-to-r from-blue-500 to-purple-500">
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  placeholder="Message"
                  rows="4"
                  className="w-full p-4 rounded-xl bg-black text-white font-dm-sans text-link placeholder-gray-500 focus:outline-none"
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold shadow hover:scale-105 transition-transform"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {isSubmitting ? "Sending..." : "Submit"}
              </motion.button>
            </form>
          </motion.div>

          {/* RIGHT: Socials */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl md:text-3xl font-dm-sans font-semibold mb-4">
              Socials
            </h3>
            <motion.div
              className="flex gap-4 items-center"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {[
                { icon: FaInstagram, href: "#" },
                { icon: FaXTwitter, href: "#" },
                { icon: FaLinkedinIn, href: "#" },
                { icon: FaPhoneAlt, href: "#" },
                { icon: FaEnvelope, href: "#" },
                { icon: FaWhatsapp, href: "#" },
              ].map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center border border-gray-800 hover:scale-110 transition-transform"
                    variants={socialIconVariants}
                    whileHover={{ scale: 1.2 }}
                  >
                    <Icon className="text-white text-xl" />
                  </motion.a>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}