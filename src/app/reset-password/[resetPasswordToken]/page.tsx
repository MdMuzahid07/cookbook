/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { useResetPassword } from "@/hooks/auth.hook";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const ResetPasswordPage = () => {
    const [seePassword, setSeePassword] = useState(false);
    const [password, setPassword] = useState("");
    const { mutate: resetPassData, isPending, isSuccess } = useResetPassword();
    const router = useRouter();
    const params = useParams();


    if (isPending) {
        toast.loading("saving...", { id: "userPasswordResetToastId" })
    }

    useEffect(() => {
        if (!isPending && isSuccess) {
            router.push("/login")
        }
    }, [isPending, isSuccess, router]);


    const handleSubmit = async () => {

        const resetPasswordData: any = await {
            token: params?.resetPasswordToken,
            password: password
        }

        resetPassData(resetPasswordData);
    };

    return (
        <div className="bg-[url('https://res.cloudinary.com/dsdbqct3r/image/upload/v1728369437/1812_fo8i2y.jpg')] bg-no-repeat bg-cover bg-bottom">
            <div className="min-h-screen flex items-center justify-center bg-slate-950 bg-opacity-45 px-4 xl:px-0">
                <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
                    <h2 className="text-2xl font-bold mb-6 text-yellow-500 text-left">Create new password</h2>
                    <div className="space-y-6">
                        <div >

                            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>

                            <div className="relative">
                                <input
                                    onChange={(e) => setPassword(e.target.value)}
                                    type={!seePassword ? "password" : "text"}
                                    name="password"
                                    value={password}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-yellow-400"
                                    placeholder="create a strong password"
                                />

                                <button onClick={() => setSeePassword(!seePassword)} className="absolute right-6 top-2 w-4 h-4">
                                    {
                                        !seePassword ? (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-eye"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" /><circle cx="12" cy="12" r="3" /></svg>) : (
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-eye-off"><path d="M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49" /><path d="M14.084 14.158a3 3 0 0 1-4.242-4.242" /><path d="M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143" /><path d="m2 2 20 20" /></svg>
                                        )
                                    }
                                </button>
                            </div>

                        </div>
                        <div >
                            <button
                                onClick={handleSubmit}
                                className="w-full bg-yellow-500 text-white py-2 rounded-full shadow-lg hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-offset-2"
                            >
                                Save Change
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResetPasswordPage;
