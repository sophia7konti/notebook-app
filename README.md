# Notebook App

Μια εφαρμογή για τη δημιουργία, ανάγνωση, ενημέρωση και διαγραφή σημειώσεων (CRUD) με backend σε Node.js/Express και MongoDB, και frontend σε React.

## Περιεχόμενα

- [Τεχνολογίες](#τεχνολογίες)
- [Δομή Project](#δομή-project)
- [Ρύθμιση Περιβάλλοντος](#ρύθμιση-περιβάλλοντος)
- [Εκτέλεση Backend](#εκτέλεση-backend)
- [Εκτέλεση Frontend](#εκτέλεση-frontend)
- [Τρέξιμο Tests](#τρέξιμο-tests)
- [API Endpoints](#api-endpoints)

---

## Τεχνολογίες

- Node.js
- Express.js
- MongoDB / Mongoose
- JWT Authentication
- React.js (Frontend)
- Tailwind CSS

---

## Δομή φακέλων

notebook-app/
├─ backend/
│  ├─ .babelrc
│  ├─ .env
│  ├─ .gitignore
│  ├─ babel.config.js
│  ├─ package.json
│  ├─ package-lock.json
│  ├─ server.js
│  ├─ controllers/
│  │  ├─ noteController.js
│  │  └─ userController.js
│  ├─ dist/
│  │  ├─ babel.config.js
│  │  └─ server.js
│  ├─ logs/
│  │  └─ app.log
│  ├─ middleware/
│  │  ├─ authMiddleware.js
│  │  └─ errorMiddleware.js
│  ├─ models/
│  │  ├─ noteModel.js
│  │  └─ User.js
│  ├─ routes/
│  │  ├─ noteRoutes.js
│  │  └─ userRoutes.js
│  ├─ swagger/
│  │  └─ swagger.js
│  ├─ tests/
│  │  ├─ note.test.js
│  │  └─ user.test.js
│  └─ utils/
│     └─ generateToken.js
├─ frontend/
│  ├─ postcss.config.js
│  ├─ tailwind.config.js
│  ├─ README.md
│  ├─ public/
│  │  ├─ index.html
│  │  ├─ favicon.ico
│  │  └─ manifest.json
│  └─ src/
│     ├─ App.css
│     ├─ App.js
│     ├─ App.test.js
│     ├─ index.css
│     ├─ index.js
│     ├─ logo.svg
│     ├─ reportWebVitals.js
│     └─ setupTests.js
├─ node_modules/ (περιεχόμενο αφαιρέθηκε για συντομία)
└─ README.md

---

## Backend

### Περιγραφή
Το backend είναι φτιαγμένο με **Node.js** και **Express**, χρησιμοποιεί **MongoDB** για την αποθήκευση δεδομένων και παρέχει REST API για τις σημειώσεις.

### Περιβάλλον
Δημιουργήστε ένα `.env` αρχείο στον φάκελο `backend/`:

MONGO_URI=mongodb+srv://sophiekonti:ySR4i2Yt9E4rKOIF@cluster0.3jd3yfv.mongodb.net/notebook?retryWrites=true&w=majority PORT=5000 
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

Users
POST /users/register — Δημιουργία νέου χρήστη
POST /users/login — Σύνδεση χρήστη

## Τεχνολογίες

Frontend: React, TailwindCSS, CSS
Backend: Node.js, Express, MongoDB, Mongoose
Testing: Jest, Supertest
Dev Tools: Babel, Nodemon, Postman

Σημειώσεις
Χρησιμοποιήστε Node >= 22 για πλήρη υποστήριξη ES Modules.
Ο server ακούει στη θύρα που καθορίζεται στο .env ή στη 5000 by default.
Σιγουρευτείτε ότι η MongoDB URI είναι σωστή πριν τρέξετε το backend.