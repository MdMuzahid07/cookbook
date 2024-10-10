/* eslint-disable @typescript-eslint/no-explicit-any */
import { registerUser, userLogin } from "@/services/AuthService";
import { useMutation } from "@tanstack/react-query";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";


export const useUserRegistration = () => {

    return useMutation<any, Error, FieldValues>(
        {
            mutationKey: ["USER_REGISTRATION"],
            mutationFn: async (userData) => await registerUser(userData),
            onSuccess: () => {
                toast.success("user registered successfully", { id: "userRegisterToastId" });
            },
            onError: (error) => {
                toast.error(error.message, { id: "userRegisterToastId" });
            },
        }
    );

};


export const useUserLogin = () => {

    return useMutation<any, Error, FieldValues>(
        {
            mutationKey: ["USER_LOGIN"],
            mutationFn: async (userData) => await userLogin(userData),
            onSuccess: () => {
                toast.success("user login successfully", { id: "userSuccessfulLoginToastId" });
            },
            onError: (error) => {
                toast.error(error.message, { id: "userSuccessfulLoginToastId" });
            },
        }
    );
};