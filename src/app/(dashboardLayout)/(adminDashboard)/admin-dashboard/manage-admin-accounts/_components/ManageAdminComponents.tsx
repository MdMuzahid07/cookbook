/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { useAdminAccountRegistration } from "@/hooks/auth.hook";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export interface TRegister {
    name: string;
    email: string;
    password: string;
    bio: string;
    avatar: File | null;
}

const ManageAdminAccountsComponents = () => {
    const { mutate: registration, isPending, isSuccess } = useAdminAccountRegistration();
    const router = useRouter();
    const [formData, setFormData] = useState<TRegister>({
        name: "",
        email: "",
        password: "",
        bio: "",
        avatar: null,
    });


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFormData({ ...formData, avatar: e.target.files[0] });
        }
    };


    if (isPending) {
        toast.loading("working...", { id: "userAccountRegistrationToastId" })
    }

    useEffect(() => {
        if (!isPending && isSuccess) {
            router.push("/admin-dashboard/manage-users")
        }
    }, [isPending, router, isSuccess]);

    const handleRegistration = (e: React.FormEvent) => {
        e.preventDefault();


        const userData = {
            name: formData?.name,
            email: formData?.email,
            password: formData?.password,
            bio: formData?.bio,
            role: "admin"
        }


        const userInfo = new FormData();
        userInfo.append("data", JSON.stringify(userData));

        if (formData.avatar) {
            userInfo.append("avatar", formData.avatar);
        }

        registration(userInfo as any);
    };

    return (
        <section className="min-h-screen flex items-center justify-center bg-yellow-500 px-4 xl:px-0">
            <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-2xl">
                <h2 className="text-2xl font-bold mb-6 text-yellow-500">Create Admin Account</h2>

                <form onSubmit={handleRegistration} className="space-y-6">
                    <section>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-yellow-400"
                            placeholder="Enter your name"
                        />
                    </section>

                    <section>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-yellow-400"
                            placeholder="Enter your email"
                        />
                    </section>

                    <section>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Bio</label>
                        <input
                            type="bio"
                            name="bio"
                            value={formData.bio}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-yellow-400"
                            placeholder="Your bio"
                        />
                    </section>


                    <section>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-yellow-400"
                            placeholder="Enter your password"
                        />
                    </section>

                    <section>
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
                    </section>


                    <section>
                        <button
                            type="submit"
                            className="w-full bg-yellow-500 text-white py-2 rounded-full shadow-lg hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-offset-2 text-lg font-bold"
                        >
                            Save
                        </button>
                    </section>
                </form>
            </div>
        </section>
    );
};

export default ManageAdminAccountsComponents;
