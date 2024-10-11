/* eslint-disable @typescript-eslint/no-explicit-any */
import envConfig from '@/config/envConfig';
import DetailsPageBanner from '../components/recipe/DetailsPageBanner';
import RecipeDetails from '../components/recipe/RecipeDetails';


const RecipeDetailsPage = async ({ params: { recipeId } }: any) => {

    const res = await fetch(`${envConfig.baseApi}/recipe/${recipeId}`);
    const data = await res.json();
    const recipe = data?.data;

    return (
        <section className="bg-slate-100 md:bg-yellow-500">

            <DetailsPageBanner recipe={recipe} />

            <RecipeDetails recipe={recipe} />
        </section>
    )
}

export default RecipeDetailsPage;
