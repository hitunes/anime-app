import * as AnimeTypes from '../actions'

const initialState = {
  // The active selection's index
  activeSuggestion: 0,
  // The suggestions that match the user's input
  filteredSuggestions: [],
  // Whether or not the suggestion list is shown
  showSuggestions: false,
  // What the user has entered
  userInput: ''
}

export const SearchReducer = (state = initialState, action) => {
  switch (action.type) {
    case AnimeTypes.HANDLE_SEARCH_CHANGE:
      // Filter suggestions that don't contain the user's input
      const filteredSuggestions = handleSearchChange(action)
      return {
        ...state,
        activeSuggestion: 0,
        filteredSuggestions,
        showSuggestions: true,
        userInput: action.payload.userInput
      }
    case AnimeTypes.HANDLE_SEARCH_ONCLICK:
      // Update the user input and reset the rest of the state
      return {
        ...state,
        userInput: action.payload,
        activeSuggestion: 0,
        filteredSuggestions: [],
        showSuggestions: false
      }
    default:
      return state
  }
}
function handleSearchChange (action) {
  // Update the user input and filtered suggestions, reset the active
  return action.payload.suggestions.filter(
    suggestion =>
      `${suggestion.title}${suggestion.background}${suggestion.status}${
        suggestion.type
      }${suggestion.aired}`
        .toLowerCase()
        .indexOf(action.payload.userInput.toLowerCase()) > -1
  )
}
