/* eslint-disable @typescript-eslint/no-explicit-any */
"use server"

import axiosInstance from "@/lib/AxiosInstance"
import { cookies } from "next/headers";
import { FieldValues } from "react-hook-form";


export const registerUser = async (userData: FieldValues) => {
    try {
        const { data } = await axiosInstance.post("/user/register", userData);

        if (data.success) {
            cookies().set("accessToken", data?.data?.accessToken);
            cookies().set("refreshToken", data?.data?.refreshToken);
        }

        return data;

    } catch (error: any) {
        throw new Error(error);
    }
}


export const userLogin = async (userData: FieldValues) => {
    try {
        const { data } = await axiosInstance.post("/auth/login", userData);

        if (data.success) {
            cookies().set("accessToken", data?.data?.accessToken);
            cookies().set("refreshToken", data?.data?.refreshToken);
        }

        return data;
    } catch (error: any) {
        throw new Error(error);
    }
};