import './Nav.css'
import React from 'react'
import Search from '../Search/Search'
import { connect } from 'react-redux'
import * as AnimeActions from '../../store/actions/actions'

const Nav = props => {
  // Onclick toggles sidebar on/off
  const toggleSidebar = payload => {
    props.toggleSidebar(payload)
  }
  return (
    <div className='nav__wrapper'>
      <div className='nav__wrapper-left-item'>
        <span>
          <i className='fas fa-bars' onClick={toggleSidebar} />
        </span>
        <h2>Anime App</h2>
      </div>
      <div className='nav__wrapper-right-item'>
        <Search suggestions={[...props.animes]} />
        <div className='nav__wrapper-right-item--image'>
          <img src='/images/profile-img.png' alt='' />
        </div>
      </div>
    </div>
  )
}
const mapDispatchToProps = dispatch => ({
  toggleSidebar: payload => {
    dispatch(AnimeActions.toggleSidebar(payload))
  }
})
const mapStateToProps = state => ({
  animes: state.animes.animes
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Nav)
