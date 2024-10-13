"use client"
import { ReactNode, useState } from "react";
import AdminDashboardSidebar from "./components/AdminSIdebar";
import AdminDashboardHeader from "./components/AdminDashboardHeader";


const AdminDashboardLayout = ({ children }: { children: ReactNode }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);


    return (
        <section className="h-screen">
            <div className="grid grid-cols-12">
                <AdminDashboardSidebar
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
                    <AdminDashboardHeader
                        setIsSidebarOpen={setIsSidebarOpen}
                        isSidebarOpen={isSidebarOpen}
                    />
                    <div className="bg-slate-100">
                        <div
                            className={`${isSidebarOpen ? "" : "max-w-screen-2xl"
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

export default AdminDashboardLayout