import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import List from '../../components/list'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCharacters } from '../../Redux/actions'
import styles from './styles'

const Home = ({ navigation }) => {

  const dispatch = useDispatch()
  const AllCharacters = useSelector(state => state.allCharacters)
  const AddCharacters = useSelector(state => state.newCharacters)
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    if (characters.length === 0) {
      dispatch(getAllCharacters())
    } setCharacters(AllCharacters)
  }, [AllCharacters, characters])

  return (
    <View style={styles.homeContainer}>
      <List characters={characters} navigation={navigation} />
    </View>
  )
}

export default Home