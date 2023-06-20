import * as FileSystem from "expo-file-system"

export const GET_API_CHARACTERS = "GET_API_CHARACTERS";
export const SELEC_CHAR_ID = "SELEC_CHAR_ID";
export const ADD_CHARACTER = "ADD_CHARACTER"

const URL = "https://hp-api.onrender.com/api/characters"

export const getAllCharacters = () => {
  return async function (dispatch) {
    const resp = await fetch(`${URL}`)
    const data = await resp.json()
    return dispatch({ type: GET_API_CHARACTERS, payload: data.slice(0, 30) })
  }
}

export const selectedCharDetail = (id) => ({
  type: SELEC_CHAR_ID,
  payload: id
})

export const addCharacterList = (data, imgUri) => {
  return async dispatch => {
    const fileName = imgUri.split('/').pop()
    const Path = FileSystem.documentDirectory + fileName
    try {
      FileSystem.moveAsync({
        from: imgUri,
        to: Path
      })
    } catch (error) {
      console.log(error.message)
      throw error
    }
    dispatch({ type: ADD_CHARACTER, payload: { data, image: Path } })
  }
}
