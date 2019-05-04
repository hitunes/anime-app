import './SideBar.css'
import React from 'react'
import { connect } from 'react-redux'

const Sidebar = props => {
  let sidebarClass = props.sidebar.sidebarOpen ? 'sidebar open' : 'sidebar'
  return (
    <div className={sidebarClass}>
      <ul className='sidebar__ul'>
        <li className={props.sidebar.active === 0 ? 'link-selected' : ''}>
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
export default connect(
  mapStateToProps,
  null
)(Sidebar)
