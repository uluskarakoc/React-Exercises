import React, { useState, createContext } from 'react';

export const NoteContext = createContext();

export const NoteProvider = ({ children }) => {
  const [notes, setNotes] = useState(null); // Soll hier wirklich null stehen?

  const addNote = (title, content) => {
    // Hier Fehlt noch Code
  };

  const deleteNote = (index) => {
    // Hier Fehlt noch Code
  };

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote }}>
      {children}
    </NoteContext.Provider>
  );
};
