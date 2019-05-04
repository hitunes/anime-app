import './ViewAnime.css'
import React from 'react'
import { connect } from 'react-redux'
import ModalLauncher from '../Modal/ModalLauncher'
import * as AnimeActions from '../../store/actions/actions'

export function isEmpty (obj) {
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) return false
  }
  return true
}

const ViewAnime = props => {
  // hides edit modal onclick
  const hideViewModal = payload => {
    props.hideViewAnimesModal(payload)
  }

  const anime = props.viewAnime.animeInfo
  console.log(anime)
  return (
    <React.Fragment>
      <ModalLauncher show={props.viewAnime.showViewAnimeModal}>
        <div className='view-anime'>
          <div className='outer'>
            <div onClick={() => hideViewModal(false)}>
              <i className='fas fa-times' />
            </div>

            <div className='content animated fadeInLeft'>
              {!isEmpty(anime)
                ? anime.tags.map((tag, index) => (
                  <span className='bg animated fadeInDown' key={index}>
                    {tag}
                  </span>
                ))
                : ''}
              <br />
              <br />
              <h1>{!isEmpty(anime) ? anime.data[0].name : ''}</h1>
              <p>{anime.synposis}</p>
            </div>
            <img
              src={!isEmpty(anime) ? anime.data[0].img.src : ''}
              width='300px'
              className='animated fadeInRight'
              alt={!isEmpty(anime) ? anime.data[0].img.alt : ''}
            />
          </div>
        </div>
      </ModalLauncher>
    </React.Fragment>
  )
}

const mapDispatchToProps = dispatch => ({
  hideViewAnimesModal: payload => {
    dispatch(AnimeActions.hideViewAnimesModal(payload))
  }
})
const mapStateToProps = state => ({
  viewAnime: state.viewAnime
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ViewAnime)
