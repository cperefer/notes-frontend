import { useState, useRef } from 'react';
import Togglable from './Togglable/Togglable';

export default function NoteForm({handleLogout, addNote}) {
  const [newNote, setNewNote] = useState('');
  const togglableRef = useRef();

  //Handlers
  const handleChange = (event) => {
    setNewNote(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const noteObject = {
      content: newNote,
      important: false,
    };

    addNote(noteObject);
    setNewNote('');
    togglableRef.current.toggleVisibility();
  };

  //Render
  return (
    <Togglable buttonLabel='Show create note' ref={togglableRef}>
      <h3>Create a new note</h3>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            placeholder='Write your note here'
            onChange={handleChange}
            value={newNote} />
          <button>Create new note</button>
        </form>
      </div>
      <div><button onClick={handleLogout}>Logout</button></div>
    </Togglable>
  );
}