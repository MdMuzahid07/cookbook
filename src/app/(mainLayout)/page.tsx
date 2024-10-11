/* eslint-disable @typescript-eslint/no-explicit-any */
import envConfig from '@/config/envConfig';
import Banner from './components/recipe/Banner';

import Recipe from './components/recipe/Recipe';


const RecipeFeed = async () => {
    const res = await fetch(`${envConfig.baseApi}/recipe`);
    const data = await res.json();
    const recipes = data?.data;

    return (
        <section className="bg-yellow-500">
            <Banner />
            <Recipe recipes={recipes} />
        </section>
    );
};

export default RecipeFeed;
