import {
  ADD_PHONE_TO_BASKET,
  DELETE_PHONE_TO_BASKET,
  CLEAN_BASCET,
} from '../action/actionTypes'

const initialState = []

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case ADD_PHONE_TO_BASKET:
      return [...state, ...payload]
    case DELETE_PHONE_TO_BASKET:
      const phonesIds = state.filter((elem) => elem !== payload)
      return [...phonesIds]
    case CLEAN_BASCET:
      return initialState
    default:
      return state
  }
}
