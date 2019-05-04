/* jshint esversion: 6 */
import * as AnimeTypes from '../actions/types'

const initialState = {
  animes: [],
  contactInfo: [],
  // holds selected row values
  selectedRows: []
}
export const AnimeReducer = (state = initialState, action) => {
  switch (action.type) {
    // fetch all animes
    case 'GET_ALL_ANIMES_FULFILLED':
      console.log(action.payload)
      return { ...state, animes: action.payload }

    case AnimeTypes.HANDLE_INPUT_CHANGE:
      const contactInfoCopy = [...state.contactInfo]
      return { ...state, contactInfo: [...contactInfoCopy, action.payload] }

    default:
      return state
  }
}
