// Imports React into our test file.
import React from 'react'

// Imports Enzyme testing and deconstructs Shallow into our test file.
import Enzyme, { shallow } from 'enzyme'

// Imports Adapter utilizing the latest react version into our test file so we can run a testing render on any component we may need.
import Adapter from 'enzyme-adapter-react-16'

// Imports in the component we are going to be testing.
import CatNew from './CatNew.js'

//Allows us to utilize the adapter we import in earlier, allowing us to call and render a component.
Enzyme.configure({ adapter: new Adapter() })

describe('When CatNew renders', () => {

    let renderedCatNew
    beforeEach(() => {
        renderedCatNew = shallow(<CatNew />)
    })
    it('displays a form to make a new cat', () => {
        const catShowRender = renderedCatNew.find('Form')
        expect(catShowRender.length).toEqual(1)
    })
    it('displays an input for a cat name', () => {
        const catShowRender = renderedCatNew.find('[name="name"]')
        expect(catShowRender.length).toEqual(1)
    })
    it('displays an input for a cat age', () => {
        const catShowRender = renderedCatNew.find('[name="age"]')
        expect(catShowRender.length).toEqual(1)
    })
    it('displays an input for a cat enjoys', () => {
        const catShowRender = renderedCatNew.find('[name="enjoys"]')
        expect(catShowRender.length).toEqual(1)
    })
    it('displays an input for a cat image', () => {
        const catShowRender = renderedCatNew.find('[name="image"]')
        expect(catShowRender.length).toEqual(1)
    })

})