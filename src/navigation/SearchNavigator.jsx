import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SearchCharacter from '../screens/searchCharacter/SearchCharacter';

const Stack = createNativeStackNavigator()

export default SearchNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} >
      <Stack.Screen name="SearchCharacter" component={SearchCharacter} />
    </Stack.Navigator>
  )
}