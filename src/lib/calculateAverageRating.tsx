/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
const calculateAverageRating = (ratings: any) => {
    if (ratings.length === 0) {
        return 0
    } else {
        const totalRatings = ratings.reduce((sum: any, rating: any) => sum + rating.rating, 0);
        const calculateAverageRating = totalRatings / ratings.length;

        return parseFloat(calculateAverageRating.toFixed(2));
    }
}

export default calculateAverageRating;