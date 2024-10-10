/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import React from "react";
import {
    Table,
    TableHeader,
    TableColumn,
    TableBody,
    TableRow,
    TableCell,
    User,
    Tooltip,
    Button,
} from "@nextui-org/react";
import Link from "next/link";




export const users = [
    {
        "_id": "6702a605f62f5214894fe0fa",
        "title": "Vegetarian Tacos",
        "description": "Tacos filled with a flavorful mixture of beans, vegetables, and spices.",
        "ingredients": [
            {
                "name": "Tortilla",
                "quantity": "4",
                "category": "Grains"
            },
            {
                "name": "Black beans",
                "quantity": "200g",
                "category": "Legumes"
            },
            {
                "name": "Bell pepper",
                "quantity": "1",
                "category": "Vegetables"
            },
            {
                "name": "Onion",
                "quantity": "1",
                "category": "Vegetables"
            }
        ],
        "instructions": [
            "Warm tortillas on a pan.",
            "Sauté onions and bell pepper until soft.",
            "Add black beans and spices, cook for 10 minutes.",
            "Serve the mixture in tortillas."
        ],
        "images": "https://res.cloudinary.com/dsdbqct3r/image/upload/v1728226820/rs6teoegxmvbb5oizpbc.jpg",
        "author": {
            "_id": "670192c7be62e566aca0ebbd",
            "name": "Md. Muzahid",
            "email": "mdmuzahid.dev@gmail.com",
            "password": "$2b$12$U6wWZQtUwGliuzvuKe5kYuhtCe9VLcqpFLawe8hqxdaMCvgTuW67.",
            "bio": "MERN Stack Developer",
            "role": "admin",
            "avatar": "https://res.cloudinary.com/dsdbqct3r/image/upload/v1728156356/nu2rok3pxi9cxsxrie0f.jpg",
            "isDeleted": false,
            "followers": [],
            "following": [],
            "membership": null,
            "createdAt": "2024-10-05T19:25:59.096Z",
            "updatedAt": "2024-10-06T17:20:05.598Z",
            "__v": 0,
            "isBlocked": false
        },
        "category": "Mexican",
        "cookingTime": {
            "prep": 10,
            "cook": 15
        },
        "servings": 4,
        "comments": [],
        "upVotes": [
            "6702a60ff62f5214894fe0fe"
        ],
        "downVotes": [],
        "isPremium": false,
        "tags": [
            "Vegetarian",
            "Tacos"
        ],
        "nutritionInfo": {
            "calories": 280,
            "fat": "8g",
            "carbohydrates": "40g",
            "protein": "10g"
        },
        "videoUrl": "https://youtube.com/veg-tacos",
        "difficulty": "Easy",
        "ingredientChecklist": [
            {
                "ingredientId": "1",
                "isChecked": false,
                "customName": "",
                "customQuantity": ""
            },
            {
                "ingredientId": "2",
                "isChecked": false,
                "customName": "",
                "customQuantity": ""
            }
        ],
        "isDeleted": false,
        "isPublished": true,
        "ratings": [],
        "createdAt": "2024-10-06T15:00:21.787Z",
        "updatedAt": "2024-10-06T16:44:55.455Z",
        "__v": 1
    },
    {
        "_id": "6702a605f62f5214894fe0ff",
        "title": "Vegan Buddha Bowl",
        "description": "A colorful bowl filled with quinoa, roasted vegetables, and avocado.",
        "ingredients": [
            {
                "name": "Quinoa",
                "quantity": "1 cup",
                "category": "Grains"
            },
            {
                "name": "Sweet potato",
                "quantity": "1",
                "category": "Vegetables"
            },
            {
                "name": "Avocado",
                "quantity": "1",
                "category": "Fruits"
            },
            {
                "name": "Spinach",
                "quantity": "1 cup",
                "category": "Vegetables"
            }
        ],
        "instructions": [
            "Cook quinoa according to package instructions.",
            "Roast sweet potatoes until tender.",
            "Slice avocado and prepare spinach.",
            "Assemble all ingredients in a bowl and serve."
        ],
        "images": "https://res.cloudinary.com/dsdbqct3r/image/upload/v1728156356/johndoe.jpg",
        "category": "Vegan",
        "cookingTime": {
            "prep": 15,
            "cook": 30
        },
        "servings": 2,
        "comments": [],
        "upVotes": [],
        "downVotes": [],
        "isPremium": false,
        "tags": [
            "Healthy",
            "Vegan"
        ],
        "nutritionInfo": {
            "calories": 450,
            "fat": "12g",
            "carbohydrates": "55g",
            "protein": "15g"
        },
        "videoUrl": "https://youtube.com/vegan-buddha-bowl",
        "difficulty": "Easy",
        "ingredientChecklist": [
            {
                "ingredientId": "1",
                "isChecked": false,
                "customName": "",
                "customQuantity": ""
            }
        ],
        "isDeleted": false,
        "isPublished": true,
        "ratings": [],
        "createdAt": "2024-10-07T17:00:21.787Z",
        "updatedAt": "2024-10-07T17:30:55.455Z",
        "__v": 0
    },
    {
        "_id": "6702a605f62f5214894fe100",
        "title": "Chocolate Chip Cookies",
        "description": "Classic chewy chocolate chip cookies.",
        "ingredients": [
            {
                "name": "Butter",
                "quantity": "200g",
                "category": "Dairy"
            },
            {
                "name": "Sugar",
                "quantity": "150g",
                "category": "Sweeteners"
            },
            {
                "name": "Flour",
                "quantity": "300g",
                "category": "Grains"
            },
            {
                "name": "Chocolate chips",
                "quantity": "100g",
                "category": "Sweeteners"
            }
        ],
        "instructions": [
            "Preheat oven to 180°C.",
            "Cream together butter and sugar.",
            "Mix in flour and fold in chocolate chips.",
            "Scoop dough onto baking sheet and bake for 12 minutes."
        ],
        "images": "https://res.cloudinary.com/dsdbqct3r/image/upload/v1728156356/johndoe.jpg",
        "category": "Desserts",
        "cookingTime": {
            "prep": 10,
            "cook": 12
        },
        "servings": 24,
        "comments": [],
        "upVotes": [],
        "downVotes": [],
        "isPremium": false,
        "tags": [
            "Cookies",
            "Desserts"
        ],
        "nutritionInfo": {
            "calories": 120,
            "fat": "6g",
            "carbohydrates": "15g",
            "protein": "2g"
        },
        "videoUrl": "https://youtube.com/chocolate-chip-cookies",
        "difficulty": "Easy",
        "ingredientChecklist": [
            {
                "ingredientId": "1",
                "isChecked": false,
                "customName": "",
                "customQuantity": ""
            }
        ],
        "isDeleted": false,
        "isPublished": true,
        "ratings": [],
        "createdAt": "2024-10-07T18:00:21.787Z",
        "updatedAt": "2024-10-07T18:30:55.455Z",
        "__v": 0
    },
    {
        "_id": "6702a605f62f5214894fe101",
        "title": "BBQ Chicken Wings",
        "description": "Juicy grilled chicken wings coated in smoky BBQ sauce.",
        "ingredients": [
            {
                "name": "Chicken wings",
                "quantity": "1kg",
                "category": "Meat"
            },
            {
                "name": "BBQ sauce",
                "quantity": "200ml",
                "category": "Sauces"
            }
        ],
        "instructions": [
            "Grill chicken wings until fully cooked.",
            "Brush wings with BBQ sauce and grill for 5 more minutes.",
            "Serve hot."
        ],
        "images": "https://res.cloudinary.com/dsdbqct3r/image/upload/v1728156356/johndoe.jpg",
        "category": "Appetizers",
        "cookingTime": {
            "prep": 15,
            "cook": 30
        },
        "servings": 4,
        "comments": [],
        "upVotes": [],
        "downVotes": [],
        "isPremium": false,
        "tags": [
            "BBQ",
            "Chicken"
        ],
        "nutritionInfo": {
            "calories": 350,
            "fat": "22g",
            "carbohydrates": "15g",
            "protein": "25g"
        },
        "videoUrl": "https://youtube.com/bbq-chicken-wings",
        "difficulty": "Medium",
        "ingredientChecklist": [
            {
                "ingredientId": "1",
                "isChecked": false,
                "customName": "",
                "customQuantity": ""
            }
        ],
        "isDeleted": false,
        "isPublished": true,
        "ratings": [],
        "createdAt": "2024-10-07T19:00:21.787Z",
        "updatedAt": "2024-10-07T19:30:55.455Z",
        "__v": 0
    }

];



export const columns = [
    { name: "TITLE", uid: "title" },
    { name: "CATEGORY", uid: "category" },
    { name: "COOKING TIME", uid: "cookingTime" },
    { name: "SERVINGS", uid: "servings" },
    { name: "ACTIONS", uid: "actions" },
];




const ManageRecipePage = () => {

    const renderCell = React.useCallback((recipe: any, columnKey: any) => {
        const cellValue = recipe[columnKey];

        switch (columnKey) {
            case "title":
                return (
                    <User
                        avatarProps={{ radius: "lg", src: recipe.images }}
                        name={cellValue}
                        description={recipe.description}
                    />
                );
            case "category":
                return <p className="capitalize">{cellValue}</p>;
            case "cookingTime":
                return <p>{recipe.cookingTime.prep + recipe.cookingTime.cook} mins</p>;
            case "servings":
                return <p>{cellValue}</p>;
            case "actions":
                return (
                    <div className="relative flex items-center gap-2">
                        <Tooltip content="Edit Recipe">
                            <Button as={Link} href="/dashboard/update-recipe" className="text-lg  active:opacity-50 text-white bg-yellow-500">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-pencil-off"><path d="m10 10-6.157 6.162a2 2 0 0 0-.5.833l-1.322 4.36a.5.5 0 0 0 .622.624l4.358-1.323a2 2 0 0 0 .83-.5L14 13.982" /><path d="m12.829 7.172 4.359-4.346a1 1 0 1 1 3.986 3.986l-4.353 4.353" /><path d="m15 5 4 4" /><path d="m2 2 20 20" /></svg>
                            </Button>
                        </Tooltip>
                        <Tooltip content="Delete Recipe">
                            <Button className="text-lg bg-red-500 text-white active:opacity-50">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-trash-2"><path d="M3 6h18" /><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" /><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" /><line x1="10" x2="10" y1="11" y2="17" /><line x1="14" x2="14" y1="11" y2="17" /></svg>
                            </Button>
                        </Tooltip>
                    </div>
                );
            default:
                return cellValue;
        }
    }, []);


    return (
        <section className="bg-yellow-500 h-screen">
            <section className="max-w-7xl mx-auto py-20">
                <h1 className="mb-14 text-2xl md:text-4xl lg:text-6xl font-bold">Manage Recipes</h1>
                <Table aria-label="Recipe Management Table">
                    <TableHeader columns={columns}>
                        {(column) => (
                            <TableColumn key={column.uid}>{column.name}</TableColumn>
                        )}
                    </TableHeader>
                    <TableBody items={users}>
                        {(item) => (
                            <TableRow key={item._id}>
                                {(columnKey) => (
                                    <TableCell>
                                        {renderCell(item, columnKey)}
                                    </TableCell>
                                )}
                            </TableRow>
                        )}
                    </TableBody>
                </Table>

            </section>
        </section>
    );
}

export default ManageRecipePage;