"use client"
import { ReactNode, useState } from "react";
import UserDashboardSidebar from "./components/Sidebar"
import UserDashboardHeader from "./components/UserDashboardHeader"

const UserDashboardLayout = ({ children }: { children: ReactNode }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);


    return (
        <section className="h-screen">
            <div className="grid grid-cols-12">
                <UserDashboardSidebar
                    isSidebarOpen={isSidebarOpen}
                    setIsSidebarOpen={setIsSidebarOpen}
                />
                <div
                    className={
                        `${isSidebarOpen
                            ? "col-span-12 lg:col-span-8 xl:col-span-10"
                            : "col-span-12"
                        }`
                    }
                >
                    <UserDashboardHeader
                        setIsSidebarOpen={setIsSidebarOpen}
                        isSidebarOpen={isSidebarOpen}
                    />
                    <div className="bg-slate-100">
                        <div
                            className={`sm:px-16 px-6 ${isSidebarOpen ? "max-w-7xl" : "max-w-screen-2xl"
                                } min-h-screen w-full mx-auto `}
                        >
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default UserDashboardLayout