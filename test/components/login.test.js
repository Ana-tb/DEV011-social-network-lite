import login from '../../src/login';

describe('login', () => {
  test('is a function', () => {
    expect(typeof login).toBe('function');
  });
  test('have a button', () => {
    const DOM = document.createElement('div');
    DOM.append(login());
    const haveButton = DOM.querySelector('return');
    expect(haveButton).toBe(undefined);
  });
  test('after  click button return call function navigateTo', () => {
    const DOM = document.createElement('div');
    const navigateTo = jest.fn();
    DOM.append(login(navigateTo));
    const buttonBack = DOM.querySelector('return');
    buttonBack.click();
    expect(navigateTo).toHaveBeenCalled(); 
  });
});
