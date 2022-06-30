// Imports React into our test file.
import React from 'react'

// Imports Enzyme testing and deconstructs Shallow into our test file.
import Enzyme, { shallow } from 'enzyme'

// Imports Adapter utilizing the latest react version into our test file so we can run a testing render on any component we may need.
import Adapter from 'enzyme-adapter-react-16'

// Imports in the component we are going to be testing.
import CatShow from './CatShow.js'

//Allows us to utilize the adapter we import in earlier, allowing us to call and render a component.
Enzyme.configure({ adapter: new Adapter() })

describe('When CatShow renders', () => {
    const cat= {
        id: 1,
        name: "Chicken",
        age: 5,
        enjoys: "sunshine and warm spots",
        image: "https://thiscatdoesnotexist.com/"
    }
    let renderedCatShow
    beforeEach(() => {
        renderedCatShow = shallow(<CatShow cat={cat} />)
    })
    it('displays profile of the cat in question', () => {

        const catShowRender = renderedCatShow.find('Card')

        expect(catShowRender.length).toEqual(1)

    })

})