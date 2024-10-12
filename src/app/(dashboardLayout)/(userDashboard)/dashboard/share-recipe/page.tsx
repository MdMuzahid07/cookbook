import { getCurrentUser } from "@/services/AuthService"
import AddRecipeComponent from "./components/AddRecipe";

const AddRecipe = async () => {
    const user = await getCurrentUser();


    return (
        <>
            <AddRecipeComponent user={user} />
        </>
    )
}

export default AddRecipe