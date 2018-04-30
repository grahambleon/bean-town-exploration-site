import TitleField from '../../react/components/TitleField'

describe('Field', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <TitleField
        label="Review Title"
      />
    )
  })

  it('Should have a label for Title field', () => {
    expect(wrapper.find("label").text()).toEqual("Review Title")
  })
})
