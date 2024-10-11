/* eslint-disable @typescript-eslint/no-explicit-any */
import { Chip } from "@nextui-org/chip"

const recipe = {
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
}

const DetailsPageBanner = ({ recipe }: any) => {
    return (
        <section className="bg-[url('https://res.cloudinary.com/dsdbqct3r/image/upload/v1728369437/1812_fo8i2y.jpg')] h-[350px] sm:h-[400px] md:h-[500] lg:h-[650px] bg-no-repeat bg-cover bg-center w-full">
            <div className=" bg-slate-950 bg-opacity-45 h-full w-full">
                <div className="max-w-7xl mx-auto w-full px-6 flex items-center h-full">
                    <div className="flex flex-col">
                        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-slate-100 text-left">{recipe?.title}</h1>
                        <p className="text-2xl md:text-4xl text-slate-100 mt-7">{recipe?.description}</p>
                        <div className="mt-5">
                            <Chip color="warning" className="text-sm sm:text-xl bg-yellow-500 px-3 sm:px-5 py-4 sm:py-6" variant="solid">
                                <span className="font-bold tracking-wider">
                                    By {recipe?.author?.name} | {recipe?.category}
                                </span>
                            </Chip>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default DetailsPageBanner