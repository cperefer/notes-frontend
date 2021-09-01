export const Note = ({ note }) => {
  return (
    <div>
      <p>
        <strong>{note.id}</strong>: {note.content}
      </p>
    </div>
  );
};

export default Note;
