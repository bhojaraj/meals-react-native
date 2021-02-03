import React, { useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import DefaultText from "../components/DefaultText";
import { toggleFavorite } from "../store/actions/meals";

const ListItem = props => {
    return(
        <View style={styles.listItem}>
            <DefaultText>{props.children}</DefaultText>
        </View>
    );
}
const MealDetail = props => {
    
    const availableMeals = useSelector(state => state.meals.meals),
    mealId = props.route.params.mealId,
    currentMealisFavorite = useSelector(state => 
        state.meals.favoriteMeals.some(meal => meal.id === mealId)
    );
    selectedMeal = availableMeals.find(meal => meal.id === mealId);

    const dispatch = useDispatch();

    const toggleFavoriteHandler = useCallback(() => {
        dispatch(toggleFavorite(mealId));
    }, [dispatch, mealId]);

    useEffect(() => {
        props.navigation.setParams({ toggleFav: toggleFavoriteHandler });
    }, [toggleFavoriteHandler]);

    useEffect(() => {
        props.navigation.setParams({ isFav: currentMealisFavorite })
    }, [currentMealisFavorite]);

    return (
        <ScrollView>
            <Image source={{uri: selectedMeal.imageUrl}} style={styles.image} />
            <View style={styles.details}>
                <DefaultText>{selectedMeal.duration}m</DefaultText>
                <DefaultText style={styles.textCase}>{selectedMeal.complexity}</DefaultText>
                <DefaultText style={styles.textCase}>{selectedMeal.affordability}</DefaultText>
            </View>
            <Text style={styles.title}>Ingredients</Text>
            {selectedMeal.ingredients.map(ingredient => (
                <ListItem key={ingredient}>{ingredient}</ListItem>
            ))}
            <Text style={styles.title}>Steps</Text>
            {selectedMeal.steps.map(step => (
                <ListItem key={step}>{step}</ListItem>
            ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200
    },
    details: {
        flexDirection: 'row',
        padding: 15,
        justifyContent: 'space-around'
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 22,
        textAlign: 'center'
    },
    listItem: {
        marginHorizontal: 20,
        marginVertical: 10,
        borderColor: '#ccc',
        borderWidth: 1,
        padding: 10
    },
    textCase: {
        textTransform: 'uppercase'
    }
  });

export default MealDetail;