/* eslint-disable @typescript-eslint/no-explicit-any */
import { adminAccountRegistration, blockUnblockUser, followUser, getSingleUserById, promoteDemoteUser, publishUbPublishRecipe, registerUser, resetPassword, resetPasswordRequest, unFollowUser, updateUser, userLogin } from "@/services/AuthService";
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


export const useAdminAccountRegistration = () => {

    return useMutation<any, Error, FieldValues>(
        {
            mutationKey: ["ADMIN_ACCOUNT_REGISTRATION"],
            mutationFn: async (userData) => await adminAccountRegistration(userData),
            onSuccess: () => {
                toast.success("admin registered successfully", { id: "userAccountRegistrationToastId" });
            },
            onError: (error) => {
                toast.error(error.message, { id: "userAccountRegistrationToastId" });
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



export const useGetUserById = (id: string | undefined) => {
    return useQuery({
        queryKey: ["users", id],
        queryFn: () => getSingleUserById(id!),
        enabled: !!id
    });
};


// user follow unFollow 

export const useFollowUser = () => {

    return useMutation<any, Error, FieldValues>(
        {
            mutationKey: ["USER_FOLLOW"],
            mutationFn: async (id) => await followUser(id),
            onSuccess: () => {
                toast.success("user followed successfully", { id: "userFollowToastId" });
            },
            onError: (error) => {
                toast.error(error.message, { id: "userFollowToastId" });
            },
        }
    );

};


export const useUnFollowUser = () => {

    return useMutation<any, Error, FieldValues>(
        {
            mutationKey: ["USER_UNFOLLOW"],
            mutationFn: async (id) => await unFollowUser(id),
            onSuccess: () => {
                toast.success("user un followed successfully", { id: "userUnFollowToastId" });
            },
            onError: (error) => {
                toast.error(error.message, { id: "userUnFollowToastId" });
            },
        }
    );

};



export const useRecipePublishUnPublish = () => {

    return useMutation<any, Error, FieldValues>(
        {
            mutationKey: ["RECIPE_PUBLISH_UNPUBLISH"],
            mutationFn: async ({ id }) => await publishUbPublishRecipe({ id }),
            onSuccess: () => {
                toast.success("changed recipe Status", { id: "recipePublishUnPublish" });
            },
            onError: (error) => {
                toast.error(error.message, { id: "recipePublishUnPublish" });
            },
        }
    );

};


export const useUserBlockUnBlock = () => {

    return useMutation<any, Error, FieldValues>(
        {
            mutationKey: ["USER_BLOCK_UNBLOCK"],
            mutationFn: async ({ id }) => await blockUnblockUser({ id }),
            onSuccess: () => {
                toast.success("changed user status", { id: "userBlockUnBlockToastId" });
            },
            onError: (error) => {
                toast.error(error.message, { id: "userBlockUnBlockToastId" });
            },
        }
    );

};


export const useUserPromoteDemote = () => {

    return useMutation<any, Error, FieldValues>(
        {
            mutationKey: ["USER_PROMOTE_DEMOTE"],
            mutationFn: async ({ id }) => await promoteDemoteUser({ id }),
            onSuccess: () => {
                toast.success("changed user role status", { id: "userPromoteDemoteToastId" });
            },
            onError: (error) => {
                toast.error(error.message, { id: "userPromoteDemoteToastId" });
            },
        }
    );

};