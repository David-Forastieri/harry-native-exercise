import React, { useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import List from '../../components/list'
import styles from './styles'
import CharDetail from '../details'

const Home = () => {

  const [characters, setCharacters] = useState([])
  const [characterId, setCharacterId] = useState('')
  const [viewDetail, setViewDetail] = useState(false)

  useEffect(() => {
    fetch("https://hp-api.onrender.com/api/characters")
      .then(res => res.json())
      .then(data => setCharacters(data.slice(0, 15)))
  }, [characters.length])

  const charSelected = id => {
    setCharacterId(id)
    setViewDetail(true)
  }

  return (
    <View style={styles.homeContainer}>
      {viewDetail ?
        <CharDetail characters={characters} characterId={characterId} viewDetail={setViewDetail} />
        : <List characters={characters} charSelected={charSelected} />
      }
    </View>
  )
}

export default Home