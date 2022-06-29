// Imports React into our test file.
import React from 'react'

// Imports Enzyme testing and deconstructs Shallow into our test file.
import Enzyme, { shallow } from 'enzyme'

// Imports Adapter utilizing the latest react version into our test file so we can run a testing render on any component we may need.
import Adapter from 'enzyme-adapter-react-16'

// Imports in the component we are going to be testing.
import CatIndex from './CatIndex.js'

//Allows us to utilize the adapter we import in earlier, allowing us to call and render a component.
Enzyme.configure({ adapter: new Adapter() })

describe('When CatIndex renders', () => {
    const props = {
        cats: [
            {
                id: 1,
                name: "Mittens",
                age: 5,
                enjoys: "sunshine and warm spots",
                image: "https://images.unsplash.com/photo-1543852786-1cf6624b9987?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"

            }
        ]
    }
    let renderedCatIndex
    beforeEach(() => {
        renderedCatIndex = shallow(<CatIndex {...props} />)
    })
    it('displays a header', () => {

        const catIndexRender = renderedCatIndex.find('div')

        expect(catIndexRender.length).toEqual(1)
        expect(catIndexRender.text()).toEqual("Pick your training partner for the hyperbolic time chamber")
    })
    it("displays a card from ReactStrap per cat ", () => {
        const catIndexCard = renderedCatIndex.find("Card")
        expect(catIndexCard.length).toEqual(1)
    })
})