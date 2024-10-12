/* eslint-disable @typescript-eslint/no-explicit-any */
"use server"
import axiosInstance from "@/lib/AxiosInstance";
import { FieldValues } from "react-hook-form";


export const createRecipe = async (userData: FieldValues) => {
    try {
        const { data } = await axiosInstance.post("/recipe/create-recipe", userData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        return data;

    } catch (error: any) {
        throw new Error(error);
    }
};

export const deleteARecipe = async (id: any) => {
    try {
        console.log(id, "from delete a recipe, Recipe Service ===============");


        const { data } = await axiosInstance.delete(`/recipe/${id}`);
        return data;

    } catch (error: any) {
        throw new Error(error);
    }
};