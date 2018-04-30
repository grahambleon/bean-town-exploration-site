import Review from '../../react/components/review';

describe('Review', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <Review
        title="This sucks!"
        rating="1"
        date="4/20"
        body="I do not this at all it is the worst."
      />
    )
  })

  it('renders the pertinant review data to the page', () => {
    console.log(wrapper.debug)
    debugger;
    expect(wrapper.find(Review).props()).toEqual( {
       title: 'This sucks!',
       rating: '1',
        date: '4/20',
        body: 'I do not this at all it is the worst.'
    });
  })
})
