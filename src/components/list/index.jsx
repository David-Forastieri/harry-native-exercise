import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import Card from '../card'
import { Ionicons } from '@expo/vector-icons';
import { useDispatch } from 'react-redux';
import { selectedCharDetail } from '../../Redux/actions';
import styles from './styles'

const List = ({ characters, navigation }) => {

  const dispatch = useDispatch()

  useEffect(() => {

  }, [characters.length])

  const handleSelected = id => {
    navigation.navigate('Detail')
    dispatch(selectedCharDetail(id))
  }

  const renderChar = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => handleSelected(item.id)}>
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