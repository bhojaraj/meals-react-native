import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const MealDetail = props => {
    return (
        <View style={styles.container}>
            <Text>MealDetails screen</Text>
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