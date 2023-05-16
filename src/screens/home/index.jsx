import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import List from '../../components/list'
import styles from './styles'

const Home = ({ navigation }) => {

  const [characters, setCharacters] = useState([])

  useEffect(() => {
    fetch("https://hp-api.onrender.com/api/characters")
      .then(res => res.json())
      .then(data => setCharacters(data.slice(0, 15)))
  }, [characters.length])

  return (
    <View style={styles.homeContainer}>
      <List characters={characters} navigation={navigation} />
    </View>
  )
}

export default Home