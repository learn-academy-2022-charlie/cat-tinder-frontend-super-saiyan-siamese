// Imports React into our test file.
import React from 'react'

// Imports Enzyme testing and deconstructs Shallow into our test file.
import Enzyme, { shallow } from 'enzyme'

// Imports Adapter utilizing the latest react version into our test file so we can run a testing render on any component we may need.
import Adapter from 'enzyme-adapter-react-16'

// Imports in the component we are going to be testing.
import CatEdit from './CatEdit.js'

//Allows us to utilize the adapter we import in earlier, allowing us to call and render a component.
Enzyme.configure({ adapter: new Adapter() })

describe('When CatEdit renders', () => {

    let renderedCatEdit
    beforeEach(() => {
        renderedCatEdit = shallow(<CatEdit />)
    })
    it('displays a form to make a new cat', () => {
        const catShowRender = renderedCatEdit.find('Form')
        expect(catShowRender.length).toEqual(1)
    })
    it('displays an input for a cat name', () => {
        const catShowRender = renderedCatEdit.find('[name="name"]')
        expect(catShowRender.length).toEqual(1)
    })
    it('displays an input for a cat age', () => {
        const catShowRender = renderedCatEdit.find('[name="age"]')
        expect(catShowRender.length).toEqual(1)
    })
    it('displays an input for a cat enjoys', () => {
        const catShowRender = renderedCatEdit.find('[name="enjoys"]')
        expect(catShowRender.length).toEqual(1)
    })
    it('displays an input for a cat image', () => {
        const catShowRender = renderedCatEdit.find('[name="image"]')
        expect(catShowRender.length).toEqual(1)
    })

})