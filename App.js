//import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { useFonts } from 'expo-font'
import Header from './src/components/header';
import { NavigationContainer } from '@react-navigation/native'
import BotomTabsNavigator from './src/navigation/BottomTabNavigator/BotomTabsNavigator';

export default function App() {

  const [loaded] = useFonts({
    "ShadowsIntoLight-Regular": require("./src/assets/fonts/ShadowsIntoLight-Regular.ttf")
  })

  if (!loaded) {
    return null
  }

  return (
    <View style={styles.container}>
      <Header extraStyles={styles.fontStyle} />
      <NavigationContainer>
        <BotomTabsNavigator />
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fontStyle: {
    fontFamily: "ShadowsIntoLight-Regular"
  }
});
