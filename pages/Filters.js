import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, StyleSheet, Switch, Platform, Button } from 'react-native';
import { useDispatch } from "react-redux";
import Colors from '../constants/Colors';
import { setFilters } from "../store/actions/meals";

const FilterSwitch = props => {
  return(
          <View style={styles.filterContainer}>
            <Text>{props.label}</Text>
            <Switch 
              trackColor={{
                true: Colors.primaryColor
              }}
              thumbColor={Platform.OS === 'android' ? Colors.primaryColor : ''}
              value={props.state} 
              onValueChange={props.onChange} 
            />
          </View>
  );
};
const Filters = props => {

  const { navigation } = props;

  const [isGlutenFree, setIsGlutenFree] = useState(false),
  [isLactoseFree, setIsLactoseFree] = useState(false),
  [isVegan, setIsVegan] = useState(false),
  [isVegetarian, setIsVegetarian] = useState(false);

  const dispatch = useDispatch();

  const saveFilters = useCallback(() => {
    const appliedFilters = {
      glutenFree: isGlutenFree,
      lactoseFree: isLactoseFree,
      vegan: isVegan,
      vegetarian: isVegetarian
    };

    return dispatch(setFilters(appliedFilters));
  }, [isGlutenFree, isLactoseFree, isVegan, isVegetarian, dispatch]);

  useEffect(() => {
    navigation.setParams({save: saveFilters()
    });
  }, [saveFilters]);

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Available Filters / Restrictions</Text>
            <FilterSwitch 
              label="Gluten-free" 
              state={isGlutenFree} 
              onChange={newValue => setIsGlutenFree(newValue)} 
            />
            <FilterSwitch 
              label="Lactose-free" 
              state={isLactoseFree} 
              onChange={newValue => setIsLactoseFree(newValue)} 
            />
            <FilterSwitch 
              label="Vegan" 
              state={isVegan} 
              onChange={newValue => setIsVegan(newValue)} 
            />
            <FilterSwitch 
              label="Vegetarian" 
              state={isVegetarian} 
              onChange={newValue => setIsVegetarian(newValue)} 
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
    },
    title: {
      fontFamily: 'open-sans-bold',
      fontSize: 22,
      margin: 20,
      textAlign: 'center'
    },
    filterContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '80%',
      marginVertical: 10
    }
  });

export default Filters;