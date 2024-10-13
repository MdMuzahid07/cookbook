/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { useUser } from "@/context/user.provider";
import { usePasswordResetRequest, useUserLogin } from "@/hooks/auth.hook";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";

interface TLoginData {
    email: string;
    password: string;
}

const LoginComponent = () => {
    const [isResetPass, setIsResetPass] = useState(false);
    const [resetEmail, setResetEmail] = useState("");
    const searchParams = useSearchParams();
    const redirect = searchParams?.get("redirect");
    const router = useRouter();
    const { setIsLoading: userLoading } = useUser();
    const { mutate: login, isPending, isSuccess } = useUserLogin();
    const { mutate: resetPassRequest, isPending: isReqPending } = usePasswordResetRequest()

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

    if (isReqPending) {
        toast.loading("sending...", { id: "userResetPassRequestToastId" })
    }


    useEffect(() => {
        if (!isPending && isSuccess) {
            if (redirect) {
                router.push(redirect)
            } else {
                router.push("/")
            }
        }
    }, [isPending, isSuccess, redirect, router]);


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        login(loginData);
        userLoading(true)
    };


    const handleReset = () => {
        const accountEmailInfo: any = {
            email: resetEmail
        }
        resetPassRequest(accountEmailInfo);
    };

    return (
        <div className="bg-[url('https://res.cloudinary.com/dsdbqct3r/image/upload/f_auto,q_auto/m9jrhijxe1mjyocjlkwm')] bg-no-repeat bg-cover bg-bottom">
            <div className="min-h-screen flex items-center justify-center bg-slate-950 bg-opacity-45 px-4 xl:px-0">
                <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
                    <h2 className="text-2xl font-bold mb-6 text-yellow-500 text-center">Login your Account</h2>

                    {
                        !isResetPass && <form onSubmit={handleSubmit} className="space-y-6">

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

                            <div >
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

                            <div >
                                <button
                                    type="submit"
                                    className="w-full bg-yellow-500 text-white py-2 rounded-full shadow-lg hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-offset-2"
                                >
                                    Login
                                </button>
                            </div>
                        </form>
                    }
                    {
                        isResetPass && (
                            <>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Add your account email address
                                        <br />
                                        <span className="text-xs">We will sent you a magic link</span>

                                    </label>

                                    <input
                                        type="email"
                                        name="email"
                                        onChange={(e) => setResetEmail(e.target.value)}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 mt-3 focus:ring-yellow-400"
                                        placeholder="Enter your email"
                                    />

                                </div>
                                <Button onClick={handleReset} className=" mt-4 w-full rounded-full bg-slate-300 text-lg">
                                    Send link
                                </Button>
                            </>
                        )
                    }
                    <div className="pt-6">
                        <p className="text-sm">{!isResetPass ? "Forget password?" : "Or login with password"}  <button onClick={() => setIsResetPass(!isResetPass)} className="text-red-500 ">
                            {
                                !isResetPass ? "Reset" : "Login"
                            }</button> </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginComponent;

