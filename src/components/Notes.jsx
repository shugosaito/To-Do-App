import React, { useState } from "react";
import Note from "./Note";
import InputArea from "./InputArea";

function Notes() {
  const [notes, setNotes] = useState([]);

  const addNote = (newNote) => {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  };

  const deleteNote = (id) => {
    setNotes((prevNotes) => {
      return prevNotes.filter((prevNote, index) => {
        return index !== id;
      });
    });
    console.log(id);
  };

  return (
    <div>
      <InputArea addNote={addNote} />

      <div className="noteWrapper">
        {notes.map((note, index) => (
          <Note key={index} id={index} note={note} handleDelete={deleteNote} />
        ))}
      </div>
    </div>
  );
}

export default Notes;
