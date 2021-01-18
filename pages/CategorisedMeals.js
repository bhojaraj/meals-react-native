import React from 'react';
import MealList from '../components/MealList';
import { CATEGORIES, MEALS } from '../data/dummy-data';

const CategoriesedMeals = props => {

    const catId = props.route.params.category.categoryId;
    // selectedCategory = CATEGORIES.find(cat => cat.id === catId);
    const displayedMeals = MEALS.filter(meal => meal.categoryIds.indexOf(catId) >= 0);
    return(
        <MealList listData={displayedMeals} navigation={props.navigation} />
    );
};

export default CategoriesedMeals;