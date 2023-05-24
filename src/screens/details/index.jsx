import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import Card from '../../components/card'
import styles from './styles'

const CharDetail = ({ route }) => {

  const [characterSelected, setCharacterSelected] = useState([])

  const { id, characters } = route.params

  useEffect(() => {
    setCharacterSelected(characters.filter(char => char.id === id))
    return () => setCharacterSelected([])
  }, [id])

  return (
    <View style={styles.container}>
      {characterSelected[0] &&
        <Card>
          <Image style={styles.image} source={{
            uri: characterSelected[0].image || "https://www.nicepng.com/png/detail/798-7984274_https-profile-pic-no-photo-available.png"
          }} />
          <Text style={styles.textList}>Name:{characterSelected[0].name || "not info"}</Text>
          <Text style={styles.textList}>Actor:{characterSelected[0].actor || "not info"}</Text>
          <Text style={styles.textList}>House:{characterSelected[0].house || "not info"}</Text>
        </Card>
      }
    </View>
  )
}

export default CharDetail