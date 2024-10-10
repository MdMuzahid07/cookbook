"use client"
import { useUserLogin } from "@/hooks/auth.hook";
import Link from "next/link";
import { useState } from "react";
import { toast } from "sonner";

interface TLoginData {
    email: string;
    password: string;
}

const LoginPage = () => {
    const { mutate: login, isPending } = useUserLogin();

    const [loginData, setLoginData] = useState<TLoginData>({
        email: "",
        password: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setLoginData({ ...loginData, [name]: value });
    };


    if (isPending) {
        toast.loading("working...", { id: "userSuccessfulLoginToastId" })
    }


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        login(loginData);
    };

    return (
        <div className="bg-[url('https://res.cloudinary.com/dsdbqct3r/image/upload/f_auto,q_auto/m9jrhijxe1mjyocjlkwm')] bg-no-repeat bg-cover bg-bottom">
            <div className="min-h-screen flex items-center justify-center bg-slate-950 bg-opacity-45 px-4 xl:px-0">
                <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
                    <h2 className="text-2xl font-bold mb-6 text-yellow-500 text-center">Login your Account</h2>

                    <form onSubmit={handleSubmit} className="space-y-6">

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={loginData.email}
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
                                value={loginData.password}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-yellow-400"
                                placeholder="Enter your password"
                            />
                        </div>

                        <div>
                            <p>New in CookBook?  <Link href="/signup"><span className="font-bold text-yellow-500">Register Account</span></Link> </p>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="w-full bg-yellow-500 text-white py-2 rounded-full shadow-lg hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-offset-2"
                            >
                                Login
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
