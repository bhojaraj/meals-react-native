import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import DefaultText from './DefaultText';

const MealItem = props => {

    return (
        <View style={styles.mealItem}>
            <TouchableOpacity onPress={props.onSelectMeal}>
                <View>
                    <View style={{...styles.mealRow, ...styles.mealHeader}}>
                        <ImageBackground source={{uri: props.data.imageUrl}} style={styles.bgImage}>
                            <View style={styles.titleContainer}>
                                <Text style={styles.title} numberOfLines={1}>{props.data.title}</Text>
                            </View> 
                        </ImageBackground>
                    </View>
                    <View style={{...styles.mealRow, ...styles.mealDetail}}>
                        <DefaultText>{props.data.duration}m</DefaultText>
                        <DefaultText style={styles.textCase}>{props.data.complexity}</DefaultText>
                        <DefaultText style={styles.textCase}>{props.data.affordability}</DefaultText>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    mealItem: {
        height: 200,
        marginVertical: 10,
        width: '100%',
        backgroundColor: '#ddd',
        borderRadius: 10,
        overflow: 'hidden'
    },
    mealRow: {
        flexDirection: 'row'
    },
    mealHeader: {
        height: '85%',
    },
    bgImage: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end'
    },
    titleContainer:{
        backgroundColor: 'rgba(0,0,0,0.5)',
        paddingVertical: 5,
        paddingHorizontal: 12,
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 20,
        color: 'white',
        textAlign: 'center'
    },
    mealDetail: {
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '15%'
    },
    textCase:{
        textTransform: 'uppercase'
    }
});

export default MealItem;