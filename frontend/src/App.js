import React, { useState } from "react";

function App() {
  const [note, setNote] = useState("");
  const [notes, setNotes] = useState([]);

  const addNote = () => {
    if (note.trim() === "") return;
    setNotes([...notes, note]);
    setNote("");
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Notebook App</h1>
      <div className="flex mb-6 gap-2">
        <input
          className="form-control flex-grow"
          type="text"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="Write your note..."
        />
        <button className="btn btn-primary" onClick={addNote}>
          Add
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {notes.map((n, i) => (
          <div
            key={i}
            className="card shadow-lg rounded-xl p-4 hover:scale-105 transition-transform"
          >
            {n}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
