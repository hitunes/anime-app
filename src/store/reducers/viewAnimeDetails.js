import * as AnimeTypes from '../actions/types'

const initialState = {
  showViewAnimeModal: false,
  animeInfo: {}
}
export const ViewAnimeDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SHOW_VIEW_MODAL_FULFILLED':
      return {
        ...state,
        showViewAnimeModal: true,
        animeInfo: action.payload
      }
    case AnimeTypes.HIDE_VIEW_MODAL:
      return { ...state, showViewAnimeModal: action.payload }
    default:
      return state
  }
}
