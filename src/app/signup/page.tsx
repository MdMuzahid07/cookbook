"use client"
import { useRouter } from "next/navigation";
import { useState } from "react";


const SignUp = () => {
    const router = useRouter();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        // You can replace this with actual authentication logic
        if (formData.name && formData.email && formData.password) {
            alert('SignUp successful!');
            router.push('/dashboard'); // Redirect to a dashboard or any other page
        } else {
            alert('Please fill in all fields');
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-yellow-50">
            <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-6 text-center text-orange-700">SignUp</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-medium text-orange-700">
                            Name
                        </label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full p-2 mt-1 border border-orange-300 rounded focus:outline-none focus:ring focus:ring-orange-200"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-orange-700">
                            Email
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full p-2 mt-1 border border-orange-300 rounded focus:outline-none focus:ring focus:ring-orange-200"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block text-sm font-medium text-orange-700">
                            Password
                        </label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full p-2 mt-1 border border-orange-300 rounded focus:outline-none focus:ring focus:ring-orange-200"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full p-2 bg-orange-600 text-white rounded hover:bg-orange-700 transition-colors"
                    >
                        SignUp
                    </button>
                </form>
            </div>
        </div>
    );
};

export default SignUp;
