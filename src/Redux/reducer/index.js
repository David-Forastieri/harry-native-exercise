import { GET_API_CHARACTERS, SELEC_CHAR_ID } from "../actions";

const initialState = {
  allCharacters: [],
  selectedCharacter: {}
}

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_API_CHARACTERS:
      return {
        ...state,
        allCharacters: action.payload
      }

    case SELEC_CHAR_ID:
      let charac = state.allCharacters.filter(ch => ch.id === action.payload)
      return {
        ...state,
        selectedCharacter: charac[0]
      }

    default:
      return { ...state }
  }
}