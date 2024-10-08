"use client"
import React, { useState } from "react";

const ContactPage: React.FC = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
    };

    return (
        <section className="bg-gray-100 w-screen">
            <div className="bg-yellow-500 py-16">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-4xl md:text-6xl font-bold  mb-2">Get in Touch</h1>
                    <p className="text-xl">We value your input and can’t wait to hear from you!</p>
                </div>
            </div>

            <div className="bg-[url('https://res.cloudinary.com/dsdbqct3r/image/upload/v1728294406/2148517039_n093tf.jpg')] bg-cover bg-no-repeat bg-center w-full h-screen">
                <section className="bg-slate-950 bg-opacity-45 min-h-screen z-50 flex items-center justify-center px-4 py-8">
                    <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-3xl">
                        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Contact Us</h2>
                        <p className="text-center text-gray-600 mb-8">
                            Have any questions? Reach out to us, and we’ll get back to you as soon as possible.
                        </p>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                    placeholder="Your name"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                    placeholder="Your email"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                                    placeholder="Your message"
                                    rows={4}
                                    required
                                />
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    className="w-full bg-yellow-400 text-white py-2 rounded-lg shadow-lg hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-offset-2"
                                >
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                </section>
            </div>
        </section>
    );
};

export default ContactPage;
