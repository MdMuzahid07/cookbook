/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { logOut } from "@/services/AuthService";
import { Avatar } from "@nextui-org/avatar";
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/dropdown";
import { Navbar, NavbarBrand, NavbarContent } from "@nextui-org/navbar";
import Link from "next/link";
import { useRouter } from "next/navigation";

const UserDashboardHeader = ({ isSidebarOpen, setIsSidebarOpen }: any) => {
    const router = useRouter();

    const handleLogout = () => {
        logOut();
        router.push("/");
    };

    return (
        <Navbar maxWidth={`${isSidebarOpen ? "full" : "2xl"}`} className="bg-white border-b drop-shadow-md">
            <NavbarBrand>
                <button
                    className={`${isSidebarOpen ? "bg-red-500" : "bg-yellow-500"} w-8 h-8 rounded-full flex justify-center text-white items-center`}
                    onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                >
                    {isSidebarOpen ? (
                        <p className="text-xl font-bold">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                        </p>
                    ) : (
                        <p className="text-xl font-bold">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu"><line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /></svg>
                        </p>
                    )}
                </button>
            </NavbarBrand>

            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <h1 className="text-xl">Hello John</h1>
            </NavbarContent>

            <NavbarContent as="div" justify="end">
                <Dropdown placement="bottom-end">
                    <DropdownTrigger>
                        <Avatar
                            isBordered
                            as="button"
                            className="transition-transform"
                            color="secondary"
                            name="Jason Hughes"
                            size="sm"
                            src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                        />
                    </DropdownTrigger>
                    <DropdownMenu aria-label="Profile Actions" variant="flat">
                        <DropdownItem key="profile" className="h-14 gap-2">
                            <p className="font-semibold">Signed in as</p>
                            <p className="font-semibold">zoey@example.com</p>
                        </DropdownItem>
                        <DropdownItem as={Link} href="/">Back Home</DropdownItem>
                        <DropdownItem onClick={handleLogout} key="logout" color="danger">
                            Log Out
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </NavbarContent>
        </Navbar>
    )
};

export default UserDashboardHeader;