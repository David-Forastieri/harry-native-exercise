import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Card from '../card'
import styles from './styles'

const List = ({ characters, charSelected }) => {

  const renderChar = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => charSelected(item.id)}>
        <Card>
          <Image style={styles.image} source={{
            uri: item.image,
          }} />
          <Text style={styles.textList}>{item.name}</Text>
        </Card>
      </TouchableOpacity>
    )
  }

  return (
    <>

      <View>
        <FlatList
          data={characters}
          renderItem={renderChar}
          keyExtractor={chars => chars.id}
        />
      </View>

    </>
  )
}

export default List