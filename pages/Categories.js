import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const Categories = props => {
    return (
        <View style={styles.container}>
            <Text>Category Screen</Text>
            <Button title="Go to Categorised Meals" onPress={() => {
                props.navigation.navigate({routeName: 'CategorisedMeals'});
            }} />
            {/* props.navigation.push('CategoriesedMeals'); this is similar to the above used but can be helpful when route is in same page (navigation effect will be shown) 
                props.navigation.pop(); this is for going back and used in stack route only
                props.navigation.goBack(); this is also for going back and available in other navigator also 
                props.navigation.popToTop(); this is for going back to the first screen 
                props.navigation.replace('CategorisedMeals'); this is used when going back functionality need to be removed */}
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

export default Categories;