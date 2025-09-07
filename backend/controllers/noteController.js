import Note from "../models/noteModel.js";

// 📌 Get all notes
const getNotes = async (req, res) => {
  try {
    const notes = await Note.find({ user: req.user.id });
    res.json(notes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// 📌 Add a new note
const addNote = async (req, res) => {
  try {
    const note = new Note({
      title: req.body.title,
      content: req.body.content,
      user: req.user.id,
    });

    const createdNote = await note.save();
    res.status(201).json(createdNote);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// 📌 Delete a note
const deleteNote = async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);

    if (note.user.toString() !== req.user.id) {
      return res.status(401).json({ message: "Not authorized" });
    }

    await note.deleteOne();
    res.json({ message: "Note removed" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ✅ Proper export
export { getNotes, addNote, deleteNote };
