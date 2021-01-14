import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const CategoriesedMeals = props => {
    return(
        <View style={styles.container}>
            <Text>CategorisedMeals screen!</Text>
            <Button title="Go to Meal Details" onPress={() => {
                props.navigation.navigate('MealDetail')
            }}/>
            <Button title="Go Back" onPress={() => {
                props.navigation.goBack();
            }} />
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

export default CategoriesedMeals;