/* eslint-disable @typescript-eslint/no-explicit-any */
import { commentInRecipe, createRecipe, deleteARecipe, getAllRecipe, rattingInRecipe, updateARecipe, UpDownVoteToggler } from "@/services/RecipeService";
import { useMutation, useQuery } from "@tanstack/react-query";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";


export const useCreateRecipe = () => {

    return useMutation<any, Error, FieldValues>(
        {
            mutationKey: ["CREATE_RECIPE"],
            mutationFn: async (recipeData) => await createRecipe(recipeData),
            onSuccess: () => {
                toast.success("recipe create successfully", { id: "recipeCreateNotificationToast" });
            },
            onError: (error: any) => {
                toast.error(error.message, { id: "recipeCreateNotificationToast" });
            },
        }
    );

};


export const useUpdateRecipe = () => {

    return useMutation<any>(
        {
            mutationKey: ["UPDATE_RECIPE"],
            mutationFn: async (updateInfo) => await updateARecipe(updateInfo),
            onSuccess: () => {
                toast.success("recipe updated successfully", { id: "recipeUpdateNotificationToast" });
            },
            onError: (error: any) => {
                toast.error(error.message, { id: "recipeUpdateNotificationToast" });
            },
        }
    );

};



export const useDeleteRecipe = () => {

    return useMutation<any>(
        {
            mutationKey: ["DELETE_RECIPE"],
            mutationFn: async (id) => await deleteARecipe(id),
            onSuccess: () => {
                toast.success("recipe deleted successfully", { id: "recipeDeleteNotificationToast" });
            },
            onError: (error: any) => {
                toast.error(error.message, { id: "recipeDeleteNotificationToast" });
            },
        }
    );

};



export const useGetAllRecipe = () => {
    return useQuery(
        {
            queryKey: ["GET_ALL_RECIPE"],
            queryFn: () => getAllRecipe()
        }
    );
};



export const useUpDownVote = () => {

    return useMutation<any>(
        {
            mutationKey: ["VOTE_RECIPE"],
            mutationFn: async (voteInfo) => await UpDownVoteToggler(voteInfo),
            onSuccess: () => {
                toast.success("saved...", { id: "recipeUpDownVoteNotificationToast" });
            },
            onError: (error: any) => {
                toast.error(error.message, { id: "recipeUpDownVoteNotificationToast" });
            },
        }
    );

};

export const useCommentInRecipe = () => {

    return useMutation<any>(
        {
            mutationKey: ["COMMENT_IN_RECIPE"],
            mutationFn: async (commentInfo) => await commentInRecipe(commentInfo),
            onSuccess: () => {
                toast.success("saved...", { id: "commentInRecipeToastId" });
            },
            onError: (error: any) => {
                toast.error(error.message, { id: "commentInRecipeToastId" });
            },
        }
    );

};


export const useRattingInRecipe = () => {

    return useMutation<any>(
        {
            mutationKey: ["RATING_IN_RECIPE"],
            mutationFn: async (ratingInfo) => await rattingInRecipe(ratingInfo),
            onSuccess: () => {
                toast.success("saved...", { id: "ratingInRecipeToastId" });
            },
            onError: (error: any) => {
                toast.error(error.message, { id: "ratingInRecipeToastId" });
            },
        }
    );

};