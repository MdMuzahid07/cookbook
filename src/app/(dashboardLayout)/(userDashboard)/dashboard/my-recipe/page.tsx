// components/ManageRecipe.js
import React from 'react';
import Image from 'next/image';

const recipes = [
    {
        "_id": "6702a605f62f5214894fe0fa",
        "title": "Vegetarian Tacos",
        "description": "Tacos filled with a flavorful mixture of beans, vegetables, and spices.",
        "images": "https://res.cloudinary.com/dsdbqct3r/image/upload/v1728294406/2148517039_n093tf.jpg",
        "category": "Mexican",
    },
    {
        "_id": "6702a605f62f5214894fe0fa",
        "title": "Vegetarian Tacos",
        "description": "Tacos filled with a flavorful mixture of beans, vegetables, and spices.",
        "images": "https://res.cloudinary.com/dsdbqct3r/image/upload/v1728294406/2148517039_n093tf.jpg",
        "category": "Mexican",
    },
    {
        "_id": "6702a605f62f5214894fe0fa",
        "title": "Vegetarian Tacos",
        "description": "Tacos filled with a flavorful mixture of beans, vegetables, and spices.",
        "images": "https://res.cloudinary.com/dsdbqct3r/image/upload/v1728294406/2148517039_n093tf.jpg",
        "category": "Mexican",
    },
    {
        "_id": "6702a605f62f5214894fe0fa",
        "title": "Vegetarian Tacos",
        "description": "Tacos filled with a flavorful mixture of beans, vegetables, and spices.",
        "images": "https://res.cloudinary.com/dsdbqct3r/image/upload/v1728294406/2148517039_n093tf.jpg",
        "category": "Mexican",
    },
    {
        "_id": "6702a605f62f5214894fe0fa",
        "title": "Vegetarian Tacos",
        "description": "Tacos filled with a flavorful mixture of beans, vegetables, and spices.",
        "images": "https://res.cloudinary.com/dsdbqct3r/image/upload/v1728294406/2148517039_n093tf.jpg",
        "category": "Mexican",
    },
];

const ManageRecipe = () => {
    return (
        <section className="bg-yellow-500 py-20 min-h-screen">
            <section className="max-w-7xl mx-auto overflow-x-auto px-6">
                <table className="min-w-full rounded-2xl bg-white  overflow-hidden">
                    <thead>
                        <tr className="bg-gray-200 text-gray-700">
                            <th className="py-8 px-6 text-left">No</th>
                            <th className="py-8 px-6 text-left">Image</th>
                            <th className="py-8 px-6 text-left">Title</th>
                            <th className="py-8 px-6 text-left">Description</th>
                            <th className="py-8 px-6 text-left">Category</th>
                            <th className="py-8 px-6 text-left">Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        {recipes.map((recipe, index) => (
                            <tr key={recipe._id} className="border-b hover:bg-gray-100">
                                <td className="py-8 px-6">{index + 1}</td>
                                <td className="py-8 px-6">
                                    <Image
                                        src={recipe?.images}
                                        alt={recipe.title}
                                        width={150}
                                        height={100}
                                        className="object-cover rounded-2xl"
                                    />
                                </td>
                                <td className="py-8 px-6">{recipe.title}</td>
                                <td className="py-8 px-6">{recipe.description}</td>
                                <td className="py-8 px-6">{recipe.category}</td>
                                <td className="py-8 px-6">
                                    <section className="flex items-center space-x-4">
                                        <button className="bg-slate-300 rounded-full w-10 h-10 flex justify-center items-center hover:bg-yellow-500 hover:text-white">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" stroke-linecap="round" strokeLinejoin="round" className="lucide lucide-pencil-off"><path d="m10 10-6.157 6.162a2 2 0 0 0-.5.833l-1.322 4.36a.5.5 0 0 0 .622.624l4.358-1.323a2 2 0 0 0 .83-.5L14 13.982" /><path d="m12.829 7.172 4.359-4.346a1 1 0 1 1 3.986 3.986l-4.353 4.353" /><path d="m15 5 4 4" /><path d="m2 2 20 20" /></svg>
                                        </button>
                                        <button className="bg-red-500 rounded-full w-10 h-10 flex justify-center items-center hover:bg-red-700 hover:text-white">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" stroke-linecap="round" strokeLinejoin="round" className="lucide lucide-trash"><path d="M3 6h18" /><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" /><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" /></svg>
                                        </button>
                                    </section>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
        </section>
    );
};

export default ManageRecipe;
