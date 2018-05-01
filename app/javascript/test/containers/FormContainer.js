import FormContainer from '../../react/containers/FormContainer';

describe('FormContainer', () => {
  let wrapper;

  beforeEach(() => {
    spyOn(FormContainer.prototype, 'handleClear').and.callThrough();
    wrapper = mount(<FormContainer />)
  });

  describe('handleClear', () => {
    it('should be invoked when the onClick property of the From Component is called', () => {
      wrapper.find('button').props().onClick();
      expect(FormContainer.prototype.handleClear).toHaveBeenCalled();
    });
  })
})
