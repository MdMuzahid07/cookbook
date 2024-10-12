/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { useUser } from "@/context/user.provider";
import { useGetPremiumSubscription } from "@/hooks/membership.hook";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const GetMembership = () => {
    const [selectedOption, setSelectedOption] = useState("");
    const router = useRouter();
    const [price, setPrice] = useState(0);
    const { user } = useUser();
    const { mutate: subscribePremium, isPending, isSuccess } = useGetPremiumSubscription();

    const handleSelectChange = (e: any) => {
        const value = e.target.value;
        setSelectedOption(value);

        switch (value) {
            case "1 Month":
                setPrice(20);
                break;
            case "3 Months":
                setPrice(60);
                break;
            case "6 Months":
                setPrice(120);
                break;
            case "12 Months":
                setPrice(240);
                break;
            default:
                setPrice(0);
                break;
        }
    };

    if (isPending) {
        toast.loading("working...", { id: "premiumMembership2452453" });
    }


    useEffect(() => {
        if (!isPending && isSuccess) {
            router.push("/dashboard/my-profile")
        }
    }, [isPending, isSuccess, router]);


    const handleSubmit = () => {

        const userData = {
            userId: user?.id,
            subscription: selectedOption
        }

        subscribePremium(userData);
    };


    return (
        <section className="bg-yellow-500 py-20 min-h-screen">
            <section className="max-w-7xl mx-auto px-6">
                <h1 className="mb-14 text-2xl md:text-4xl lg:text-6xl font-bold">Get Membership for Premium Recipe access</h1>
                <section className="bg-white shadow-md rounded-2xl p-8 w-full max-w-md">
                    <label htmlFor="membership" className="block mb-4 text-lg font-semibold">
                        Choose Membership Duration:
                    </label>
                    <select
                        id="membership"
                        value={selectedOption}
                        onChange={handleSelectChange}
                        className="border border-gray-300 rounded-full p-2 mb-4 w-full"
                    >
                        <option value="">Select an option</option>
                        <option value="1 Month">1 Month</option>
                        <option value="3 Months">3 Months</option>
                        <option value="6 Months">6 Months</option>
                        <option value="12 Months">1 Year</option>
                    </select>
                    <div className="mb-4">
                        <span className="text-lg font-semibold">Total Price: ${price}</span>
                    </div>
                    <button
                        onClick={handleSubmit}
                        className="w-full bg-yellow-500 text-white font-bold py-2 rounded-full hover:bg-yellow-600 transition duration-300"
                    >
                        Confirm Membership
                    </button>
                </section>
            </section>
        </section>
    );
};

export default GetMembership;
