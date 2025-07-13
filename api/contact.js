import nodemailer from 'nodemailer'

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    const { name, email, phone, service, message } = req.body;

    if (!name || !email || !phone || !service || !message) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    //Configure transporter with Gmail
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: import.meta.env.VITE_GMAIL_USER,
            pass: import.meta.env.VITE_GMAIL_PASS,
        }
    });

    const mailOptions = {
        from: email,
        to: import.meta.env.VITE_GMAIL_USER,
        subject: `New Inquiry for: ${service}`,
        html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:<strong/> ${name}</p>
            <p><strong>Email:<strong/> ${email}</p>
            <p><strong>Phone:<strong/> ${phone}</p>
            <p><strong>Service:<strong/> ${service}</p>
            <p><strong>Message:<strong/> ${message}</p>
        `
    }

    try {
        await transporter.sendMail(mailOptions);
        return res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Email sending Failed' });
    }

} 