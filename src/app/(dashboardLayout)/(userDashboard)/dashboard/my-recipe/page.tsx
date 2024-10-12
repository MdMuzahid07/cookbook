import React from 'react';
import ManageRecipeComponent from './components/ManageRecipe';
import envConfig from '@/config/envConfig';

const ManageRecipe = async () => {
    const res = await fetch(`${envConfig.baseApi}/recipe`);
    const data = await res.json();
    const recipes = data?.data;

    return (
        <div>
            <ManageRecipeComponent recipes={recipes} />
        </div>
    );
};

export default ManageRecipe;
