import { View, Text, TextInput } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Ionicons } from '@expo/vector-icons';
import styles from './styles';
import List from '../../components/list';
import { useSelector } from 'react-redux';

const SearchCharacter = ({ navigation }) => {

  const AllCharacters = useSelector(state => state.allCharacters)
  const [value, setValue] = useState("")
  const [charFound, setCharfound] = useState([])

  useEffect(() => {
  }, [AllCharacters])

  const handleInput = (text) => {
    setValue(text)
    let charSearch = AllCharacters.filter(ch => ch.name.toLowerCase().indexOf(text.toLowerCase()) !== -1)
    setCharfound(charSearch)
  }

  return (
    <View style={styles.container}>
      <View style={styles.input} >
        <Ionicons name="search" size={20} color="black" />
        <TextInput
          style={styles.inputText}
          placeholder='Search favorite character'
          autoCapitalize="none"
          autoCorrect={false}
          value={value}
          onChangeText={handleInput}
        />
      </View>
      {value !== "" && (
        <List characters={charFound} navigation={navigation} />
      )}
    </View>
  )
}

export default SearchCharacter