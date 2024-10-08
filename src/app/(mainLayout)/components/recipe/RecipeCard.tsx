/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { Avatar } from "@nextui-org/avatar";
import { motion, useAnimation, useInView } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

const RecipeCard = ({ recipe, delay }: any) => {
    const router = useRouter();
    // this hook used to control the animation
    const controls = useAnimation();
    // this for Reference to the card element
    const ref = useRef(null);
    // Check if in view the card
    const isInView = useInView(ref, { once: true });


    useEffect(() => {
        if (isInView) {
            controls.start("visible");
        } else {
            controls.start("hidden");
        }
    }, [isInView, controls]);


    const handleClick = (id: string) => {
        router.push(`/${id}`)
    }


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
            <section onClick={() => handleClick("90698067FakeId")} className="w-full mx-auto border-2 border-slate-100 bg-slate-950 text-slate-400 rounded-2xl transition duration-300 cursor-pointer text-left hover:scale-105">
                <div className="p-4">
                    {/* Post Header */}
                    <div className="flex items-center space-x-3">
                        <Avatar
                            src={recipe.avatarUrl}
                        />
                        <div>
                            <div className="text-sm font-semibold">{recipe.user}</div>
                            <div className="text-xs text-slate-400">Posted in r/Recipes</div>
                        </div>
                    </div>

                    {/* Post Title */}
                    <h2 className="mt-3 text-xl font-bold text-slate-400 hover:text-blue-500 cursor-pointer">
                        {recipe.title}
                    </h2>

                    {/* Post Body */}
                    <p className="mt-2 text-sm text-slate-400 line-clamp-3">
                        {recipe.description}
                    </p>

                    {/* Post Image */}
                    <div className="mt-3 w-full h-64 relative">
                        <Image
                            src={recipe.imageUrl}
                            alt="recipe image"
                            layout="fill"
                            objectFit="cover"
                            className="rounded-lg"
                        />
                    </div>

                    {/* Post Footer */}
                    <div className="mt-4 flex items-center justify-between text-sm text-slate-400">
                        {/* Upvote and Downvote Section */}
                        <div className="flex items-center space-x-2">
                            <button className="hover:text-yellow-500 transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-arrow-up"><path d="m5 12 7-7 7 7" /><path d="M12 19V5" /></svg>
                            </button>
                            <span className="font-medium">{recipe.upvotes}</span>
                            <button className="hover:text-yellow-500 transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-arrow-down"><path d="M12 5v14" /><path d="m19 12-7 7-7-7" /></svg>
                            </button>
                        </div>

                        {/* Comment and Share Section */}
                        <div className="flex items-center space-x-2">
                            <button className="hover:text-yellow-500 transition-colors">
                                <i className="fas fa-comment"></i>
                                <span className="ml-1">{recipe.comments} Comments</span>
                            </button>
                            <button className="hover:text-yellow-500 transition-colors">
                                <i className="fas fa-share"></i>
                                <span className="ml-1">Share</span>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </motion.div>
    );
};

export default RecipeCard;
