import { View, Text, Button, TextInput } from 'react-native'
import React, { useState } from 'react'
import ImageCam from '../../components/imageCam'
import { useDispatch } from 'react-redux';
import { addCharacterList } from '../../Redux/actions';

const AddCharacter = ({ navigation }) => {

  const dispatch = useDispatch()
  const [value, setValue] = useState({
    name: '',
    actor: '',
    house: ''
  })
  const [imageUri, setImageUri] = useState()

  const handleSave = () => {
    dispatch(addCharacterList(value, imageUri))
    navigation.navigate("Home")
  }

  return (
    <View>
      <Text>AddCharacter</Text>
      <ImageCam onImage={setImageUri} />
      <View>
        <Text>Nombre:</Text>
        <TextInput onChangeText={(t) => setValue({ ...value, name: t })} />
      </View>
      <View>
        <Text>Actor:</Text>
        <TextInput onChangeText={(t) => setValue({ ...value, actor: t })} />
      </View>
      <View>
        <Text>House:</Text>
        <TextInput onChangeText={(t) => setValue({ ...value, house: t })} />
      </View>
      <Button title="Save New Character" color="red" onPress={handleSave} />
    </View>
  )
}

export default AddCharacter