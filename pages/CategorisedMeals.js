import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import MealItem from '../components/MealItem';
import { CATEGORIES, MEALS } from '../data/dummy-data';

const CategoriesedMeals = props => {

    const renderMealItem = itemData => {
        return <MealItem data={itemData.item} onSelectMeal={() => {}} />;
    };
    const catId = props.route.params.category.categoryId;
    // selectedCategory = CATEGORIES.find(cat => cat.id === catId);
    const displayedMeals = MEALS.filter(meal => meal.categoryIds.indexOf(catId) >= 0);
    return(
        <View style={styles.container}>
            <FlatList 
                data={displayedMeals} 
                keyExtractor={(item, index) => item.id} 
                renderItem={renderMealItem} 
                style={{width: '100%'}}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 10
    },
  });

export default CategoriesedMeals;