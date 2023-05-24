import { View, Text, TextInput } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Ionicons } from '@expo/vector-icons';
import styles from './styles';
import List from '../../components/list';

const SearchCharacter = ({ navigation }) => {

  const [value, setValue] = useState("")
  const [allCharacters, setAllCharacters] = useState([])
  const [charFound, setCharfound] = useState([])

  useEffect(() => {
    fetch("https://hp-api.onrender.com/api/characters")
      .then(res => res.json())
      .then(data => setAllCharacters(data))
  }, [])

  const handleInput = (text) => {
    setValue(text)
    let charSearch = allCharacters.filter(ch => ch.name.toLowerCase().indexOf(text.toLowerCase()) !== -1)
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