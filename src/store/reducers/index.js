/* jshint esversion: 6 */
import { combineReducers } from 'redux'
import { SearchReducer } from './search'
import { SidebarReducer } from './sidebar'
import { AnimeReducer } from './mainAnime'
import { ViewAnimeDetailsReducer } from './viewAnimeDetails'

export default combineReducers({
  sidebar: SidebarReducer,
  search: SearchReducer,
  animes: AnimeReducer,
  viewAnime: ViewAnimeDetailsReducer
})
