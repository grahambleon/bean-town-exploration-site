import RatingField from '../../react/components/RatingField'

describe('RatingField', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <RatingField
        label="Rating"
      />
    )
  })

  it('Should have a label for the Rating field', () => {
    expect(wrapper.find("label").text()).toEqual("Rating")
  })
})
