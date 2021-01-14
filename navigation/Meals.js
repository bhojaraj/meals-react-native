import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Categories from '../pages/Categories';
import CategorisedMeals from '../pages/CategorisedMeals';
import MealDetail from '../pages/MealDetail';

const MealsNavigator = createStackNavigator({
    Categories: Categories,
    CategorisedMeals: {
        screen: CategorisedMeals
    },
    MealDetail: MealDetail
});

export default createAppContainer(MealsNavigator);