import PersonsChar from "../../model";
import { ADD_CHARACTER, GET_API_CHARACTERS, SELEC_CHAR_ID } from "../actions";

const initialState = {
  allCharacters: [],
  selectedCharacter: {},
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

    case ADD_CHARACTER:
      const id = state.allCharacters.length + 1
      const { name, actor, house } = action.payload.data
      const newCharacter = new PersonsChar(id, name, actor, house, action.payload.image)
      return {
        ...state,
        allCharacters: [...state.allCharacters, newCharacter]
      }

    default:
      return { ...state }
  }
}