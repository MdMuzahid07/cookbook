/* eslint-disable @typescript-eslint/no-explicit-any */
"use server"
import axiosInstance from "@/lib/AxiosInstance";
import { revalidateTag } from "next/cache";
import { FieldValues } from "react-hook-form";


export const createRecipe = async (userData: FieldValues) => {
    try {
        const { data } = await axiosInstance.post("/recipe/create-recipe", userData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });


        revalidateTag("recipes")


        return data;

    } catch (error: any) {
        throw new Error(error);
    }
};


export const updateARecipe = async ({ id, recipeData }: any) => {
    try {


        const { data } = await axiosInstance.patch(`/recipe/${id}`, { recipeData });

        revalidateTag("recipes")

        return data;

    } catch (error: any) {
        return error;
    }
};


export const deleteARecipe = async (id: any) => {
    try {
        const { data } = await axiosInstance.delete(`/recipe/${id}`);


        revalidateTag("recipes")


        return data;

    } catch (error: any) {
        throw new Error(error);
    }
};




export const getAllRecipe = async () => {
    try {

        const { data } = await axiosInstance.get(`/recipe`);


        return data;
    } catch (error: any) {
        throw new Error(error);
    }
};



export const UpDownVoteToggler = async ({ recipeId, voteType }: any) => {
    try {

        const { data } = await axiosInstance.post(`/vote/add-vote/${recipeId}`, { voteType });

        revalidateTag("recipes")

        return data;

    } catch (error: any) {
        throw new Error(error);
    }
};


export const commentInRecipe = async ({ id, comment }: any) => {
    try {

        const { data } = await axiosInstance.post(`/comment/create-comment/${id}`, { comment });

        revalidateTag("recipes")

        return data;

    } catch (error: any) {
        throw new Error(error);
    }
};


export const rattingInRecipe = async ({ id, rating }: any) => {
    try {

        const { data } = await axiosInstance.patch(`/recipe/rating/${id}`, { rating });

        revalidateTag("recipes")

        return data;

    } catch (error: any) {
        throw new Error(error);
    }
};
