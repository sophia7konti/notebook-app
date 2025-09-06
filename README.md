# Notebook App

Ένα απλό full-stack project για τη διαχείριση σημειώσεων με **React**, **Node.js**, **Express** και **MongoDB**.

---

## Δομή φακέλων

notebook-app/
│
├── backend/
│ ├── controllers/
│ │ └── noteController.js
│ ├── models/
│ │ └── noteModel.js
│ ├── routes/
│ │ └── noteRoutes.js
│ ├── tests/
│ │ ├── note.test.js
│ │ └── user.test.js
│ ├── .env
│ ├── package.json
│ ├── server.js
│ └── dist/ # Δημιουργείται μετά το build
│
├── frontend/
│ ├── src/
│ │ ├── components/
│ │ ├── App.jsx
│ │ ├── index.css
│ │ └── index.js
│ ├── public/
│ ├── package.json
│ ├── tailwind.config.js
│ └── postcss.config.js
│
├── .gitignore
└── README.md


---

## Backend

### Περιγραφή
Το backend είναι φτιαγμένο με **Node.js** και **Express**, χρησιμοποιεί **MongoDB** για την αποθήκευση δεδομένων και παρέχει REST API για τις σημειώσεις.

### Περιβάλλον
Δημιουργήστε ένα `.env` αρχείο στον φάκελο `backend/`:

MONGO_URI=your_mongodb_connection_string
PORT=5000
JWT_SECRET=mysupersecret


### Εγκατάσταση & Εκτέλεση
```bash
cd backend
npm install
npm run dev       # για development με nodemon
npm run build     # μεταγλώττιση με Babel
npm start         # εκτέλεση του build

Δοκιμές
npm test

## Frontend
### Περιγραφή

Το frontend είναι φτιαγμένο με React και TailwindCSS.

### Εγκατάσταση & Εκτέλεση
cd frontend
npm install
npm start

## TailwindCSS

Για να ξεκινήσετε με TailwindCSS:
npx tailwindcss init -p
Αυτό δημιουργεί τα tailwind.config.js και postcss.config.js.

## API Endpoints (Backend)
Σημειώσεις
GET /notes — Παίρνει όλες τις σημειώσεις
POST /notes — Προσθέτει μια νέα σημείωση (απαιτεί text στο body)
DELETE /notes/:id — Διαγράφει μια σημείωση με βάση το ID

## Τεχνολογίες

Frontend: React, TailwindCSS, CSS

Backend: Node.js, Express, MongoDB, Mongoose

Testing: Jest, Supertest

Dev Tools: Babel, Nodemon, Postman

Σημειώσεις
Χρησιμοποιήστε Node >= 22 για πλήρη υποστήριξη ES Modules.
Ο server ακούει στη θύρα που καθορίζεται στο .env ή στη 5000 by default.
Σιγουρευτείτε ότι η MongoDB URI είναι σωστή πριν τρέξετε το backend.