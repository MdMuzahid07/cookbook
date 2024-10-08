/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import React, { useState } from 'react'
import RecipeCard from './components/recipe/RecipeCard'
import Banner from './components/recipe/Banner';
import { Button } from '@nextui-org/react';
import { motion } from "framer-motion";


const recipes = [
    {
        user: 'User123',
        avatarUrl: 'https://res.cloudinary.com/dsdbqct3r/image/upload/v1728294406/2148517039_n093tf.jpg',
        title: 'Delicious Spaghetti Carbonara Recipe',
        description: 'A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper.',
        imageUrl: 'https://res.cloudinary.com/dsdbqct3r/image/upload/v1728294406/2148517039_n093tf.jpg',
        upvotes: 250,
        comments: 45,
    },
    {
        user: 'User456',
        avatarUrl: 'https://res.cloudinary.com/dsdbqct3r/image/upload/v1728294406/2148517039_n093tf.jpg',
        title: 'Mouthwatering Chicken Alfredo',
        description: 'Creamy chicken alfredo pasta that will delight your taste buds.',
        imageUrl: 'https://res.cloudinary.com/dsdbqct3r/image/upload/v1728294406/2148517039_n093tf.jpg',
        upvotes: 150,
        comments: 20,
    },
    {
        user: 'User456',
        avatarUrl: 'https://res.cloudinary.com/dsdbqct3r/image/upload/v1728294406/2148517039_n093tf.jpg',
        title: 'Mouthwatering Chicken Alfredo',
        description: 'Creamy chicken alfredo pasta that will delight your taste buds.',
        imageUrl: 'https://res.cloudinary.com/dsdbqct3r/image/upload/v1728294406/2148517039_n093tf.jpg',
        upvotes: 150,
        comments: 20,
    },
    {
        user: 'User456',
        avatarUrl: 'https://res.cloudinary.com/dsdbqct3r/image/upload/v1728294406/2148517039_n093tf.jpg',
        title: 'Mouthwatering Chicken Alfredo',
        description: 'Creamy chicken alfredo pasta that will delight your taste buds.',
        imageUrl: 'https://res.cloudinary.com/dsdbqct3r/image/upload/v1728294406/2148517039_n093tf.jpg',
        upvotes: 150,
        comments: 20,
    },
    {
        user: 'User456',
        avatarUrl: 'https://res.cloudinary.com/dsdbqct3r/image/upload/v1728294406/2148517039_n093tf.jpg',
        title: 'Mouthwatering Chicken Alfredo',
        description: 'Creamy chicken alfredo pasta that will delight your taste buds.',
        imageUrl: 'https://res.cloudinary.com/dsdbqct3r/image/upload/v1728294406/2148517039_n093tf.jpg',
        upvotes: 150,
        comments: 20,
    },
    {
        user: 'User456',
        avatarUrl: 'https://res.cloudinary.com/dsdbqct3r/image/upload/v1728294406/2148517039_n093tf.jpg',
        title: 'Mouthwatering Chicken Alfredo',
        description: 'Creamy chicken alfredo pasta that will delight your taste buds.',
        imageUrl: 'https://res.cloudinary.com/dsdbqct3r/image/upload/v1728294406/2148517039_n093tf.jpg',
        upvotes: 150,
        comments: 20,
    },
    {
        user: 'User456',
        avatarUrl: 'https://res.cloudinary.com/dsdbqct3r/image/upload/v1728294406/2148517039_n093tf.jpg',
        title: 'Mouthwatering Chicken Alfredo',
        description: 'Creamy chicken alfredo pasta that will delight your taste buds.',
        imageUrl: 'https://res.cloudinary.com/dsdbqct3r/image/upload/v1728294406/2148517039_n093tf.jpg',
        upvotes: 150,
        comments: 20,
    },
    {
        user: 'User456',
        avatarUrl: 'https://res.cloudinary.com/dsdbqct3r/image/upload/v1728294406/2148517039_n093tf.jpg',
        title: 'Mouthwatering Chicken Alfredo',
        description: 'Creamy chicken alfredo pasta that will delight your taste buds.',
        imageUrl: 'https://res.cloudinary.com/dsdbqct3r/image/upload/v1728294406/2148517039_n093tf.jpg',
        upvotes: 150,
        comments: 20,
    },
    {
        user: 'User456',
        avatarUrl: 'https://res.cloudinary.com/dsdbqct3r/image/upload/v1728294406/2148517039_n093tf.jpg',
        title: 'Mouthwatering Chicken Alfredo',
        description: 'Creamy chicken alfredo pasta that will delight your taste buds.',
        imageUrl: 'https://res.cloudinary.com/dsdbqct3r/image/upload/v1728294406/2148517039_n093tf.jpg',
        upvotes: 150,
        comments: 20,
    },
    {
        user: 'User456',
        avatarUrl: 'https://res.cloudinary.com/dsdbqct3r/image/upload/v1728294406/2148517039_n093tf.jpg',
        title: 'Mouthwatering Chicken Alfredo',
        description: 'Creamy chicken alfredo pasta that will delight your taste buds.',
        imageUrl: 'https://res.cloudinary.com/dsdbqct3r/image/upload/v1728294406/2148517039_n093tf.jpg',
        upvotes: 150,
        comments: 20,
    },
    {
        user: 'User456',
        avatarUrl: 'https://res.cloudinary.com/dsdbqct3r/image/upload/v1728294406/2148517039_n093tf.jpg',
        title: 'Mouthwatering Chicken Alfredo',
        description: 'Creamy chicken alfredo pasta that will delight your taste buds.',
        imageUrl: 'https://res.cloudinary.com/dsdbqct3r/image/upload/v1728294406/2148517039_n093tf.jpg',
        upvotes: 150,
        comments: 20,
    },
];


const RecipeFeed = () => {
    const [search, setSearch] = useState("");

    const filteredRecipes = recipes?.filter(recipe =>
        recipe?.title?.toLowerCase()?.includes(search.toLowerCase())
    );

    const handleSearch = (e: any) => {
        setSearch(e.target.value);
    };

    return (
        <section className="bg-yellow-500">
            <Banner />
            <section className="max-w-7xl mx-auto px-4 xl:px-0  py-20">
                <section className="pt-10">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 1.5, ease: "easeInOut" }}
                    >
                        <h1 className="text-3xl md:text-6xl font-bold mb-6">All Recipes</h1>
                    </motion.div>
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search recipes..."
                            className="border text-xl font-bold tracking-wider focus:outline-none rounded-full h-16 px-5 mb-4 w-full"
                            onChange={handleSearch}
                            value={search}
                        />
                        <Button className="absolute top-2 right-2 h-12 rounded-full bg-slate-950 text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-search"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
                        </Button>
                    </div>
                </section>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
                    {filteredRecipes?.length > 0 ? (
                        filteredRecipes?.map((recipe: any) => (
                            <RecipeCard key={recipe._id} recipe={recipe} />
                        ))
                    ) : (
                        <p className="text-gray-200 text-3xl font-bold">No recipes found.</p>
                    )}
                </div>
            </section>
        </section>
    );
};

export default RecipeFeed;
