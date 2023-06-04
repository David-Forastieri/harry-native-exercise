import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import Card from '../../components/card'
import styles from './styles'
import { useSelector } from 'react-redux'

const CharDetail = () => {

  const CharacterSelected = useSelector(state => state.selectedCharacter)
  const [characterDetail, setCharacterDetail] = useState({})

  useEffect(() => {
    setCharacterDetail(CharacterSelected)
  }, [CharacterSelected])

  return (
    <View style={styles.container}>
      {characterDetail &&
        <Card>
          <Image style={styles.image} source={{
            uri: characterDetail.image || "https://www.nicepng.com/png/detail/798-7984274_https-profile-pic-no-photo-available.png"
          }} />
          <Text style={styles.textList}>Name:{characterDetail.name || "not info"}</Text>
          <Text style={styles.textList}>Actor:{characterDetail.actor || "not info"}</Text>
          <Text style={styles.textList}>House:{characterDetail.house || "not info"}</Text>
        </Card>
      }
    </View>
  )
}

export default CharDetail