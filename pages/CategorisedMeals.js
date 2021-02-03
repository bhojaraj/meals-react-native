import React from 'react';
import { useSelector } from 'react-redux';
import MealList from '../components/MealList';

const CategoriesedMeals = props => {

    const catId = props.route.params.category.categoryId,
    availableMeals = useSelector(state => state.meals.filteredMeals),
    displayedMeals = availableMeals.filter(meal => meal.categoryIds.indexOf(catId) >= 0);
    return(
        <MealList listData={displayedMeals} navigation={props.navigation} />
    );
};

export default CategoriesedMeals;