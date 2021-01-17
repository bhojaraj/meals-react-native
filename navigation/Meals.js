import React from 'react';
import { Platform } from "react-native";
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
// import { createAppContainer } from 'react-navigation';
// import { createStackNavigator } from 'react-navigation-stack';
import Categories from '../pages/Categories';
import CategorisedMeals from '../pages/CategorisedMeals';
import MealDetail from '../pages/MealDetail';
import Favorites from '../pages/Favorites';
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
                    options={({route}) =>  ({ 
                        title: route.params.mealTitle,
                        headerRight: () => (
                            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                                <Item 
                                    title="Favorite"
                                    iconName="ios-star"
                                    onPress={() => {
                                        console.log('mark as favorite');
                                    }} 
                                />
                                {/* can add multiple buttons 
                                <Item 
                                    title="Favorite"
                                    iconName="ios-star-outline"
                                    onPress={() => {
                                        console.log('mark as favorite');
                                    }} 
                                /> */}
                            </HeaderButtons>
                        )
                    })}
                />
            </Stack.Navigator>
    );
};


const Tab = Platform.OS === 'android' ? createMaterialBottomTabNavigator() : createBottomTabNavigator();

const MealsFavTabNavigator = () => {
    return(
        <NavigationContainer>
            <Tab.Navigator 
                tabBarOptions={{
                    activeTintColor: Colors.accentColor,
                    labelStyle: {
                        fontSize: 16
                    }
                }}
                // above prop is for ios tab creator and below are props for android tab creator
                activeColor='white'
                shifting={true}
                // below props is for background of bar if shifting is false
                barStyle={{
                    backgroundColor: Colors.primaryColor
                }}
            >
                <Tab.Screen 
                    name="Meals" 
                    component={MealsNavigator} 
                    options={{
                        tabBarLabel: 'Meals!',
                        tabBarIcon: ({color}) => {
                            return <Ionicons name="ios-restaurant" size={25} color={color} />;
                        },
                        tabBarColor: Colors.primaryColor
                    }} 
                />
                <Tab.Screen 
                    name="Favorites" 
                    component={Favorites} 
                    options={{
                        tabBarLabel: 'Favorites!',
                        tabBarIcon:({color}) => {
                            return <Ionicons name="ios-star" size={25} color={color} />;
                        },
                        tabBarColor: Colors.accentColor
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default MealsFavTabNavigator;