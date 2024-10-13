/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { Button } from '@nextui-org/react';
import { motion } from "framer-motion";
import RecipeCard from './RecipeCard';
import { useState } from 'react';


export interface TCookingTime {
  prep: number;
  cook: number;
}

export interface TIngredient {
  name: string;
  quantity: string;
  category: string;
}

export interface TRatings {
  author: string;
  rating: number;
}

export interface TNutritionInfo {
  calories: number;
  fat: number;
  carbohydrates: number;
  protein: number;
}

export interface TIngredientChecklist {
  isChecked: boolean;
  customName: string;
  customQuantity: string;
}

export interface TRecipe {
  title: string;
  description?: string;
  ingredients: TIngredient[];
  instructions: string[];
  images: string;
  author: string;
  category: string;
  cookingTime: TCookingTime;
  servings: number;
  ratings: TRatings[];
  comments: string[];
  upVotes: string[];
  downVotes: string[];
  isPremium: boolean;
  tags: string[];
  nutritionInfo: TNutritionInfo;
  videoUrl?: string | null;
  difficulty: "Easy" | "Medium" | "Hard";
  ingredientChecklist: TIngredientChecklist[];
  isDeleted: boolean;
  isPublished: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

interface RecipeProps {
  recipes: TRecipe[];
}


const Recipe = ({ recipes }: RecipeProps) => {
  const [search, setSearch] = useState("");
  const [hasMore, setHasMore] = useState(6);

  const filteredRecipes = recipes?.filter((recipe: TRecipe) =>
    recipe?.title?.toLowerCase()?.includes(search.toLowerCase())
  );

  const handleSearch = (e: any) => {
    setSearch(e.target.value);
  };
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
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
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-search"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
          </Button>
        </div>
      </section>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
        {filteredRecipes?.length > 0 ? (
          filteredRecipes?.slice(0, hasMore)?.map((recipe: any, index: number) => (
            <RecipeCard delay={index * 0.1} key={recipe?._id} recipe={recipe} />
          ))
        ) : (
          <p className="text-gray-200 text-3xl font-bold">No recipes found.</p>
        )}
      </div>
      <section className="flex justify-center mt-20">
        {
          (recipes?.length > hasMore) && <Button size="lg" className="bg-white hover:bg-red-500 hover:text-white hover:font-bold hover:scale-125 text-xl rounded-full" onClick={() => setHasMore(hasMore + 3)}>Load More</Button>
        }
      </section>
    </section>
  )
}

export default Recipe;