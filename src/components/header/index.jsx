import { View, Text } from 'react-native'
import React from 'react'
import styles from './styles'

const Header = ({ extraStyles }) => {
  return (
    <View style={styles.header}>
      <Text style={{ ...styles.title, ...extraStyles }} >Harry App</Text>
    </View>
  )
}

export default Header