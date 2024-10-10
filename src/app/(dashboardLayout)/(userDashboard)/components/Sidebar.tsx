"use client"

import { Button } from "@nextui-org/react";
import Link from "next/link";

/* eslint-disable @typescript-eslint/no-explicit-any */



const UserDashboardSidebar = ({ isSidebarOpen, setIsSidebarOpen }: any) => {

    return (
        <aside className={
            `${isSidebarOpen ? "flex" : "hidden"
            } col-span-12 lg:col-span-4 xl:col-span-2 text-[18px] sm:text-[25px] bg-slate-200 text-black min-h-screen sm:max-h-screen h-full w-full sticky top-0 border-r z-50
            `
        }>
            <div
                className="relative p-8 w-full"
            >
                <h4 className="text-2xl md:text-3xl lg:text-4xl font-extrabold">CookBook</h4>

                <button
                    onClick={() => setIsSidebarOpen(false)}
                    className="fixed right-10 top-10 border rounded-full w-10 h-10 flex justify-center items-center lg:hidden bg-black text-white"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18 18 6M6 6l12 12"
                        />
                    </svg>
                </button>

                <div className="mt-6 sm:mt-14 md:mt-16 border-t">
                    <Button as={Link} href="/dashboard/my-profile" className="w-full mb-5 text-xl font-bold"  >
                        Profile
                    </Button>
                    <Button as={Link} href="/dashboard/my-recipe" className="w-full mb-5 text-xl font-bold"  >
                        Manage Recipe
                    </Button>
                    <Button as={Link} href="/dashboard/share-recipe" className="w-full mb-5 text-xl font-bold" >
                        Share Recipe
                    </Button>
                </div>
            </div>
        </aside>
    );
};

export default UserDashboardSidebar;