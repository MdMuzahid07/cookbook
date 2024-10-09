"use client"
import Link from "next/link";
import { useState } from "react";

// Define the form data type
interface FormData {
    name: string;
    email: string;
    password: string;
    profileImage: File | null;
}

const RegisterPage = () => {
    // Set up form state with typed FormData
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        password: "",
        profileImage: null,
    });

    // Handle input changes for text fields
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Handle file input changes for profile image
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFormData({ ...formData, profileImage: e.target.files[0] });
        }
    };

    // Handle form submission
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle registration logic here (e.g., submit form data)
        console.log("Form submitted:", formData);
    };

    return (
        <div className="bg-[url('https://res.cloudinary.com/dsdbqct3r/image/upload/f_auto,q_auto/eh393zi22wroqa1u4zon')] bg-no-repeat bg-cover bg-bottom">
            <div className="min-h-screen flex items-center justify-center bg-slate-950 bg-opacity-45 px-4 xl:px-0">
                <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
                    <h2 className="text-2xl font-bold mb-6 text-yellow-500 text-center">Register Account</h2>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-yellow-400"
                                placeholder="Enter your name"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-yellow-400"
                                placeholder="Enter your email"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-yellow-400"
                                placeholder="Enter your password"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Profile Image</label>
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleFileChange}
                                className="w-full text-sm text-gray-500
                         file:mr-4 file:py-2 file:px-4
                         file:rounded-full file:border-0
                         file:text-sm file:font-semibold
                         file:bg-gray-100 file:text-gray-800
                         hover:file:bg-gray-200"
                            />
                        </div>

                        <div>
                            <p>Already have an account?  <Link href="/login"><span className="font-bold text-yellow-500">Login</span></Link> </p>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="w-full bg-yellow-500 text-white py-2 rounded-full shadow-lg hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-offset-2"
                            >
                                Register
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;
