//import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { useFonts } from 'expo-font'
import Home from './src/screens/home';
import Header from './src/components/header';


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
      <Home />
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
