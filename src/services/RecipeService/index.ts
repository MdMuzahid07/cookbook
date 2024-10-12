/* eslint-disable @typescript-eslint/no-explicit-any */
"use server"
import axiosInstance from "@/lib/AxiosInstance";
import { FieldValues } from "react-hook-form";


export const createRecipe = async (userData: FieldValues) => {
    try {
        const { data } = await axiosInstance.post("/recipe/create-recipe", userData);
        console.log(data, "from createReciep Recipe service ")
        return data;

    } catch (error: any) {
        throw new Error(error);
    }
};