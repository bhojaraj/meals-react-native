import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Categories = props => {
    return(
        <View style={styles.container}>
            <Text>Filters screen!</Text>
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