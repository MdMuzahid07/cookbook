/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import RecipeCard from "@/app/(mainLayout)/components/recipe/RecipeCard";
import { Avatar, Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { useUser } from "@/context/user.provider";

// Sample User Data
const userData = {
    "_id": "670192c7be62e566aca0ebbd",
    "name": "Md. Muzahid",
    "email": "mdmuzahid.dev@gmail.com",
    "password": "$2b$12$U6wWZQtUwGliuzvuKe5kYuhtCe9VLcqpFLawe8hqxdaMCvgTuW67.",
    "bio": "MERN Stack Developer",
    "role": "admin",
    "avatar": "https://res.cloudinary.com/dsdbqct3r/image/upload/v1728239123/m9jrhijxe1mjyocjlkwm.jpg",
    "isDeleted": false,
    "followers": [
        {
            id: 1,
            username: "foodlover",
            displayName: "Food Lover",
            profilePicture: "https://res.cloudinary.com/dsdbqct3r/image/upload/v1728239123/m9jrhijxe1mjyocjlkwm.jpg",
        },
        {
            id: 1,
            username: "foodlover",
            displayName: "Food Lover",
            profilePicture: "https://res.cloudinary.com/dsdbqct3r/image/upload/v1728239123/m9jrhijxe1mjyocjlkwm.jpg",
        },
        {
            id: 1,
            username: "foodlover",
            displayName: "Food Lover",
            profilePicture: "https://res.cloudinary.com/dsdbqct3r/image/upload/v1728239123/m9jrhijxe1mjyocjlkwm.jpg",
        },
        {
            id: 1,
            username: "foodlover",
            displayName: "Food Lover",
            profilePicture: "https://res.cloudinary.com/dsdbqct3r/image/upload/v1728239123/m9jrhijxe1mjyocjlkwm.jpg",
        },
        {
            id: 1,
            username: "foodlover",
            displayName: "Food Lover",
            profilePicture: "https://res.cloudinary.com/dsdbqct3r/image/upload/v1728239123/m9jrhijxe1mjyocjlkwm.jpg",
        },
        {
            id: 1,
            username: "foodlover",
            displayName: "Food Lover",
            profilePicture: "https://res.cloudinary.com/dsdbqct3r/image/upload/v1728239123/m9jrhijxe1mjyocjlkwm.jpg",
        },
        {
            id: 1,
            username: "foodlover",
            displayName: "Food Lover",
            profilePicture: "https://res.cloudinary.com/dsdbqct3r/image/upload/v1728239123/m9jrhijxe1mjyocjlkwm.jpg",
        },
    ],
    "following": [
        {
            id: 1,
            username: "bakerpro",
            displayName: "Baker Pro",
            profilePicture: "https://res.cloudinary.com/dsdbqct3r/image/upload/v1728239123/m9jrhijxe1mjyocjlkwm.jpg",
        },
        {
            id: 1,
            username: "bakerpro",
            displayName: "Baker Pro",
            profilePicture: "https://res.cloudinary.com/dsdbqct3r/image/upload/v1728239123/m9jrhijxe1mjyocjlkwm.jpg",
        },
        {
            id: 1,
            username: "bakerpro",
            displayName: "Baker Pro",
            profilePicture: "https://res.cloudinary.com/dsdbqct3r/image/upload/v1728239123/m9jrhijxe1mjyocjlkwm.jpg",
        },
        {
            id: 1,
            username: "bakerpro",
            displayName: "Baker Pro",
            profilePicture: "https://res.cloudinary.com/dsdbqct3r/image/upload/v1728239123/m9jrhijxe1mjyocjlkwm.jpg",
        },
        {
            id: 1,
            username: "bakerpro",
            displayName: "Baker Pro",
            profilePicture: "https://res.cloudinary.com/dsdbqct3r/image/upload/v1728239123/m9jrhijxe1mjyocjlkwm.jpg",
        },
        {
            id: 1,
            username: "bakerpro",
            displayName: "Baker Pro",
            profilePicture: "https://res.cloudinary.com/dsdbqct3r/image/upload/v1728239123/m9jrhijxe1mjyocjlkwm.jpg",
        },
    ],
    "membership": {
        type: "Premium",
        expiresAt: "2025-10-11T00:00:00.000Z"
    },
    "createdAt": "2024-10-05T19:25:59.096Z",
    "updatedAt": "2024-10-06T17:20:05.598Z",
    "__v": 0,
    "isBlocked": false,
    "recipes": [
        {
            id: 1,
            title: "Spaghetti Carbonara",
            description: "Classic Italian pasta dish.",
            image: "https://res.cloudinary.com/dsdbqct3r/image/upload/v1728239123/m9jrhijxe1mjyocjlkwm.jpg",
            createdAt: "2h",
        },
        {
            id: 2,
            title: "Chocolate Chip Cookies",
            description: "Crispy and chewy cookies.",
            image: "https://res.cloudinary.com/dsdbqct3r/image/upload/v1728239123/m9jrhijxe1mjyocjlkwm.jpg",
            createdAt: "1d",
        },
    ],
};

const MyProfilePageDashboard = () => {
    const [activeTab, setActiveTab] = useState("recipes");
    const { user } = useUser();


    const formatDate = (dateString: any) => {
        const options = { year: "numeric", month: "long", day: "numeric" };
        return new Date(dateString).toLocaleDateString(undefined, options as any);
    };




    return (
        <div className="bg-yellow-500 min-h-screen pb-32">
            {/* Cover Photo */}
            <div className="relative">
                <Image
                    src="https://res.cloudinary.com/dsdbqct3r/image/upload/v1728455725/6470_yvgrhg.jpg"
                    alt="Cover Photo"
                    width={1920}
                    height={600}
                    className="w-full h-56 sm:h-64 md:h-80 object-cover"
                />
                {/* Profile Avatar */}
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex justify-center -mb-36 transform -translate-y-1/2">
                        <Avatar
                            src={user?.avatar}
                            alt={userData?.name}
                            className=" border-4 w-40 md:w-56 h-40 md:h-56 border-white"
                        />
                    </div>
                </div>
            </div>

            {/* Profile Information */}
            <div className="mt-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="bg-white shadow-lg rounded-2xl min-h-screen p-6 sm:p-8">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                        <div>
                            <h1 className="text-2xl font-bold">{userData.name}</h1>
                            <p className="text-gray-600">@{userData.email.split("@")[0]}</p>
                            <p className="mt-2 text-gray-700">{userData.bio}</p>
                            <p className="mt-2 text-gray-700"><strong>Role:</strong> {userData?.role}</p>
                            {userData?.membership && (
                                <p className="mt-2 text-green-600">
                                    <strong>Membership:</strong> {userData?.membership.type} (Expires on {formatDate(userData?.membership.expiresAt)})
                                </p>
                            )}
                        </div>
                        <div className="mt-4 md:mt-0 flex flex-wrap gap-2">
                            <Button
                                as={Link}
                                href="/dashboard/edit-profile"
                                variant="flat"
                                className="rounded-full bg-slate-300 text-lg"
                            >
                                Edit Profile
                            </Button>
                            <Button
                                as={Link}
                                href="/dashboard/get-membership"
                                variant="solid"
                                className="rounded-full text-lg bg-yellow-500"
                            >
                                Get Membership
                            </Button>
                        </div>
                    </div>

                    {/* Followers and Following */}
                    <div className="mt-6 flex space-x-8">
                        <div>
                            <span className="text-xl font-semibold">{userData.followers?.length}</span>
                            <span className="text-gray-600 ml-2">Followers</span>
                        </div>
                        <div>
                            <span className="text-xl font-semibold">{userData.following?.length}</span>
                            <span className="text-gray-600 ml-2">Following</span>
                        </div>
                        {userData?.isBlocked && (
                            <div className="text-red-600">
                                <strong>Blocked</strong>
                            </div>
                        )}
                        {userData?.isDeleted && (
                            <div className="text-red-600">
                                <strong>Account Deleted</strong>
                            </div>
                        )}
                    </div>

                    {/* Tabs */}
                    <div className="mt-8 border-b border-gray-200">
                        <nav className="-mb-px flex space-x-8">
                            <button
                                className={`whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm ${activeTab === "recipes"
                                    ? "border-yellow-500 text-yellow-600"
                                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                                    }`}
                                onClick={() => setActiveTab("recipes")}
                            >
                                Recipes
                            </button>
                            <button
                                className={`whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm ${activeTab === "followers"
                                    ? "border-blue-500 text-blue-600"
                                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                                    }`}
                                onClick={() => setActiveTab("followers")}
                            >
                                Followers
                            </button>
                            <button
                                className={`whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm ${activeTab === "following"
                                    ? "border-blue-500 text-blue-600"
                                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                                    }`}
                                onClick={() => setActiveTab("following")}
                            >
                                Following
                            </button>
                        </nav>
                    </div>

                    {/* Tab Content */}
                    <div className="mt-6">
                        {activeTab === "recipes" && (
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {userData?.recipes.map((recipe) => (
                                    <RecipeCard key={recipe.id} recipe={recipe} />
                                ))}
                            </div>
                        )}
                        {activeTab === "followers" && (
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {userData?.followers?.map((follower) => (
                                    <div
                                        key={follower?.id}
                                        className="flex items-center bg-slate-100 p-4 rounded-xl shadow-md"
                                    >
                                        <Avatar
                                            src={follower?.profilePicture}
                                            alt={follower?.displayName}
                                            size="md"
                                            className="rounded-full"
                                        />
                                        <div className="ml-4">
                                            <h4 className="text-lg font-semibold">{follower?.displayName}</h4>
                                            <p className="text-gray-600">@{follower?.username}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                        {activeTab === "following" && (
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {userData?.following?.map((followed) => (
                                    <div
                                        key={followed?.id}
                                        className="flex items-center bg-slate-100 p-4 rounded-xl shadow-md"
                                    >
                                        <Avatar
                                            src={followed?.profilePicture}
                                            alt={followed?.displayName}
                                            size="md"
                                            className="rounded-full"
                                        />
                                        <div className="ml-4">
                                            <h4 className="text-lg font-semibold">{followed?.displayName}</h4>
                                            <p className="text-gray-600">@{followed.username}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );

};

export default MyProfilePageDashboard;
