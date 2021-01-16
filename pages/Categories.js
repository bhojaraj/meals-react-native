import React from 'react';
import { 
    View, 
    Text, 
    StyleSheet, 
    FlatList, 
    Button, 
    TouchableOpacity,
    Platform
} from 'react-native';
import CategoryGridTile from '../components/CategoryGridTile';
import Colors from '../constants/Colors';
import { CATEGORIES } from '../data/dummy-data';

const Categories = props => {

    // can update like this but it is not recommended unless it is necessary
    // props.navigation.setOptions({
    //     title: 'Modified!'
    // });

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
        <React.Fragment>
            <FlatList 
                keyExtractor={(item, index) => item.id}
                numColumns={2} 
                data={CATEGORIES} 
                renderItem={renderGridItem} 
            />
            <Button title="Change header" onPress={() => {
                props.navigation.setOptions({ 
                    title: 'Changed!',
                    headerStyle: {
                        backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
                    },
                    headerTintColor: Platform.OS === 'android' ? '#fff' : Colors.primaryColor
                });
            }}/>
        {/* previous screen used, above is same implamentation with FlastList
        <View style={styles.container}>
            <Text>Category Screen</Text>
            <Button title="Go to Categorised Meals" onPress={() => {
                props.navigation.navigate({routeName: 'CategorisedMeals'});
            }} />
                props.navigation.push('CategoriesedMeals'); this is similar to the above used but can be helpful when route is in same page (navigation effect will be shown) 
                props.navigation.pop(); this is for going back and used in stack route only
                props.navigation.goBack(); this is also for going back and available in other navigator also 
                props.navigation.popToTop(); this is for going back to the first screen 
                props.navigation.replace('CategorisedMeals'); this is used when going back functionality need to be removed
        </View> */}
        </React.Fragment>
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