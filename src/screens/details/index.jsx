import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import Card from '../../components/card'
import styles from './styles'

const CharDetail = ({ characters, characterId, viewDetail }) => {

  const [characterSelected, setCharacterSelected] = useState([])

  useEffect(() => {
    if (characterSelected.length < 1) {
      setCharacterSelected(characters.filter(char => char.id === characterId))
    }
    return () => setCharacterSelected([])
  }, [characterId])

  return (
    <>
      <View>
        <TouchableOpacity style={styles.buttonBack} onPress={() => viewDetail(false)}>
          <Text style={styles.backIcon}>{'<-'}</Text>
        </TouchableOpacity>
      </View>
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
    </>
  )
}

export default CharDetail