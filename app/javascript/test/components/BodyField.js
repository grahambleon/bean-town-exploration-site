import BodyField from '../../react/components/BodyField'

describe('BodyField', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <BodyField
        label="Review Body"
      />
    )
  })

  it('Should have a label for body field', () => {
    expect(wrapper.find("label").text()).toEqual("Review Body")
  })
})
