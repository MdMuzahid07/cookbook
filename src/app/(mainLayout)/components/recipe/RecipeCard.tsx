/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useUpDownVote } from "@/hooks/recipe.hook";
import { Avatar } from "@nextui-org/avatar";
import { motion, useAnimation, useInView } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import { toast } from "sonner";

interface IComment {
    _id: string;
    recipeId: string;
    userId: {
        _id: string;
        name: string;
        email: string;
        avatar: string;
        bio?: string;
    };
    comment: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
}

interface Recipe {
    _id: string;
    title: string;
    description?: string;
    ingredients: any[];
    instructions: string[];
    images: string;
    author: {
        _id: string;
        name: string;
        email: string;
        avatar: string;
        bio?: string;
    };
    category: string;
    cookingTime: {
        prep: number;
        cook: number;
    };
    servings: number;
    ratings: any[];
    comments: IComment[];
    upVotes: string[];
    downVotes: string[];
    isPremium: boolean;
    tags: string[];
    nutritionInfo: any;
    videoUrl?: string | null;
    difficulty: "Easy" | "Medium" | "Hard";
    ingredientChecklist: any[];
    isDeleted: boolean;
    isPublished: boolean;
    createdAt?: string;
    updatedAt?: string;
}

interface RecipeCardProps {
    recipe: Recipe;
    delay?: number;
}

const RecipeCard = ({ recipe, delay = 0 }: RecipeCardProps) => {
    const { mutate: upDownVote, isPending } = useUpDownVote();
    const router = useRouter();

    // Animation hooks
    const controls = useAnimation();
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView) {
            controls.start("visible");
        } else {
            controls.start("hidden");
        }
    }, [isInView, controls]);

    const handleClick = (id: string) => {
        router.push(`/${id}`);
    };

    const handleClickProfile = (id: string) => {
        router.push(`/profile/${id}`);
    };

    useEffect(() => {
        if (isPending) {
            toast.loading("Saving...", { id: "recipeUpDownVoteNotificationToast" });
        } else {
            toast.dismiss("recipeUpDownVoteNotificationToast");
        }
    }, [isPending]);

    const handleUpVote = (id: string) => {
        const voteInfo: any = {
            recipeId: id,
            voteType: "upVote",
        };
        upDownVote(voteInfo);
    };

    const handleDownVote = (id: string) => {
        const voteInfo: any = {
            recipeId: id,
            voteType: "downVote",
        };
        upDownVote(voteInfo);
    };

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 50 },
            }}
            transition={{ duration: 0.5, delay, ease: "easeInOut" }}
        >
            <section className="w-full mx-auto border-2 border-slate-100 bg-slate-950 text-slate-400 rounded-2xl transition duration-300 cursor-pointer text-left hover:scale-105">
                <div className="p-4">
                    <section onClick={() => handleClickProfile(recipe?.author?._id)} className="flex items-center space-x-3">
                        <Avatar src={recipe?.author?.avatar} />
                        <div>
                            <div className="text-sm font-semibold">{recipe?.author?.name}</div>
                            <div className="text-xs text-slate-400">Posted in r/Recipes</div>
                        </div>
                    </section>

                    <section onClick={() => handleClick(recipe?._id)}>
                        <h2 className="mt-3 text-xl font-bold text-slate-400 hover:text-blue-500 cursor-pointer">
                            {recipe?.title}
                        </h2>

                        <p className="mt-2 text-sm text-slate-400 line-clamp-3">
                            {recipe?.description}
                        </p>

                        {recipe?.images && (
                            <div className="mt-3 w-full h-64 relative">
                                <Image
                                    src={recipe?.images}
                                    alt="recipe image"
                                    fill
                                    style={{ objectFit: "cover" }}
                                    className="rounded-lg"
                                />
                            </div>
                        )}
                    </section>

                    <section className="mt-4 flex items-center justify-between text-sm text-slate-400">
                        {/* Upvote and Downvote Section */}
                        <div className="flex items-center space-x-2">
                            <button onClick={() => handleUpVote(recipe?._id)} className="hover:text-yellow-500 transition-colors">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="lucide lucide-arrow-up"
                                >
                                    <path d="m5 12 7-7 7 7" />
                                    <path d="M12 19V5" />
                                </svg>
                            </button>
                            <span className="font-medium text-white">{recipe?.upVotes?.length}</span>
                            <button onClick={() => handleDownVote(recipe?._id)} className="hover:text-yellow-500 transition-colors">
                                <svg
                                    xmlns="http://www?w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="lucide lucide-arrow-down"
                                >
                                    <path d="M12 5v14" />
                                    <path d="m19 12-7 7-7-7" />
                                </svg>
                            </button>
                        </div>
                        <div className="flex items-center space-x-2">
                            <button onClick={() => handleClick(recipe?._id)} className="hover:text-yellow-500 transition-colors flex items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="lucide lucide-message-square"
                                >
                                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                                </svg>
                                <span className="ml-1">{recipe?.comments?.length} Comments</span>
                            </button>
                            {/* <button className="hover:text-yellow-500 transition-colors flex items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="lucide lucide-share-2"
                                >
                                    <circle cx="18" cy="5" r="3" />
                                    <circle cx="6" cy="12" r="3" />
                                    <circle cx="18" cy="19" r="3" />
                                    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                                    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
                                </svg>
                                <span className="ml-1">Share</span>
                            </button> */}
                        </div>
                    </section>
                </div>
            </section>
        </motion.div>
    );
};

export default RecipeCard;
