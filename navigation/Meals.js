import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
// import { createAppContainer } from 'react-navigation';
// import { createStackNavigator } from 'react-navigation-stack';
import Categories from '../pages/Categories';
import CategorisedMeals from '../pages/CategorisedMeals';
import MealDetail from '../pages/MealDetail';
import Colors from '../constants/Colors';
// const MealsNavigator = createStackNavigator({
//     Categories: Categories,
//     CategorisedMeals: {
//         screen: CategorisedMeals
//     },
//     MealDetail: MealDetail
// });
// commented code is of react navigation older versions, works as expected but need to change navigation routeName in components 
const Stack = createStackNavigator();

const MealsNavigator = () => {
    // screenOptions is default style which gets added to any screens in navigation
    return(
        <NavigationContainer>
            <Stack.Navigator 
                // initialRouteName='MealDetail'
                // mode="modal"
                screenOptions={{
                    title: 'Welcome',
                    headerStyle: {
                        backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
                    },
                    headerTintColor: Platform.OS === 'android' ? '#fff' : Colors.primaryColor
                }}
            >
                <Stack.Screen 
                    name="Categories" 
                    component={Categories} 
                    options={{ title: 'Meal Categoires' }} 
                />
                <Stack.Screen 
                    name="CategorisedMeals" 
                    component={CategorisedMeals} 
                    options={({route}) => ({ title: route.params.category.categoryTitle })} 
                />
                <Stack.Screen 
                    name="MealDetail" 
                    component={MealDetail} 
                    options={{title: 'Meal Details'}}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default MealsNavigator;