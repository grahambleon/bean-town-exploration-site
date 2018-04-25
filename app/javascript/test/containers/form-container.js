import FormContainer from '../../react/containers/form-container';

describe('FormContainer', () => {
  let wrapper;

  beforeEach(() => {
    spyOn(FormContainer.prototype, 'handleClear').and.callThrough();
    wrapper = mount(<FormContainer />)
  });

  describe('handleClear', () => {
    it('should be invoked when the onClick property of the From Ccomponent is called', () => {
      wrapper.find('button').props().onClick();
      expect(FormContainer.prototype.handleClear).toHaveBeenCalled();
    });



  })

  // it('Should have a form element', () => {
  //   expect(wrapper.find('form').length).toBe(1)
  // })
  //
  // it('Should have an onSubmit attribute', () => {
  //   expect(
  //     wrapper.find('form').props().onSubmit
  //   ).toBeDefined();
  // });
  //
  // it('Shouold have an onSubmit function', () => {
  //   expect(
  //     typeof wrapper.find('form').props().onSubmit === 'function'
  //   ).toBe(true);
  // });
  //
  // it('Should have an handleClear attribute', () => {
  //   console.log(wrapper.debug)
  //   debugger;
  //   expect(
  //     wrapper.find('button').node
  //   ).toBeDefined();
  // });
  //
  // it('Shouold have an handleClear function', () => {
  //   expect(
  //     typeof wrapper.find('button').props().onClick() === 'function'
  //   ).toBe(true);
  // });
})
