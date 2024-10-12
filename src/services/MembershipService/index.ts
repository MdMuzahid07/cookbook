"use server"
/* eslint-disable @typescript-eslint/no-explicit-any */
import axiosInstance from "@/lib/AxiosInstance";


export const getMembership = async (userData: any) => {
    try {
        const { data } = await axiosInstance.post("/subscription/create-subscription", userData);


        return data;

    } catch (error: any) {
        throw new Error(error);
    }
}