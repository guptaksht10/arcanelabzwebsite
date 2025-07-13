import nodemailer from 'nodemailer';

const contactHandler = async (req, res) => {
    const { name, email, phone, service, message } = req.body;

    if (!name || !email || !phone || !service || !message) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    const mailOptions = {
        from: process.env.GMAIL_USER,
        to: process.env.GMAIL_USER,
        replyTo: email,
        subject: `New Inquiry for: ${service}`,
        html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Service:</strong> ${service}</p>
            <p><strong>Message:</strong> ${message}</p>
        `
    }

    try {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_PASS,
            },
        })
        await transporter.sendMail(mailOptions);
        console.log(`✅ Email sent successfully to ${process.env.GMAIL_USER}!`);
        return res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
        console.error("❌ Email sending failed:", error);
        return res.status(500).json({ message: "Email sending Failed", error: error.toString() });
    }
};

export default contactHandler; 