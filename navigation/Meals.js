import React from 'react';
import { Platform, Text } from "react-native";
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Categories from '../pages/Categories';
import CategorisedMeals from '../pages/CategorisedMeals';
import MealDetail from '../pages/MealDetail';
import Favorites from '../pages/Favorites';
import Filters from "../pages/Filters";
import Colors from '../constants/Colors';

const Stack = createStackNavigator();

const screenNavOptions = {
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
    },
    headerTitleStyle: {
        fontFamily: 'open-sans-bold',
    },
    headerBackTitleStyle: {
        fontFamily: 'open-sans',
    }, 
    headerTintColor: Platform.OS === 'android' ? '#fff' : Colors.primaryColor
};

const MealsNavigator = () => {
    // screenOptions is default style which gets added to any screens in navigation
    return(
            <Stack.Navigator screenOptions={screenNavOptions}>
                <Stack.Screen 
                    name="Categories" 
                    component={Categories} 
                    options={({navigation}) => ({ 
                        title: 'Meal Categoires',
                        headerLeft: () => (<HeaderButtons HeaderButtonComponent={HeaderButton}>
                            <Item name="Menu" iconName="ios-menu" onPress={() => {navigation.toggleDrawer()}} 
                        />
                        </HeaderButtons>)
                    })} 
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
                                    iconName={ route.params.isFav ? "ios-star" : "ios-star-outline" }
                                    onPress={route.params.toggleFav} 
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
        <Stack.Navigator screenOptions={screenNavOptions}>
            <Stack.Screen 
                name="Favorites" 
                component={ Favorites } 
                options={({navigation}) => ({ 
                    title: 'Your Favorites',
                    headerLeft: () => (<HeaderButtons HeaderButtonComponent={HeaderButton}>
                        <Item name="Menu" iconName="ios-menu" onPress={() => {navigation.toggleDrawer()}} 
                    />
                    </HeaderButtons>)
                })} 
            />
            <Stack.Screen 
                name="MealDetail"
                component={ MealDetail }
                options={({route}) => ({ 
                    title: route.params.mealTitle,
                    headerRight: () => (
                        <HeaderButtons HeaderButtonComponent={HeaderButton}>
                            <Item 
                                title="Favorite"
                                iconName={ route.params.isFav ? "ios-star" : "ios-star-outline" }
                                onPress={ route.params.toggleFav }
                            />
                        </HeaderButtons>
                    )
                })}
            />
        </Stack.Navigator>
    );
};

const FiltersNavigator = () => {
    return(
        <Stack.Navigator screenOptions={screenNavOptions}>
            <Stack.Screen 
                name="Filters"
                component={Filters}
                options={({route, navigation}) => ({
                    title: 'Filter Meals',
                    headerLeft: () => (<HeaderButtons HeaderButtonComponent={HeaderButton}>
                        <Item title="Menu" iconName="ios-menu" onPress={() => {navigation.toggleDrawer()}} 
                    />
                    </HeaderButtons>),
                    headerRight: () => (<HeaderButtons HeaderButtonComponent={HeaderButton}>
                        <Item title="Save" iconName="ios-save" onPress={() => {
                            const filters = route.params?.save ?? '';
                            if( filters ) filters();
                        }} />
                    </HeaderButtons>)
                })}
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
                        fontFamily: 'open-sans-bold',
                        fontSize: 16
                    }
                }}
                // above prop is for ios tab creator and below are props for android tab creator
                activeColor='white'
                shifting={true}
                // below props is for background of bar, applies background when shifting is false
                barStyle={{
                    backgroundColor: Colors.primaryColor
                }}
            >
                <Tab.Screen 
                    name="Meals" 
                    component={MealsNavigator} 
                    options={{
                        tabBarLabel: Platform.OS === 'android' ? <Text style={{fontFamily: 'open-sans-bold'}}>Meals</Text> : 'Meals!',
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
                        tabBarLabel: Platform.OS === 'android' ? <Text style={{fontFamily: 'open-sans-bold'}}>Favorites</Text> : 'Favorites!',
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
            <Drawer.Navigator
                drawerContentOptions={{
                    activeTintColor: Colors.accentColor,
                    labelStyle: {
                        fontFamily: 'open-sans-bold'
                    }
                }}
                >
                <Drawer.Screen 
                    name="MealsFav" 
                    component={MealsFavTabNavigator} 
                    options={{title: 'Meals'}} 
                />
                <Drawer.Screen 
                    name="Filters" 
                    component={FiltersNavigator} 
                    options={{title: 'Filters'}}
                />
            </Drawer.Navigator>
        </NavigationContainer>
    );
};

export default MainNavigator;