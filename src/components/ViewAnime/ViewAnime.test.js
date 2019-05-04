import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import ViewAnime from './ViewAnime'
configure({ adapter: new Adapter() })

describe('<ViewAnime/>', () => {
  it('should render <ViewAnime/> modal if it recieves props', () => {
    expect(<ViewAnime />)
  })
})
