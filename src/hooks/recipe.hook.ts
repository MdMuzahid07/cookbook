/* eslint-disable @typescript-eslint/no-explicit-any */
import { createRecipe, deleteARecipe, getAllRecipe, updateARecipe } from "@/services/RecipeService";
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
        { queryKey: ["GET_ALL_RECIPE"], queryFn: () => getAllRecipe() }

    );
};

