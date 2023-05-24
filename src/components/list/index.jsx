import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import Card from '../card'
import { Ionicons } from '@expo/vector-icons';
import styles from './styles'

const List = ({ characters, navigation }) => {

  useEffect(() => {

  }, [characters.length])

  const renderChar = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate('Detail',
        {
          id: item.id,
          characters: characters
        })}>
        <Card>
          <Image style={styles.image} source={{
            uri: item.image || "https://www.nicepng.com/png/detail/798-7984274_https-profile-pic-no-photo-available.png",
          }} />
          <Text style={styles.textList}>{item.name}</Text>
          <Ionicons name="add-circle-outline" size={24} color="white" />
        </Card>
      </TouchableOpacity>
    )
  }

  return (
    <View style={styles.listContainer}>
      <FlatList
        data={characters}
        renderItem={renderChar}
        keyExtractor={chars => chars.id}
      />
    </View>
  )
}

export default List