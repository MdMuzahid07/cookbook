/* eslint-disable @typescript-eslint/no-explicit-any */
import { createRecipe } from "@/services/RecipeService";
import { useMutation } from "@tanstack/react-query";
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
