"use client";
import { Loader2, Send } from "lucide-react"
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactContent = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false)

    // Message Send Handler func
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        const formData = { name, email, message };
        try {
            const result = await emailjs.send(
                "service_an85omh",
                "template_inxbkhd",
                formData,
                "kHWlLokuiu3IOhPuj"
            );
            console.log("message sent:", result.text);
            toast.success("Message Sent Successfully!");
            setName("");
            setEmail("");
            setMessage("");
        } catch (error) {
            console.error("Failed to send message:", error);
            toast.error("Failed to send message. Please try again later.");
        }
    
        setLoading(false);
    };

    return (
        <>
            <div className="min-h-screen bg-[#020817] py-12 pt-24 relative">
                {' '}
                <div className="max-w-2xl mx-auto p-4 relative z-10">
                    {' '}
                    <h1 className="text-blue-500 text-3xl font-bold text-center">Let&apos;s Work Together
                    </h1>
                    <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center font-semibold">
                        I would like to know the final requirements of your project.
                        Please get in touch with me and share details about your project,
                        <span className="font-bold"> Feel Free To Conect With Me.</span>
                    </p>
                    <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Your Name"
                            className="rounded-lg border border-neutral-800 w-full p-4 bg-neutral-950 placeholder:text-neutral-600 text-white"
                            required
                        />
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Your email address"
                            className="rounded-lg border border-neutral-800 w-full p-4 bg-neutral-950 placeholder:text-neutral-700 text-white"
                            required
                        />
                        <textarea
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="Your message"
                            className="rounded-lg border border-neutral-800 w-full p-4 bg-neutral-950 placeholder:text-neutral-700 text-white"
                            rows={5}
                            required
                        ></textarea>
                        <button
                            type="submit"
                            disabled={loading}
                            className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded-lg text-white font-semibold focus:outline-none focus:ring-2 focus:ring-blue-800 focus:ring-offset-2"
                        >
                            
                            {!loading ? <span><Send className="inline pr-2" size={28} />Send Message</span> : <span className="flex justify-center items-center"><Loader2 className="size-6 animate-spin" /></span>} 
                        </button>
                        <ToastContainer theme='dark' position='bottom-center' />
                    </form>
                </div>
            </div>
        </>
    )
}

export default ContactContent