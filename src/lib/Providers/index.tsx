"use client"
import UserProvider from "@/content/user.provider";
import { NextUIProvider } from "@nextui-org/react"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "sonner"

const queryClient = new QueryClient();

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <QueryClientProvider client={queryClient}>
            <NextUIProvider>
                <UserProvider>
                    <Toaster />
                    {children}
                </UserProvider>
            </NextUIProvider>
        </QueryClientProvider>
    )
}