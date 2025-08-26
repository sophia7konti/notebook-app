import React, { useState } from "react";

function NoteForm({ setNotes }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !content) return;

    const newNote = { id: Date.now(), title, content };
    setNotes((prev) => [...prev, newNote]);
    setTitle("");
    setContent("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col w-full max-w-md">
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="mb-2 p-2 border rounded"
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="mb-2 p-2 border rounded"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
      >
        Add Note
      </button>
    </form>
  );
}

export default NoteForm;
