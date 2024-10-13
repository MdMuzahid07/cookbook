/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { useCommentInRecipe, useRattingInRecipe } from "@/hooks/recipe.hook";
import { Avatar } from "@nextui-org/avatar";
import { Divider } from "@nextui-org/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";


const RecipeDetails = ({ recipe }: any) => {
    const [rating, setRating] = useState(2);
    const { mutate: addComment, isPending } = useCommentInRecipe();
    const { mutate: addRating, isPending: isRatingPending } = useRattingInRecipe();
    const router = useRouter();
    const recipeId = recipe?._id;

    const [isChecked, setIsChecked] = useState(
        recipe?.ingredientChecklist?.map((item: any) => item?.isChecked)
    );

    // ratings ===============

    const handleMouseEnter = (value: number) => {
        setRating(value);
    };

    const handleMouseLeave = () => {
        setRating(0);
    };


    if (isRatingPending) {
        toast.loading("saving...", { id: "ratingInRecipeToastId" });
    };

    const handleClick = (value: number) => {
        setRating(value);

        const ratingInfo: any = {
            id: recipeId,
            rating: rating.toString()
        }

        addRating(ratingInfo)
    };


    const handleCheckboxChange = (index: number) => {
        const updatedChecked = [...isChecked];
        updatedChecked[index] = !updatedChecked[index];
        setIsChecked(updatedChecked);
    };


    if (isPending) {
        toast.loading("saving...", { id: "commentInRecipeToastId" });
    }


    const handleReviewSubmit = async (e: any) => {
        e.preventDefault();

        const commentData: any = {
            id: recipeId,
            comment: e.target.comment.value,
        };
        console.log(commentData)

        addComment(commentData);
    };


    const handleRedirectProfilePageByComment = (id: string) => {
        router.push(`/profile/${id}`)
    };


    return (
        <section className="max-w-7xl mx-auto py-20 px-6">
            <section className=" mb-10 md:bg-white md:p-8 md:rounded-2xl md:drop-shadow-md">
                <section className="grid lg:grid-cols-9 gap-10 mb-20">
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
                        {recipe?.images && (
                            <Image
                                src={recipe?.images}
                                layout="responsive"
                                width={400}
                                height={200}
                                alt={recipe?.title}
                                className="rounded-2xl"
                            />
                        )}

                        <section className="mt-10">
                            <h2 className="text-3xl font-bold text-slate-700 mb-4">Give a rating of this recipe</h2>

                            <div className="flex items-center">
                                {[1, 2, 3, 4, 5].map((value) => (
                                    <span
                                        key={value}
                                        className={`cursor-pointer text-2xl ${rating >= value ? "text-yellow-500" : "text-gray-300"
                                            }`}
                                        onMouseEnter={() => handleMouseEnter(value)}
                                        onMouseLeave={handleMouseLeave}
                                        onClick={() => handleClick(value)}
                                    >
                                        ★
                                    </span>
                                ))}
                                {rating > 0 && <p className="pl-3"> ({rating}) </p>}
                            </div>

                            <section className="mt-10">
                                <h2 className="text-3xl font-bold text-slate-700 mb-4">Ratings</h2>

                                <section className="mt-4">
                                    {
                                        recipe?.ratings?.map(({ author, rating, _id }: any) => {

                                            const numberArray = Array.from({ length: rating }, (_, i) => i + 1);

                                            return (
                                                <p className="flex items-center gap-3" key={_id}>
                                                    <span>
                                                        {numberArray.map((index) => (
                                                            <span key={index} className="text-yellow-500">★</span>
                                                        ))}

                                                        {Array.from({ length: 5 - rating }, (_, i) => (
                                                            <span key={`empty-${i}`} className="text-gray-300">☆</span>
                                                        ))}
                                                    </span>
                                                    <span className="text-xs">
                                                        {author?.name || "N/A"}
                                                    </span>
                                                </p>
                                            );
                                        })}
                                </section>

                            </section>
                        </section>
                    </section>
                </section>


                {/* // ============== ratings, comments =================> */}
                <Divider />

                <section className="mt-10">
                    <h2 className="text-xl font-semibold  mb-4">All Comments</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        {
                            recipe?.comments?.map((comment: any) => (
                                <div key={comment?._id} className="bg-slate-200 p-4 rounded-2xl shadow-md">
                                    <div className="flex gap-4 items-start">
                                        <Avatar
                                            onClick={() => handleRedirectProfilePageByComment(comment?.userId?._id)}
                                            src={comment?.userId?.avatar}
                                        />
                                        <div>
                                            <p className="font-semibold">{comment?.userId?.name}</p>
                                            <p className="">{comment?.comment}</p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    {/* comment  Form */}
                    <div className="mt-10">
                        <h3 className="text-lg font-semibold  mb-4">Write something about this recipe</h3>
                        <form onSubmit={handleReviewSubmit} className="space-y-4">
                            <div>
                                <label className="block">Comment</label>
                                <textarea
                                    className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                    rows={4}
                                    name="comment"
                                    required
                                />
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    className="bg-yellow-500 text-white px-6 py-2 rounded-full shadow-md hover:bg-yellow-700 transition duration-300 ease-in-out text-lg font-bold"
                                >
                                    Save
                                </button>
                            </div>
                        </form>
                    </div>
                </section>


            </section>
        </section>
    )
}

export default RecipeDetails