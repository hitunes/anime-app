import './card.css'
import './AnimeView.css'
import React from 'react'
import { connect } from 'react-redux'
import MainAnime from './MainAnime'

const AnimeView = props => {
  let animeViewMain = props.sidebar ? 'display-fw' : 'display-hw'
  return (
    <div className={`anime-view ${animeViewMain}`}>
      <MainAnime />
    </div>
  )
}
const mapStateToProps = state => ({
  sidebar: state.sidebar.sidebarOpen
})
export default connect(
  mapStateToProps,
  null
)(AnimeView)
