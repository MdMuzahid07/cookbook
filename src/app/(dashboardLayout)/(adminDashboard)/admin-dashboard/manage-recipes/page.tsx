import React from 'react';
import envConfig from '@/config/envConfig';
import AdminManageRecipeComponent from './_components/AdminManageRecipe';

const AdminManageRecipe = async () => {
    const res = await fetch(`${envConfig.baseApi}/recipe`, {
        next: {
            tags: ["recipes"]
        }
    });
    const data = await res.json();
    const recipes = data?.data;

    return (
        <div>
            <AdminManageRecipeComponent recipes={recipes} />
        </div>
    );
};

export default AdminManageRecipe;
