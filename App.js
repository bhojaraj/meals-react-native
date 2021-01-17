import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import Meals from './navigation/Meals';
import { enableScreens } from 'react-native-screens';
import { Provider } from 'react-native-paper';


enableScreens();

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  });
};

export default function App() {

  const [ fontLoaded, setFontLoaded ] = useState(false);

  if(!fontLoaded) {
    return (<AppLoading 
              startAsync={fetchFonts} 
              onFinish={() => setFontLoaded(true)}
              onError={(err) => console.log(err)} 
            />
    );
  }
  return (
    <Provider>
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Meals />
    </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
