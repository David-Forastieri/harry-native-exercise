import { View } from 'react-native'
import React from 'react'
import styles from './styles'

const Card = ({ children }) => {
  return (
    <View style={styles.card} >{children}</View>
  )
}

export default Card