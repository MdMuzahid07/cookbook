/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { Avatar } from "@nextui-org/avatar";
import { useState } from "react";


const RecipeDetails = ({ recipe }: any) => {


    const [isChecked, setIsChecked] = useState(
        recipe?.ingredientChecklist?.map((item: any) => item?.isChecked)
    );

    const handleCheckboxChange = (index: number) => {
        const updatedChecked = [...isChecked];
        updatedChecked[index] = !updatedChecked[index];
        setIsChecked(updatedChecked);
    };

    return (
        <section className="max-w-7xl mx-auto py-20 px-6">
            <section className="grid lg:grid-cols-9 gap-10 mb-10 md:bg-white md:p-8 md:rounded-2xl md:drop-shadow-md">
                <section className="lg:col-span-5">
                    <section>
                        <h2 className="text-3xl font-bold text-slate-700 mb-4">Author</h2>
                        <div className="flex items-center space-x-4">
                            <Avatar
                                className="w-20 h-20"
                                src={recipe?.author?.avatar}
                                alt={recipe?.author?.name}
                            />
                            <div>
                                <h3 className="text-xl font-bold ">{recipe?.author?.name}</h3>
                                <p className="text-lg text-gray-800">{recipe?.author?.bio}</p>
                            </div>
                        </div>
                    </section>
                    <div className="grid lg:grid-cols-2 gap-6 mt-10">
                        <section>
                            <h2 className="text-3xl font-bold text-slate-700  mb-4">Details</h2>
                            <p className="text-slate-800 text-lg font-semibold tracking-wider">
                                <strong>Cooking Time: </strong>{recipe?.cookingTime?.prep + recipe?.cookingTime?.cook} mins
                                (Prep: {recipe?.cookingTime?.prep} mins, Cook: {recipe?.cookingTime?.cook} mins)
                            </p>
                            <p className="text-slate-800 text-lg font-semibold tracking-wider">
                                <strong>Servings: </strong>{recipe?.servings}
                            </p>
                            <p className="text-slate-800 text-lg font-semibold tracking-wider">
                                <strong>Difficulty: </strong>{recipe?.difficulty}
                            </p>
                            <div className="mt-6">
                                <h3 className="text-3xl font-bold text-slate-700 mb-2">Nutrition Info:</h3>
                                <p className="text-slate-800 text-lg font-semibold tracking-wider">Calories: {recipe?.nutritionInfo?.calories}</p>
                                <p className="text-slate-800 text-lg font-semibold tracking-wider">Fat: {recipe?.nutritionInfo?.fat}</p>
                                <p className="text-slate-800 text-lg font-semibold tracking-wider">Carbohydrates: {recipe?.nutritionInfo?.carbohydrates}</p>
                                <p className="text-slate-800 text-lg font-semibold tracking-wider">Protein: {recipe?.nutritionInfo?.protein}</p>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-3xl font-bold text-slate-700 mb-4">Instructions</h2>
                            <ol className="list-decimal space-y-2 ml-5">
                                {recipe?.instructions?.map((instruction: any, index: any) => (
                                    <li key={index} className="text-slate-800 text-lg font-semibold tracking-wider">
                                        {instruction}
                                    </li>
                                ))}
                            </ol>
                        </section>

                        <section>
                            <h2 className="text-3xl font-bold text-slate-700 mb-4">Ingredients</h2>
                            <ul className="space-y-2">
                                {recipe?.ingredients?.map((ingredient: any, index: any) => (
                                    <li key={index} className="flex items-center">
                                        <input
                                            id={ingredient?.name}
                                            type="checkbox"
                                            checked={isChecked[index]}
                                            onChange={() => handleCheckboxChange(index)}
                                            className="form-checkbox h-5 w-5 accent-yellow-500 rounded-full mr-2"
                                        />
                                        <label htmlFor={ingredient?.name}>
                                            <span className={`${isChecked[index] ? "line-through" : ""} text-slate-800 text-lg font-semibold tracking-wider`}>
                                                {ingredient?.quantity} {ingredient?.name} ({ingredient?.category})
                                            </span>
                                        </label>
                                    </li>
                                ))}
                            </ul>
                        </section>
                    </div>
                </section>

                <section className="lg:col-span-4">
                    {recipe?.videoUrl && (
                        <>
                            <h2 className="text-3xl font-bold text-slate-700 mb-4">Recipe Video</h2>
                            <iframe className="rounded-2xl w-full h-[270px] sm:h-[350px] md:h-[450px] lg:h-[290px]" src="https://www.youtube.com/embed/es4x5R-rV9s?si=Kqbp53vJCqmfzKOR" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                        </>
                    )}
                </section>
            </section>
        </section>
    )
}

export default RecipeDetails