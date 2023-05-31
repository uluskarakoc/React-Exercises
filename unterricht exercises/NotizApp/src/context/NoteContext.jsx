import React, { useState, createContext } from 'react';

export const NoteContext = createContext();

export const NoteProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);

  const addNote = (title, content) => {
    setNotes([...notes, { title, content }]);
  };

  const deleteNote = (index) => {
    setNotes(notes.filter((note, i) => i !== index));
  };

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote }}>
      {children}
    </NoteContext.Provider>
  );
};
