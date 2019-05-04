import axios from 'axios'
import * as AnimesTypes from './types'
const PROXY_URL = 'https://cors-anywhere.herokuapp.com/'
// actions waiting to be dispatched
export function getAllAnimes (payload) {
  return dispatch => {
    dispatch({
      type: AnimesTypes.GET_ALL_ANIMES,
      payload: new Promise((resolve, reject) => {
        axios
          .get(PROXY_URL + payload.url, { crossdomain: true })
          .then(response => resolve(response.data))
          .catch(error => alert('check CORS or network'))
      })
    })
  }
}
export function showViewAnimesModal (payload) {
  return dispatch => {
    dispatch({
      type: AnimesTypes.SHOW_VIEW_MODAL,
      payload: new Promise((resolve, reject) => {
        axios
          .get(
            `${PROXY_URL}http://notmyanimelist.herokuapp.com/character/${
              payload.id
            }`
          )
          .then(response =>
            resolve({
              data: response.data,
              synposis: payload.synopsis,
              tags: payload.tags
            })
          )
          .catch(error => alert('server failed to fetch'))
      })
    })
  }
}

export const toggleSidebar = payload => ({
  type: AnimesTypes.TOGGLE_SIDEBAR,
  payload
})
export const hideViewAnimesModal = payload => ({
  type: AnimesTypes.HIDE_VIEW_MODAL,
  payload
})

export const handleSearchChange = payload => ({
  type: AnimesTypes.HANDLE_SEARCH_CHANGE,
  payload
})
export const handleSearchOnclick = payload => ({
  type: AnimesTypes.HANDLE_SEARCH_ONCLICK,
  payload
})
