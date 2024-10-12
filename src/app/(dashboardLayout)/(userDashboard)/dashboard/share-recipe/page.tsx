"use client"
import AddRecipeComponent from "./components/AddRecipe";
import { useUser } from "@/context/user.provider";

const AddRecipe = () => {
    const { user } = useUser();

    return (
        <>
            <AddRecipeComponent user={user} />
        </>
    )
}

export default AddRecipe