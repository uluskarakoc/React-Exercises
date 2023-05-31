import React, { useState, useContext } from 'react';
import { NoteContext } from '../context/NoteContext';

const NoteForm = () => {
  // Hier fehlt addNote aus dem Context
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
   // Hier fehlt noch Code
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Note title"
        required
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Note content"
        required
      />
      <button type="submit">Add Note</button>
    </form>
  );
};

export default NoteForm;
