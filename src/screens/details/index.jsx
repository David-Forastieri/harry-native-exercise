import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import Card from '../../components/card'
import styles from './styles'

const CharDetail = ({ route }) => {

  const [characterSelected, setCharacterSelected] = useState([])

  const { id, characters } = route.params

  useEffect(() => {
    if (characterSelected.length < 1) {
      setCharacterSelected(characters.filter(char => char.id === id))
    }
    return () => setCharacterSelected([])
  }, [id])

  return (
    <View style={styles.container}>
      {characterSelected[0] &&
        <Card>
          <Image style={styles.image} source={{
            uri: characterSelected[0].image,
          }} />
          <Text style={styles.textList}>Name:{characterSelected[0].name}</Text>
          <Text style={styles.textList}>Actor:{characterSelected[0].actor}</Text>
          <Text style={styles.textList}>House:{characterSelected[0].house}</Text>
        </Card>
      }
    </View>
  )
}

export default CharDetail