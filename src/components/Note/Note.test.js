import '@testing-library/jest-dom/extend-expect';
import {fireEvent, render} from '@testing-library/react';
import Note from './Note';

describe('Note test cases', () => {
  const note = {
    content: 'This is a test',
    important: true,
  };

  const importantString = note.important
    ? 'make not important'
    : 'make important';

  const mockHandler = jest.fn();

  let component;

  beforeEach(() => {
    component = render(<Note note={note} toggleImportance={mockHandler}/>);
  });

  it('Should be rendering', () => {
    expect(component.container).toHaveTextContent(note.content);
    expect(component.container).toHaveTextContent(importantString);
  });

  it('Clicking the button should call event handler once', () => {
    const button = component.getByText(importantString);
    fireEvent.click(button);
    expect(mockHandler).toHaveBeenCalledTimes(1);
  });
});