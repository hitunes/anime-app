import './SideBar.css'
import React from 'react'
import { connect } from 'react-redux'
import * as AnimeActions from '../../store/actions/actions'

const Sidebar = props => {
  let sidebarClass = props.sidebar.sidebarOpen ? 'sidebar open' : 'sidebar'
  // toggle sidebar state
  const activeSidebarLink = payload => {
    props.activeSidebarLink(payload)
  }
  return (
    <div className={sidebarClass}>
      <ul className='sidebar__ul'>
        <li
          onClick={() => activeSidebarLink(0)}
          className={props.sidebar.active === 0 ? 'link-selected' : ''}
        >
          <i className='far fa-address-book' />
          Animes ({props.animes.animes.length})
        </li>
        <div className='divider' />
      </ul>
    </div>
  )
}
const mapStateToProps = state => ({
  sidebar: state.sidebar,
  animes: state.animes
})
const mapDispatchToProps = dispatch => ({
  activeSidebarLink: payload => {
    dispatch(AnimeActions.activeSidebarLink(payload))
  }
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar)
