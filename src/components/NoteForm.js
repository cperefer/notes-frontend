import { useState } from "react";
import Togglable from "./Togglable";

export default function NoteForm({handleLogout, addNote}) {
  const [newNote, setNewNote] = useState('');
  
  const handleChange = (event) => {
    setNewNote(event.target.value);
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();

    const noteObject = {
      content: newNote,
    };

    addNote(noteObject);
    setNewNote('');
  };

  return (
    <Togglable buttonLabel='create note'>
      <h3>Create a new note</h3>
      <div>
        <form onSubmit={handleSubmit}>
          <input 
            type='text'
            placeholder='Write your note here'
            onChange={handleChange}
            value={newNote} />
          <button>Crear Nota</button>
        </form>
      </div>
      <div><button onClick={handleLogout}>Logout</button></div>
    </Togglable>
  );
}