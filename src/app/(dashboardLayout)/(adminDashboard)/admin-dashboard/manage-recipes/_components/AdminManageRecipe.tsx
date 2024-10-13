/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import React from 'react';
import Image from 'next/image';
// import { useDeleteRecipe } from '@/hooks/recipe.hook';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import { Button, Tooltip } from '@nextui-org/react';
import { useRecipePublishUnPublish } from '@/hooks/auth.hook';


const AdminManageRecipeComponent = ({ recipes }: any) => {
    const { mutate: publishUnPublish, isPending: isPublishUnPublishPending } = useRecipePublishUnPublish();
    const router = useRouter();


    if (isPublishUnPublishPending) {
        toast.loading("Working...", { id: "recipePublishUnPublish" })
    }


    console.log(recipes)

    const handlePublishUnPublish = (id: string) => {
        publishUnPublish({ id });
    };

    const handleDetailsPage = (id: string) => {
        router.push(`/${id}`);
    };


    return (
        <section className="bg-yellow-500 py-20 min-h-screen">
            <section className="max-w-7xl mx-auto overflow-x-auto px-6">
                <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold mb-10">Manage Recipe</h1>
                <table className="min-w-full rounded-2xl bg-white overflow-hidden">
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
                        {
                            recipes?.map((recipe: any, index: any) => (
                                <tr key={recipe?._id} className="border-b hover:bg-gray-100">
                                    <td className="py-8 px-6">{index + 1}</td>
                                    <td onClick={() => handleDetailsPage(recipe?._id)} className="py-8 px-6 cursor-pointer">
                                        <Image
                                            src={recipe?.images}
                                            alt={recipe?.title}
                                            width={150}
                                            height={100}
                                            className="object-cover rounded-2xl"
                                        />
                                    </td>
                                    <td onClick={() => handleDetailsPage(recipe?._id)} className="py-8 px-6 cursor-pointer">{recipe?.title}</td>
                                    <td onClick={() => handleDetailsPage(recipe?._id)} className="py-8 px-6 cursor-pointer">{recipe?.description}</td>
                                    <td onClick={() => handleDetailsPage(recipe?._id)} className="py-8 px-6 cursor-pointer">{recipe?.category}</td>
                                    <td className="py-8 px-6">
                                        <section className="flex items-center space-x-4">
                                            <Tooltip content="unPublish this recipe">
                                                <Button onClick={() => handlePublishUnPublish(recipe?._id)} className={`${recipe?.isPublished ? "bg-red-500" : "bg-green-500"} font-bold`}>
                                                    {
                                                        recipe?.isPublished ? (
                                                            <span>
                                                                UnPublish
                                                            </span>
                                                        ) : (
                                                            <span>
                                                                Publish
                                                            </span>
                                                        )
                                                    }
                                                </Button>
                                            </Tooltip>
                                        </section>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </section>
        </section>
    );
};

export default AdminManageRecipeComponent;
