import './Search.css'
import { connect } from 'react-redux'
import React, { Fragment } from 'react'
import * as AnimeActions from '../../store/actions/actions'

const Search = props => {
  console.log(props.suggestions)
  // Event fired when the input value is changed
  const onChange = e => {
    const { suggestions } = props
    const userInput = e.currentTarget.value
    props.handleSearchChange(
      Object.assign({ userInput }, { suggestions: suggestions })
    )
  }
  const onClick = e => {
    // Update the user input and reset the rest of the state
    props.handleSearchOnclick(e.currentTarget.innerText)
  }
  const {
    activeSuggestion,
    filteredSuggestions,
    showSuggestions,
    userInput
  } = props.search
  let suggestionsListComponent
  if (showSuggestions && userInput) {
    if (filteredSuggestions.length) {
      suggestionsListComponent = (
        <div className='suggestions-list-wrapper'>
          <ul className='suggestions'>
            {filteredSuggestions.map((suggestion, index) => {
              let className
              if (index === activeSuggestion) {
                className = 'suggestion-active'
              }
              return (
                <li
                  className={className}
                  key={suggestion.given_id}
                  onClick={onClick}
                >
                  <div className='suggestion-title'>{suggestion.title}</div>
                  ---
                  <div className='suggestion-type'>{suggestion.type}</div>
                  <div className='suggestion-status'>
                    {' '}
                    - {suggestion.status}
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      )
    } else {
      suggestionsListComponent = (
        <div>
          <em>No suggestions!</em>
        </div>
      )
    }
  }
  let inputClassName =
    userInput.length > 0 ? 'search-input--active' : 'search-input'
  return (
    <Fragment>
      <div className='search-input__wrapper'>
        <i className={`fas fa-search ${inputClassName}`} />
        <input
          type='text'
          onChange={onChange}
          value={userInput}
          placeholder='Search'
          className={inputClassName}
        />
        <div>{suggestionsListComponent}</div>
      </div>
    </Fragment>
  )
}

const mapDispatchToProps = dispatch => ({
  handleSearchChange: payload => {
    dispatch(AnimeActions.handleSearchChange(payload))
  },
  handleSearchOnclick: payload => {
    dispatch(AnimeActions.handleSearchOnclick(payload))
  }
})
const mapStateToProps = state => ({
  search: state.search
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search)
