import '@testing-library/jest-dom/extend-expect';
import {fireEvent, render} from '@testing-library/react';
import Togglable from './Togglable';

describe('Togglable test cases', () => {
  const buttonLabel = 'Show form';
  let component;

  beforeEach(() => {
    component = render(
      <Togglable buttonLabel={buttonLabel}>
        <div className='testDiv'>Test inside div</div>
      </Togglable>
    );
  });

  it('Should render its children but not visible', () => {
    const element = component.getByText('Test inside div');
    expect(element.parentNode).toHaveStyle('display: none');
  });

  it('Should show children after clicking on button', () => {
    const element = component.getByText('Test inside div');
    expect(element.parentNode).toHaveStyle('display: none');

    const button = component.getByText(buttonLabel);
    fireEvent.click(button);

    expect(element.parentNode).not.toHaveStyle('display: none');
  });

  it('Should close toggle content', () => {
    const element = component.getByText('Test inside div');
    expect(element.parentNode).toHaveStyle('display: none');

    let button = component.getByText(buttonLabel);
    fireEvent.click(button);
    expect(element.parentNode).toHaveStyle('display: block');

    button = component.getByText('Hide');
    fireEvent.click(button);
    expect(element.parentNode).toHaveStyle('display: none');
  });
});
