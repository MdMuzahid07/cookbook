// pages/profile/[username].tsx
"use client"
import { Avatar } from '@nextui-org/react';
import Image from 'next/image';
import { useState } from 'react';
import RecipeCard from '../components/recipe/RecipeCard';

// Fake data for demo
const fakeData = {
    username: 'ChefMaster',
    displayName: 'Chef Master',
    profilePicture: 'https://res.cloudinary.com/dsdbqct3r/image/upload/v1728239123/m9jrhijxe1mjyocjlkwm.jpg', // Store in public folder
    coverPhoto: 'https://res.cloudinary.com/dsdbqct3r/image/upload/v1728239123/m9jrhijxe1mjyocjlkwm.jpg',       // Store in public folder
    bio: 'Passionate about creating delicious recipes! 🍳🍰🍲',
    followersCount: 1200,
    followingCount: 300,
    isFollowing: false,
    recipes: [
        {
            id: 1,
            title: 'Spaghetti Carbonara',
            description: 'Classic Italian pasta dish.',
            image: 'https://res.cloudinary.com/dsdbqct3r/image/upload/v1728239123/m9jrhijxe1mjyocjlkwm.jpg',      // Store in public folder
            createdAt: '2h',
        },
        {
            id: 2,
            title: 'Chocolate Chip Cookies',
            description: 'Crispy and chewy cookies.',
            image: 'https://res.cloudinary.com/dsdbqct3r/image/upload/v1728239123/m9jrhijxe1mjyocjlkwm.jpg',
            createdAt: '1d',
        },
    ],
    followers: [
        {
            id: 1,
            username: 'foodlover',
            displayName: 'Food Lover',
            profilePicture: 'https://res.cloudinary.com/dsdbqct3r/image/upload/v1728239123/m9jrhijxe1mjyocjlkwm.jpg',
        },
    ],
    following: [
        {
            id: 1,
            username: 'bakerpro',
            displayName: 'Baker Pro',
            profilePicture: 'https://res.cloudinary.com/dsdbqct3r/image/upload/v1728239123/m9jrhijxe1mjyocjlkwm.jpg',
        },
    ],
};

const MyProfilePage = () => {
    const [activeTab, setActiveTab] = useState('recipes');
    const [isFollowing, setIsFollowing] = useState(fakeData.isFollowing);

    const handleFollow = () => {
        setIsFollowing((prev) => !prev);
    };


    return (
        <section className="bg-yellow-500 pb-32 min-h-screen">
            {/* Cover Photo */}
            <section className="h-56 bg-[url('https://res.cloudinary.com/dsdbqct3r/image/upload/v1728455725/6470_yvgrhg.jpg')] relative bg-cover bg-no-repeat bg-center">
                <div className="max-w-7xl mx-auto">
                    <div className="absolute -bottom-16 pl-4">
                        <Avatar src={fakeData.profilePicture} className="w-40 h-40 text-large ring-4 ring-white" />
                    </div>
                </div>
            </section>

            {/* Profile Information */}

            <section className="mt-32 px-6 max-w-7xl mx-auto min-h-screen sm:bg-white sm:rounded-2xl sm:p-8 sm:shadow-lg">
                <section className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <section>
                        <h1 className="text-2xl font-bold">{fakeData.displayName}</h1>
                        <p className="text-gray-600">@{fakeData.username}</p>
                        <p className="mt-2">{fakeData.bio}</p>
                        <div className="flex space-x-6 mt-4">
                            <span className="text-gray-700">
                                <strong>{fakeData.followersCount}</strong> Followers
                            </span>
                            <span className="text-gray-700">
                                <strong>{fakeData.followingCount}</strong> Following
                            </span>
                        </div>
                    </section>
                    <section>
                        <button
                            onClick={handleFollow}
                            className={`mt-4 md:mt-0 px-6 py-2 rounded-full font-semibold ${isFollowing
                                ? 'bg-slate-950 text-white'
                                : ' bg-white sm:bg-yellow-500 sm:text-white sm:hover:bg-yellow-600'
                                }`}
                        >
                            {isFollowing ? 'UnFollow' : 'Follow'}
                        </button>
                    </section>
                </section>

                {/* Tabs */}
                <div className="mt-8 border-b border-gray-300">
                    <nav className="-mb-px flex space-x-8">
                        <button
                            className={`whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'recipes'
                                ? 'border-yellow-500 text-yellow-600'
                                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                }`}
                            onClick={() => setActiveTab('recipes')}
                        >
                            Recipes
                        </button>
                        <button
                            className={`whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'followers'
                                ? 'border-blue-500 text-blue-600'
                                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                }`}
                            onClick={() => setActiveTab('followers')}
                        >
                            Followers
                        </button>
                        <button
                            className={`whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'following'
                                ? 'border-blue-500 text-blue-600'
                                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                }`}
                            onClick={() => setActiveTab('following')}
                        >
                            Following
                        </button>
                    </nav>
                </div>

                {/* Tab Content */}
                <div className="mt-6">
                    {activeTab === "recipes" && (
                        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
                            {fakeData.recipes.map((recipe, index) => (
                                <RecipeCard key={index} recipe={recipe} />
                            ))}
                        </div>
                    )}
                    {activeTab === "followers" && (
                        <div className="space-y-4 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {fakeData.followers.map((follower) => (
                                <div
                                    key={follower.id}
                                    className="flex items-center bg-slate-100 p-4 rounded-2xl shadow-md"
                                >
                                    <Avatar
                                        src={follower.profilePicture}
                                        alt={follower.username}
                                        className="rounded-full object-cover"
                                    />
                                    <div className="ml-4">
                                        <h4 className="text-lg font-semibold">
                                            {follower.displayName}
                                        </h4>
                                        <p className="text-gray-600">@{follower.username}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                    {activeTab === "following" && (
                        <div className="space-y-4">
                            {fakeData.following.map((followed) => (
                                <div
                                    key={followed.id}
                                    className="flex items-center bg-white p-4 rounded-2xl shadow-md"
                                >
                                    <Image
                                        src={followed.profilePicture}
                                        alt={followed.username}
                                        width={48}
                                        height={48}
                                        className="rounded-full object-cover"
                                    />
                                    <div className="ml-4">
                                        <h4 className="text-lg font-semibold">
                                            {followed.displayName}
                                        </h4>
                                        <p className="text-gray-600">@{followed.username}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </section>
        </section>
    );
};

export default MyProfilePage;