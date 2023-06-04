export const GET_API_CHARACTERS = "GET_API_CHARACTERS";
export const SELEC_CHAR_ID = "SELEC_CHAR_ID"

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
