import React, { useState } from "react";
import NoteForm from "./components2/NoteForm";

function App() {
  const [notes, setNotes] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <header className="mb-6">
        <h1 className="text-3xl font-bold text-center">Notebook App</h1>
      </header>

      <div className="flex flex-col items-center">
        {!loggedIn ? (
          <button
            onClick={handleLogin}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Login
          </button>
        ) : (
          <>
            <NoteForm setNotes={setNotes} />
            <div className="mt-4 w-full max-w-md">
              {notes.map((note) => (
                <div
                  key={note.id}
                  className="p-4 mb-2 bg-white rounded shadow"
                >
                  <h3 className="font-bold">{note.title}</h3>
                  <p>{note.content}</p>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
