/* eslint-disable @typescript-eslint/no-explicit-any */
import { registerUser, resetPassword, resetPasswordRequest, userLogin } from "@/services/AuthService";
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


export const usePasswordResetRequest = () => {

    return useMutation<any>(
        {
            mutationKey: ["RESET_PASSWORD_REQUEST"],
            mutationFn: async (userData) => await resetPasswordRequest(userData as any),
            onSuccess: () => {
                toast.success("we send you a magic link, please check your email", { id: "userResetPassRequestToastId" });
            },
            onError: (error) => {
                toast.error(error.message, { id: "userResetPassRequestToastId" });
            },
        }
    );
};


export const useResetPassword = () => {

    return useMutation<any>(
        {
            mutationKey: ["RESET_PASSWORD"],
            mutationFn: async (resetPasswordData) => await resetPassword(resetPasswordData),
            onSuccess: () => {
                toast.success("congratulation, you recover your account by resetting password", { id: "userPasswordResetToastId" });
            },
            onError: (error) => {
                toast.error(error.message, { id: "userPasswordResetToastId" });
            },
        }
    );
};