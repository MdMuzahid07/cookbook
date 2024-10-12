/* eslint-disable @typescript-eslint/no-explicit-any */
import { getMembership } from "@/services/MembershipService";
import { useMutation } from "@tanstack/react-query";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";


export const useGetPremiumSubscription = () => {

    return useMutation<any, Error, FieldValues>(
        {
            mutationKey: ["PREMIUM_MEMBERSHIP"],
            mutationFn: async (userData) => await getMembership(userData),
            onSuccess: (data) => {
                toast.success("you will redirect to payment page in few seconds", { id: "premiumMembership2452453" });


                const paymentLink = data?.data?.paymentResponse?.payment_url;

                if (paymentLink) {
                    window.open(paymentLink, "_blank");
                }

                return data;
            },
            onError: (error: any) => {
                toast.error(error.message, { id: "premiumMembership2452453" });
            },
        }
    );
};