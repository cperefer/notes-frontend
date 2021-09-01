import "./styles.css";
import { useEffect, useState } from "react";
import Note from "./Note.js";
import axios from "axios";
import { getAllNotes } from "./services/notes/getAllNotes";
import { createNote } from "./services/notes/createNote";

export default function App() {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");

  useEffect(() => {
    getAllNotes().then((notes) => {
      setNotes(notes);
    });
  }, []);

  const handleChange = (event) => {
    setNewNote(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const noteToAddToState = {
      content: newNote,
      userId: 1
    };

    createNote(noteToAddToState).then((data) =>
      setNotes((prevNotes) => prevNotes.concat(data))
    );
    setNewNote("");
  };

  return (
    <div>
      <h1>Notes</h1>
      <div>
        {notes.map((note) => (
          <Note key={note.id} note={note} />
        ))}
      </div>
      <br />
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={newNote} />
        <button>Crear Nota</button>
      </form>
    </div>
  );
}
