import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../screens/home'
import CharDetail from '../screens/details'

const ShopNavigator = () => {

  const Stack = createNativeStackNavigator()

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home} options={{ title: 'Character List' }} />
        <Stack.Screen name='Detail' component={CharDetail} options={{ title: 'Character Detail' }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default ShopNavigator