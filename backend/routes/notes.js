const express = require('express');
const router = express.Router();
const Note = require('../models/Note');
const auth = require('../middleware/auth');

router.get('/', auth, async (req,res)=>{
  try{
    const notes = await Note.find({ user: req.user }).sort({ createdAt: -1 });
    res.json(notes);
  } catch(err){
    res.status(500).json({ message: err.message });
  }
});

router.post('/', auth, async (req,res)=>{
  const { title, content } = req.body;
  const note = new Note({ title, content, user: req.user });
  try{
    const newNote = await note.save();
    res.status(201).json(newNote);
  } catch(err){
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
