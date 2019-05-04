import React from 'react'
import { connect } from 'react-redux'
import ViewAnime from '../ViewAnime/ViewAnime'
import * as AnimesActions from '../../store/actions/actions'

const List = props => {
  // shows View anime modal form onClick
  const showViewModal = payload => {
    props.showViewAnimesModal({
      id: payload.given_id,
      synopsis: payload.synopsis,
      tags: payload.genres
    })
  }
  const hideViewModal = payload => {
    props.hideViewAnimesModal(payload)
  }
  console.log(props.list)
  return (
    <React.Fragment>
      <ViewAnime hideViewModal={hideViewModal} />
      <div className='list__table'>
        <section className='wrapper'>
          {props.list.map((item, index) => (
            <div
              onClick={() => showViewModal(item)}
              className='card'
              data-effect='zoom'
              key={index}
            >
              <figure className='card__image'>
                <img
                  src='https://c1.staticflickr.com/4/3935/32253842574_d3d449ab86_c.jpg'
                  alt='Short description'
                />
              </figure>
              <div className='card__body'>
                <h3 className='card__name'>{item.title}</h3>
                <p className='card__bio'>{item.synopsis}</p>
              </div>
              <div className='card__footer'>
                <p className='card__date'>{item.aired}</p>
                <p className='' />
              </div>
            </div>
          ))}
        </section>
      </div>
    </React.Fragment>
  )
}

const mapDispatchToProps = dispatch => ({
  showViewAnimesModal: payload => {
    dispatch(AnimesActions.showViewAnimesModal(payload))
  },
  hideViewAnimesModal: payload => {
    dispatch(AnimesActions.hideViewAnimesModal(payload))
  }
})
export default connect(
  null,
  mapDispatchToProps
)(List)
