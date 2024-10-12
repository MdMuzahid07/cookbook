/* eslint-disable @typescript-eslint/no-explicit-any */
import { getSingleUserById, registerUser, resetPassword, resetPasswordRequest, updateUser, userLogin } from "@/services/AuthService";
import { useMutation, useQuery } from "@tanstack/react-query";
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

export const useUserProfileUpdate = () => {

    return useMutation<any, Error, FieldValues>(
        {
            mutationKey: ["USER_PROFILE_UPDATE"],
            mutationFn: async (userData) => await updateUser(userData),
            onSuccess: () => {
                toast.success("user profile info updated successfully", { id: "userProfileUpdateToastId" });
            },
            onError: (error) => {
                toast.error(error.message, { id: "userProfileUpdateToastId" });
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



export const useGetUserById = (id: string) => {
    return useQuery(
        { queryKey: ["GET_USER", id], queryFn: () => getSingleUserById(id) }

    );
};