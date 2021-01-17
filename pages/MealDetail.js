import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { MEALS } from '../data/dummy-data';

const MealDetail = props => {
    const mealId = props.route.params.mealId;
    const selectedMeal = MEALS.find(meal => meal.id === mealId);

    return (
        <View style={styles.container}>
            <Text>{selectedMeal.title}</Text>
            <Button title="Go back to Categories" onPress={() => {
                props.navigation.popToTop();
            }}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default MealDetail;