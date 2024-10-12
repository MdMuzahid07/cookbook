/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useUser } from "@/context/user.provider";
import { useUpdateRecipe } from "@/hooks/recipe.hook";
import { useParams } from "next/navigation";
import { useFieldArray, useForm, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";

type TIngredient = {
    name: string;
    quantity: string;
    category: string;
};

type TNutritionInfo = {
    calories: string;
    fat: string;
    carbohydrates: string;
    protein: string;
};

type TShareRecipeForm = {
    images: File;
    title: string;
    description: string;
    ingredients: TIngredient[];
    instructions: string[];
    category: string;
    cookingTime: {
        prep: string;
        cook: string;
    };
    servings: string;
    isPremium: boolean;
    tags: string[];
    nutritionInfo: TNutritionInfo;
    videoUrl: string;
    difficulty: string;
    ingredientChecklist: {
        ingredientId: string;
        isChecked: boolean;
        customName: string;
        customQuantity: string;
    }[];
};

const UpdateRecipeComponent = () => {
    const { mutate: UpdateRecipe, isPending } = useUpdateRecipe();
    const { id } = useParams();
    const {
        register,
        control,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm<TShareRecipeForm>({
        defaultValues: {
            images: undefined,
            title: "",
            description: "",
            ingredients: [{ name: "", quantity: "", category: "" }],
            instructions: [""],
            category: "",
            cookingTime: { prep: "", cook: "" },
            servings: "",
            isPremium: false,
            tags: [""],
            nutritionInfo: { calories: "", fat: "", carbohydrates: "", protein: "" },
            videoUrl: "",
            difficulty: "",
            ingredientChecklist: [
                { ingredientId: "", isChecked: false, customName: "", customQuantity: "" },
            ],
        },
    });

    // Managing dynamic instructions
    const { fields: instructionFields, append: appendInstruction, remove: removeInstruction } = useFieldArray({
        control,
        name: "instructions" as any,
    });

    // Managing dynamic ingredients 
    const { fields: ingredientFields, append: appendIngredient, remove: removeIngredient } = useFieldArray({
        control,
        name: "ingredients",
    });

    if (isPending) {
        toast.loading("creating...", { id: "recipeUpdateNotificationToast" })
    }


    const { fields: tagFields, append: appendTag, remove: removeTag } = useFieldArray({
        control,
        name: "tags" as any,
    });


    // form submit handler
    const onSubmit: SubmitHandler<TShareRecipeForm> = (data) => {
        const recipeData: any = {
            title: data.title,
            description: data.description,
            category: data.category,
            servings: Number(data.servings),
            isPremium: data.isPremium,
            tags: data.tags,
            videoUrl: data.videoUrl,
            difficulty: data.difficulty,
            cookingTime: { prep: Number(data.cookingTime.prep), cook: Number(data.cookingTime.cook) },
            nutritionInfo: {
                calories: Number(data.nutritionInfo.calories),
                fat: Number(data.nutritionInfo.fat),
                carbohydrates: Number(data.nutritionInfo.carbohydrates),
                protein: Number(data.nutritionInfo.protein)
            },
            ingredients: data.ingredients,
            instructions: data.instructions,
            ingredientChecklist: data.ingredientChecklist,
        };

        const updateInfo: any = { id, recipeData }

        UpdateRecipe(updateInfo);

        reset();
    };
    return (
        <section className="bg-yellow-500 py-20">
            <div className="max-w-7xl mx-auto px-6">
                <h1 className="mb-14 text-2xl md:text-4xl lg:text-6xl font-bold">Update Recipe</h1>
                <div className="sm:bg-white sm:rounded-2xl sm:px-8 sm:py-14">
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                        {/* ===================title start================>  */}
                        <section className="pb-4">
                            <label className="block text-sm font-medium text-gray-700">Title</label>
                            <input
                                placeholder="add a name of the recipe"
                                type="text"
                                {...register("title", { required: false })}
                                className={`block w-full rounded-full border ${errors.title ? "border-red-500" : "border-gray-300"
                                    } shadow-sm focus:outline-none focus:border-yellow-500 focus:ring-yellow-500 py-2 px-3`}
                            />
                            {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>}
                        </section>


                        <section className="pb-4">
                            <label className="block text-sm font-medium text-gray-700">Description</label>
                            <textarea
                                placeholder="Describe your recipe, including key flavors and unique aspects."
                                {...register("description", { required: false })}
                                rows={4}
                                className={`mt-1 block w-full rounded-2xl border ${errors.description ? "border-red-500" : "border-gray-300"
                                    } shadow-sm focus:outline-none focus:border-yellow-500 focus:ring-yellow-500 px-3 py-2`}
                            ></textarea>
                            {errors.description && (
                                <p className="text-red-500 text-sm mt-1">{errors.description.message}</p>
                            )}
                        </section>

                        {/* ============== Ingredients section start ===================================> */}
                        <section className="pb-4">
                            <label className="block text-sm font-medium text-gray-700">Ingredients</label>
                            {ingredientFields.map((field, index) => (
                                <section key={field.id} className="flex flex-col md:flex-row md:space-x-4 mt-2">
                                    <input
                                        type="text"
                                        placeholder="e.g., Black Beans"
                                        {...register(`ingredients.${index}.name`, { required: false })}
                                        className={`mt-1 block w-full rounded-full border ${errors.ingredients?.[index]?.name ? "border-red-500" : "border-gray-300"
                                            } shadow-sm focus:outline-none focus:border-yellow-500 focus:ring-yellow-500 py-2 px-3`}
                                    />
                                    <input
                                        type="text"
                                        placeholder="e.g., 200g"
                                        {...register(`ingredients.${index}.quantity`, { required: false })}
                                        className={`mt-1 block w-full rounded-full border ${errors.ingredients?.[index]?.quantity ? "border-red-500" : "border-gray-300"
                                            } shadow-sm focus:outline-none focus:border-yellow-500 focus:ring-yellow-500 py-2 px-3`}
                                    />
                                    <input
                                        type="text"
                                        placeholder="e.g., Legumes"
                                        {...register(`ingredients.${index}.category`, { required: false })}
                                        className={`mt-1 block w-full rounded-full border ${errors.ingredients?.[index]?.category ? "border-red-500" : "border-gray-300"
                                            } shadow-sm focus:outline-none focus:border-yellow-500 focus:ring-yellow-500 py-2 px-3`}
                                    />
                                    <button
                                        type="button"
                                        onClick={() => removeIngredient(index)}
                                        className="mt-1 text-red-500 hover:text-red-700"
                                    >
                                        Remove
                                    </button>
                                </section>
                            ))}
                            <button
                                type="button"
                                onClick={() => appendIngredient({ name: "", quantity: "", category: "" })}
                                className="mt-4 px-4 py-2 bg-yellow-600 text-white rounded-full hover:bg-yellow-700"
                            >
                                Add Ingredient
                            </button>
                        </section>

                        {/* ============== Instructions section start ===================================> */}
                        <section className="pb-4">
                            <label className="block text-sm font-medium text-gray-700">Instructions</label>
                            {instructionFields.map((field, index) => (
                                <section key={field.id} className="flex flex-col md:flex-row md:space-x-4 mt-2">
                                    <textarea
                                        {...register(`instructions.${index}`, { required: false })}
                                        rows={2}
                                        placeholder={`Step ${index + 1}: Describe the action.`}
                                        className={`mt-1 block w-full rounded-2xl border ${errors.instructions?.[index] ? "border-red-500" : "border-gray-300"
                                            } shadow-sm focus:outline-none focus:border-yellow-500 focus:ring-yellow-500 px-3 py-2`}
                                    ></textarea>
                                    <button
                                        type="button"
                                        onClick={() => removeInstruction(index)}
                                        className="mt-1 text-red-500 hover:text-red-700"
                                    >
                                        Remove
                                    </button>
                                </section>
                            ))}
                            <button
                                type="button"
                                onClick={() => appendInstruction("")}
                                className="mt-4 px-4 py-2 bg-yellow-600 text-white rounded-full hover:bg-yellow-700"
                            >
                                Add Instruction
                            </button>
                        </section>

                        {/* ============== Category section start ===================================> */}
                        <section className="pb-4">
                            <label className="block text-sm font-medium text-gray-700">Category</label>
                            <input
                                placeholder="e.g., Mexican, Vegan"
                                type="text"
                                {...register("category", { required: false })}
                                className={`mt-1 block w-full rounded-full border ${errors.category ? "border-red-500" : "border-gray-300"
                                    } shadow-sm focus:border-yellow-500 focus:ring-yellow-500 py-2 px-3`}
                            />
                            {errors.category && <p className="text-red-500 text-sm mt-1">{errors.category.message}</p>}
                        </section>

                        {/* ============== Cooking Time section start ===================================> */}
                        <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <section className="pb-4">
                                <label className="block text-sm font-medium text-gray-700">Prep Time (minutes)</label>
                                <input
                                    placeholder="e.g., 10"
                                    type="number"
                                    {...register("cookingTime.prep", { required: false })}
                                    className={`mt-1 block w-full rounded-full border ${errors.cookingTime?.prep ? "border-red-500" : "border-gray-300"
                                        } shadow-sm focus:border-yellow-500 focus:ring-yellow-500 py-2 px-3`}
                                />
                                {errors.cookingTime?.prep && (
                                    <p className="text-red-500 text-sm mt-1">{errors.cookingTime.prep.message}</p>
                                )}
                            </section>
                            <section className="pb-4">
                                <label className="block text-sm font-medium text-gray-700">Cook Time (minutes)</label>
                                <input
                                    placeholder="e.g., 15"
                                    type="number"
                                    {...register("cookingTime.cook", { required: false })}
                                    className={`mt-1 block w-full rounded-full border ${errors.cookingTime?.cook ? "border-red-500" : "border-gray-300"
                                        } shadow-sm focus:border-yellow-500 focus:ring-yellow-500 py-2 px-3`}
                                />
                                {errors.cookingTime?.cook && (
                                    <p className="text-red-500 text-sm mt-1">{errors.cookingTime.cook.message}</p>
                                )}
                            </section>
                        </section>

                        {/* ============== Servings section start ===================================> */}
                        <section className="pb-4">
                            <label className="block text-sm font-medium text-gray-700">Servings</label>
                            <input
                                placeholder="e.g., 4"
                                type="number"
                                {...register("servings", {
                                    required: false
                                })}
                                className={`mt-1 block w-full rounded-full border ${errors.servings ? "border-red-500" : "border-gray-300"
                                    } shadow-sm focus:border-yellow-500 focus:ring-yellow-500 py-2 px-3`}
                            />
                            {errors.servings && <p className="text-red-500 text-sm mt-1">{errors.servings.message}</p>}
                        </section>

                        {/* ============== Tags section start ===================================> */}


                        <section className="pb-4">
                            <label className="block text-sm font-medium text-gray-700">Tags</label>
                            {tagFields.map((field, index) => (
                                <section key={field.id} className="flex items-center space-x-2 mt-2">
                                    <input
                                        type="text"
                                        placeholder="e.g., Vegetables"
                                        {...register(`tags.${index}`, { required: false })}
                                        className={`mt-1 block w-full rounded-full border ${errors.tags?.[index] ? "border-red-500" : "border-gray-300"
                                            } shadow-sm focus:outline-none focus:border-yellow-500 focus:ring-yellow-500 py-2 px-3`}
                                    />
                                    <button
                                        type="button"
                                        onClick={() => removeTag(index)}
                                        className="text-red-500 hover:text-red-700"
                                    >
                                        Remove
                                    </button>
                                </section>
                            ))}
                            <button
                                type="button"
                                onClick={() => appendTag("")} // Append an empty string for new tags
                                className="mt-4 px-4 py-2 bg-yellow-600 text-white rounded-full hover:bg-yellow-700"
                            >
                                Add Tag
                            </button>
                        </section>

                        {/* ============== Nutrition Info section start ===================================> */}
                        <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <section className="pb-4">
                                <label className="block text-sm font-medium text-gray-700">Calories</label>
                                <input
                                    placeholder="e.g., 280"
                                    type="number"
                                    {...register("nutritionInfo.calories", { required: false })}
                                    className={`mt-1 block w-full rounded-full border ${errors.nutritionInfo?.calories ? "border-red-500" : "border-gray-300"
                                        } shadow-sm focus:border-yellow-500 focus:ring-yellow-500 px-3 py-2`}
                                />
                                {errors.nutritionInfo?.calories && (
                                    <p className="text-red-500 text-sm mt-1">{errors.nutritionInfo.calories.message}</p>
                                )}
                            </section>
                            <section className="pb-4">
                                <label className="block text-sm font-medium text-gray-700">Fat</label>
                                <input
                                    type="number"
                                    {...register("nutritionInfo.fat", { required: false })}
                                    placeholder="e.g., 8g"
                                    className={`mt-1 block w-full rounded-full border ${errors.nutritionInfo?.fat ? "border-red-500" : "border-gray-300"
                                        } shadow-sm focus:border-yellow-500 focus:ring-yellow-500 px-3 py-2`}
                                />
                                {errors.nutritionInfo?.fat && (
                                    <p className="text-red-500 text-sm mt-1">{errors.nutritionInfo.fat.message}</p>
                                )}
                            </section>
                            <section className="pb-4">
                                <label className="block text-sm font-medium text-gray-700">Carbohydrates</label>
                                <input
                                    type="number"
                                    {...register("nutritionInfo.carbohydrates", {
                                        required: false
                                    })}
                                    placeholder="e.g., 40g"
                                    className={`mt-1 block w-full rounded-full border ${errors.nutritionInfo?.carbohydrates ? "border-red-500" : "border-gray-300"
                                        } shadow-sm focus:border-yellow-500 focus:ring-yellow-500 px-3 py-2`}
                                />
                                {errors.nutritionInfo?.carbohydrates && (
                                    <p className="text-red-500 text-sm mt-1">{errors.nutritionInfo.carbohydrates.message}</p>
                                )}
                            </section>
                            <section className="pb-4">
                                <label className="block text-sm font-medium text-gray-700">Protein</label>
                                <input
                                    type="number"
                                    {...register("nutritionInfo.protein", { required: false })}
                                    placeholder="e.g., 10g"
                                    className={`mt-1 block w-full rounded-full border ${errors.nutritionInfo?.protein ? "border-red-500" : "border-gray-300"
                                        } shadow-sm focus:border-yellow-500 focus:ring-yellow-500 px-3 py-2`}
                                />
                                {errors.nutritionInfo?.protein && (
                                    <p className="text-red-500 text-sm mt-1">{errors.nutritionInfo.protein.message}</p>
                                )}
                            </section>
                        </section>

                        {/* ============== Video URL section start ===================================> */}
                        <section className="pb-4">
                            <label className="block text-sm font-medium text-gray-700">Video URL</label>
                            <input
                                type="url"
                                {...register("videoUrl", {
                                    required: false
                                })}
                                placeholder="e.g.,https://www.youtube.com/embed/aqz-KE-bpKQ?si=6xknXqSX9B7K2Z94"
                                className={`mt-1 block w-full rounded-full border ${errors.videoUrl ? "border-red-500" : "border-gray-300"
                                    } shadow-sm focus:border-yellow-500 focus:ring-yellow-500 px-3 py-2`}
                            />
                            {errors.videoUrl && <p className="text-red-500 text-sm mt-1">{errors.videoUrl.message}</p>}
                        </section>

                        {/* ============== Difficulty section start ===================================> */}
                        <section className="pb-4">
                            <label className="block text-sm font-medium ">Difficulty</label>
                            <select
                                {...register("difficulty", { required: false })}
                                className={`mt-1 block w-full rounded-full border ${errors.difficulty ? "border-red-500" : "border-gray-300"
                                    } bg-white shadow-sm focus:border-yellow-500 focus:ring-yellow-500 px-3 py-2`}
                            >
                                <option value="">Select difficulty</option>
                                <option value="Easy">Easy</option>
                                <option value="Medium">Medium</option>
                                <option value="Hard">Hard</option>
                            </select>
                            {errors.difficulty && (
                                <p className="text-red-500 text-sm mt-1">{errors.difficulty.message}</p>
                            )}
                        </section>


                        {/* ============== Is Premium section start ===================================> */}
                        <section className="flex items-center">
                            <input
                                id="isPremiumCheckbox"
                                type="checkbox"
                                {...register("isPremium")}
                                className="h-4 w-4 text-yellow-600 focus:ring-yellow-500 border-gray-300 rounded"
                            />
                            <label title="check if want to make it available for premium members only" htmlFor="isPremiumCheckbox" className="ml-2 block  text-black text-lg">Premium Recipe</label>
                        </section>

                        {/* ============== Submit Button section start ===================================> */}
                        <section >
                            <button
                                type="submit"
                                className="w-80 px-4 py-2 bg-yellow-500 rounded-full hover:bg-yellow-700 text-xl font-bold mt-10"
                            >
                                Submit Recipe
                            </button>
                        </section>
                    </form>
                </div>
            </div>
        </section >
    );
};

export default UpdateRecipeComponent;
