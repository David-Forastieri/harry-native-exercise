import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../screens/home'
import CharDetail from '../screens/details'

const CharacterNavigator = () => {

  const Stack = createNativeStackNavigator()

  return (
    <Stack.Navigator>
      <Stack.Screen name='Home' component={Home} options={{ title: 'Character List' }} />
      <Stack.Screen name='Detail' component={CharDetail} options={{ title: 'Character Detail' }} />
    </Stack.Navigator>
  )
}

export default CharacterNavigator