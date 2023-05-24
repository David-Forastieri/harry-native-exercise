import { View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import SearchNavigator from '../SearchNavigator'
import CharacterNavigator from '../CharacterNavigator'
import { Ionicons } from '@expo/vector-icons';
import styles from './styles'

const BottomTabs = createBottomTabNavigator()

const BotomTabsNavigator = () => {
  return (
    <BottomTabs.Navigator screenOptions={{ headerShown: false, tabBarShowLabel: false, tabBarStyle: styles.tabs }}>
      <BottomTabs.Screen name="Character List" component={CharacterNavigator} options={{
        tabBarIcon: () => (
          <View>
            <Ionicons name="md-home" size={24} color="white" />
          </View>
        )
      }} />
      <BottomTabs.Screen name="SearchNavigator" component={SearchNavigator} options={{
        tabBarIcon: () => (
          <View>
            <Ionicons name="search" size={24} color="white" />
          </View>
        )
      }} />
    </BottomTabs.Navigator>
  )
}

export default BotomTabsNavigator