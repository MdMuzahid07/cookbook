"use client"
import { useUser } from "@/content/user.provider";
import { logOut } from "@/services/AuthService";
import { Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, NavbarContent, NavbarItem, Link, DropdownMenu, DropdownItem, DropdownTrigger, Avatar, Dropdown, Input } from "@nextui-org/react";
import Image from "next/image";
import { useRouter } from "next/navigation";


const menuItems = [
    { title: "Recipe Feed", to: "/" },
    { title: "About Us", to: "/about" },
    { title: "Contact Us", to: "/contact" },
];



const MainNavbar = () => {
    const router = useRouter();
    const { user, setIsLoading: userLoading } = useUser();

    const handleLogout = () => {
        logOut();
        userLoading(true);
        router.push("/");
    };


    return (
        <Navbar
            maxWidth="xl" className="bg-slate-950 text-white z-50 w-screen px-0" >
            <NavbarContent className="sm:hidden" justify="start">
                <NavbarMenuToggle />
            </NavbarContent>

            <NavbarContent className="sm:hidden pr-3" justify="center">
                <NavbarBrand>
                    <Image
                        alt="logo"
                        src="https://res.cloudinary.com/dsdbqct3r/image/upload/v1728282514/rishhyytfbjqvaqxjqmh.png"
                        width={20}
                        height={20}
                    />
                    <p className="font-bold text-inherit">CookBook</p>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarBrand className="mr-10">
                    <Image
                        alt="logo"
                        src="https://res.cloudinary.com/dsdbqct3r/image/upload/v1728282514/rishhyytfbjqvaqxjqmh.png"
                        width={30}
                        height={30}
                        className="rounded-full border-2 border-yellow-500"
                    />
                    <p className="font-bold text-lg text-yellow-500 ml-2">CookBook</p>
                </NavbarBrand>
                <NavbarItem>
                    <Link color="foreground" href="/">
                        Recipe Feed
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="/about">
                        About Us
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="/contact">
                        Contact Us
                    </Link>
                </NavbarItem>
            </NavbarContent>

            <NavbarContent as="div" className="items-center" justify="end">
                <Input
                    radius="full"
                    classNames={{
                        base: "max-w-full w-full hidden md:block sm:max-w-[15rem] h-10 ",
                        mainWrapper: "h-full",
                        input: "text-small",
                        inputWrapper: "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
                    }}
                    placeholder="Type to search..."
                    size="sm"
                    startContent={
                        <svg className="w-7 h-7" data-slot="icon" fill="none" strokeWidth="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"></path>
                        </svg>
                    }
                    type="search"
                />
                <Dropdown placement="bottom-end">
                    <DropdownTrigger>
                        <Avatar
                            isBordered
                            as="button"
                            className="transition-transform"
                            color="secondary"
                            name={user ? user?.name : "N/A"}
                            size="sm"
                            src={user ? user?.avatar : ""}
                        />
                    </DropdownTrigger>
                    <DropdownMenu aria-label="Profile Actions" variant="flat">
                        <DropdownItem key="profile" className={`h-14 gap-2 ${!user ? "hidden" : "flex"}`}>
                            <p className="font-semibold">
                                {
                                    user && "Signed in as"
                                }
                            </p>
                            <p className="font-semibold">{
                                user ? user?.email : ""
                            }</p>
                        </DropdownItem>
                        <DropdownItem as={Link} href="/profile">
                            <span className="w-ful h-full text-md font-bold text-slate-700">
                                My Profile
                            </span>
                        </DropdownItem>
                        <DropdownItem as={Link} href="/dashboard/my-profile">
                            <span className="w-ful h-full text-md font-bold text-slate-700">
                                Dashboard
                            </span>
                        </DropdownItem>
                        <DropdownItem as={Link} href="/login">
                            <span className="w-ful h-full text-md font-bold text-slate-700">
                                Register/Login
                            </span>
                        </DropdownItem>
                        <DropdownItem onClick={handleLogout}>
                            <span className="w-ful h-full text-md font-bold text-slate-700">
                                Logout
                            </span>
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </NavbarContent>

            <NavbarMenu className="text-white pt-8">
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                        <Link
                            className="w-full text-white font-bold my-2"
                            href={item?.to}
                            size="lg"
                        >
                            {item?.title}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    );
}

export default MainNavbar;