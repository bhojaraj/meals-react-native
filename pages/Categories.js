import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import CategoryGridTile from '../components/CategoryGridTile';
import { CATEGORIES } from '../data/dummy-data';

const Categories = props => {

    const renderGridItem = (itemData) => {
        return (
            <CategoryGridTile category={itemData.item} onSelect={() => {
                props.navigation.navigate('CategorisedMeals', { category: {
                    categoryId: itemData.item.id,
                    categoryTitle: itemData.item.title,
                    categoryColor: itemData.item.color
                }});
            }} />);
    };

    return (
        <FlatList 
            keyExtractor={(item, index) => item.id}
            numColumns={2} 
            data={CATEGORIES} 
            renderItem={renderGridItem} 
        />
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    }
  });

export default Categories;