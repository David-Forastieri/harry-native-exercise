import { View, Text, Button, Image, Alert } from 'react-native'
import React from 'react'
import * as ImagePicker from "expo-image-picker"
import { useState } from 'react'
import styles from './styles'

const ImageCam = (props) => {

  const [picket, setPicket] = useState()

  const verifyPermissons = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync()
    if (status !== 'granted') {
      Alert.alert("permisos insuficientes", [{ text: "ok" }])
      return false
    }
    return true
  }

  const handlerTakeImage = async () => {
    const hasPermission = await verifyPermissons()
    if (!hasPermission) return
    const image = await ImagePicker.launchCameraAsync({
      // allowsEditing: true,
      aspect: [16, 9],
      quality: 0.8,
    })
    console.log('img', image)
    setPicket(image.assets[0].uri)
    props.onImage(image.assets[0].uri)
  }

  return (
    <View style={styles.container}>
      <View style={styles.preview}>
        {!picket ? (<Text>Toma una imagen</Text>)
          : (<Image style={styles.image} source={{ uri: picket }} />)}
      </View>
      <Button title="Tomar foto" color='red' onPress={handlerTakeImage} />
    </View>
  )
}

export default ImageCam