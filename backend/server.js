const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const notesRoutes = require('./routes/notes');
const usersRoutes = require('./routes/users');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.use('/api/notes', notesRoutes);
app.use('/api/users', usersRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
