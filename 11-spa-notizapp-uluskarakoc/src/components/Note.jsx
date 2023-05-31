import React, { useContext } from 'react';
import { NoteContext } from '../context/NoteContext';

const Note = ({ note, index }) => {
  const { deleteNote } = useContext(NoteContext);
  
  return (
    <div>
      <h2>{note.title}</h2>
      <p>{note.content}</p>
      {/* Wass soll hier in die onClick rein? */}
      <button onClick={null}>Delete</button>
    </div>
  );
};

export default Note;
