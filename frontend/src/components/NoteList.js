import React from 'react';

function NoteList({notes}){
  return(
    <div className="note-list" role="list" aria-label="User notes">
      {notes.map(note=>(
        <div key={note._id} className="note-card" role="listitem">
          <h3>{note.title}</h3>
          <p>{note.content}</p>
        </div>
      ))}
    </div>
  );
}

export default NoteList;
