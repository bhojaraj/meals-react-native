import React from 'react';
import { Platform } from "react-native";
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
// import { createAppContainer } from 'react-navigation';
// import { createStackNavigator } from 'react-navigation-stack';
import Categories from '../pages/Categories';
import CategorisedMeals from '../pages/CategorisedMeals';
import MealDetail from '../pages/MealDetail';
import Favorites from '../pages/Favorites';
import Filters from "../pages/Filters";
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
                screenOptions={({navigation}) => ({
                    title: 'Meals',
                    headerStyle: {
                        backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
                    },
                    headerTintColor: Platform.OS === 'android' ? '#fff' : Colors.primaryColor,
                    headerLeft: () => (<HeaderButtons HeaderButtonComponent={HeaderButton}>
                        <Item name="Menu" iconName="ios-menu" onPress={() => {navigation.toggleDrawer()}} 
                    />
                    </HeaderButtons>)
                })}
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

const FavoritesNavigator = () => {
    return(
        <Stack.Navigator
            screenOptions={({navigation}) => ({
                title: 'Favorites',
                headerStyle: {
                    backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
                },
                headerTintColor: Platform.OS === 'android' ?  '#fff' : Colors.primaryColor,
                headerLeft: () => (<HeaderButtons HeaderButtonComponent={HeaderButton}>
                    <Item name="Menu" iconName="ios-menu" onPress={() => {navigation.toggleDrawer()}} 
                />
                </HeaderButtons>)
            })}
        >
            <Stack.Screen 
                name="Favorites" 
                component={ Favorites } 
                options={{ title: 'Your Favorites' }} 
            />
            <Stack.Screen 
                name="MealDetail"
                component={ MealDetail }
                options={{ title: 'Meal Details' }}
            />
        </Stack.Navigator>
    );
};

const FiltersNavigator = () => {
    return(
        <Stack.Navigator
            screenOptions={({navigation}) => ({
                title: 'Filter Meals',
                headerStyle: {
                    backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
                },
                headerTintColor: Platform.OS === 'android' ?  '#fff' : Colors.primaryColor,
                headerLeft: () => (<HeaderButtons HeaderButtonComponent={HeaderButton}>
                    <Item name="Menu" iconName="ios-menu" onPress={() => {navigation.toggleDrawer()}} 
                />
                </HeaderButtons>)
            })}
        >
            <Stack.Screen 
                name="Filters"
                component={Filters}
                options={{title: 'Filter Meals'}}
            />   
        </Stack.Navigator>
    );
};


const Tab = Platform.OS === 'android' ? createMaterialBottomTabNavigator() : createBottomTabNavigator();

const MealsFavTabNavigator = () => {
    return(
            <Tab.Navigator 
                tabBarOptions={{
                    activeTintColor: Colors.accentColor,
                    labelStyle: {
                        fontSize: 18
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
                    component={FavoritesNavigator} 
                    options={{
                        tabBarLabel: 'Favorites!',
                        tabBarIcon:({color}) => {
                            return <Ionicons name="ios-star" size={25} color={color} />;
                        },
                        tabBarColor: Colors.accentColor
                    }}
                />
            </Tab.Navigator>
    );
};

const Drawer = createDrawerNavigator();

const MainNavigator = () => {
    return(
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name="MealsFav" component={MealsFavTabNavigator} />
                <Drawer.Screen name="Filters" component={FiltersNavigator} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
};

export default MainNavigator;