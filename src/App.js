import "./styles.css";
import { useEffect, useState } from "react";
import Note from "./components/Note";
import Notification from "./components/Notification";
import noteService from "./services/notes";
import loginService from "./services/login";
import config from "./config/config.js"; 
import LoginForm from "./components/LoginForm";
import Togglable from "./components/Togglable";
import NoteForm from "./components/NoteForm";

export default function App() {
  const [notes, setNotes] = useState([]);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    noteService.getAll().then((notes) => {
      if (!notes.length) {
        setErrorMessage('No notes to show');
      } else {
        setNotes(notes);
      }
    });
  }, []);

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem(config.LOGGED_USER_STORAGE);
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      setUser(user);
      noteService.setToken(user.token);
    }
  }, []);

  const handleLogout = () => {
    setUser(null);
    noteService.setToken(null);
    window.localStorage.removeItem(config.LOGGED_USER_STORAGE);
  }

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const user = await loginService.login({
        username,
        password
      });

      noteService.setToken(user.token);
      window.localStorage.setItem(
        config.LOGGED_USER_STORAGE, JSON.stringify(user),
      );
      setUser(user);
      setUsername('');
      setPassword('');
    } catch (error) {
      setErrorMessage('Wrong credentials');
      setTimeout(() => {
        setErrorMessage('')
      }, 5000);
    }
  };

  const addNote = (noteObject) => {
    noteService
      .create(noteObject)
      .then((data) => {
        setNotes((prevNotes) => prevNotes.concat(data));
        setErrorMessage('Note added');
        setTimeout(() => {
          setErrorMessage('')
        }, 5000);
      });
  }; 

  return (
    <div>
      <h1>Notes</h1>
      <Notification message={errorMessage} />
      {
        (user)
          ? <NoteForm
              handleLogout={handleLogout}
              addNote={addNote}
            />
          : <LoginForm
              username={username}
              password={password}
              handleUsernameChange={
                ({target}) => setUsername(target.value)
              }
              handlePasswordChange={
                ({target}) => setPassword(target.value)
              }
              handleSubmit={handleLogin}
            />
      }

      <div>
        {notes.map((note) => (
          <Note key={note.id} note={note} />
        ))}
      </div>
      <br />
    </div>
  );
}
