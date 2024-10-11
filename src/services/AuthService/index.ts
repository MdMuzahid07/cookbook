/* eslint-disable @typescript-eslint/no-explicit-any */
"use server"

import axiosInstance from "@/lib/AxiosInstance"
import { jwtDecode } from "jwt-decode";
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

export const resetPasswordRequest = async (userData: FieldValues) => {
    try {
        const { data } = await axiosInstance.post("/auth/reset-password", userData);

        return data;
    } catch (error: any) {
        throw new Error(error);
    }
};

export const resetPassword = async (resetPasswordData: any) => {
    try {

        const { password, token } = resetPasswordData;

        const { data } = await axiosInstance.post(`/auth/reset-password/${token}`, { password });

        return data;
    } catch (error: any) {
        throw new Error(error);
    }
};



export const getCurrentUser = async () => {
    const accessToken = cookies().get("accessToken")?.value;

    let decodedToken = null;

    if (accessToken) {
        decodedToken = await jwtDecode(accessToken);

        return {
            id: decodedToken?.id,
            name: decodedToken?.name,
            email: decodedToken?.email,
            role: decodedToken?.role,
            avatar: decodedToken?.avatar,
        }
    };

    return decodedToken;
};


export const logOut = () => {
    cookies().delete("accessToken");
    cookies().delete("refreshToken");
};