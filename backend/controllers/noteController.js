import Note from "../models/noteModel.js";

// Πάρε όλες τις σημειώσεις
export const getNotes = async (req, res) => {
  try {
    const notes = await Note.find();
    res.json(notes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Πρόσθεσε μια νέα σημείωση
export const addNote = async (req, res) => {
  const { text } = req.body;
  if (!text) return res.status(400).json({ message: "Το text είναι απαραίτητο." });

  const note = new Note({ text });

  try {
    const savedNote = await note.save();
    res.status(201).json(savedNote);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Διαγραφή σημείωσης
export const deleteNote = async (req, res) => {
  try {
    const note = await Note.findByIdAndDelete(req.params.id);
    if (!note) return res.status(404).json({ message: "Η σημείωση δεν βρέθηκε" });
    res.json({ message: "Η σημείωση διαγράφηκε" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
