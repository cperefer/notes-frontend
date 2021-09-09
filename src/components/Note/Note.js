export const Note = ({ note, toggleImportance }) => {
  const label = note.important
    ? 'make not important'
    : 'make important';

  return (
    <li>
      {note.content}
      <button
        onClick={() => toggleImportance(note)}
      >
        {label}
      </button>
    </li>
  );
};

export default Note;
