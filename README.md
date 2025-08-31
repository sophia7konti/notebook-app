# Notebook App

Αυτή η εφαρμογή είναι ένα πλήρες σύστημα σημειώσεων που χρησιμοποιεί το **MERN stack** (MongoDB, Express, React, Node.js). Επιτρέπει στους χρήστες να δημιουργούν, να επεξεργάζονται και να διαγράφουν σημειώσεις μέσω ενός φιλικού προς το χρήστη περιβάλλοντος.

---

## Τεχνολογίες

- **Frontend:** React, React Router, Axios, @testing-library/react, Jest
- **Backend:** Node.js, Express, MongoDB, Mongoose, Morgan, Swagger, Cors, Dotenv, Jest, Supertest
- **Database:** MongoDB
- **Testing:** Jest, React Testing Library, Supertest
- **Transpilation:** Babel (ES Modules υποστήριξη)

---

## Δομή φακέλων

```
notebook-app/
├── backend/ # Backend εφαρμογή (Node.js/Express)
│ ├── controllers/ # Λογική διαχείρισης αιτημάτων
│ ├── models/ # Μοντέλα MongoDB
│ ├── routes/ # API routes
│ ├── test/ # Unit & integration tests (Jest + Supertest)
│ ├── server.js # Είσοδος του server
│ ├── package.json # Εξαρτήσεις και scripts
│ └── babel.config.js # Babel config για ES Modules
├── frontend/ # Frontend εφαρμογή (React)
│ ├── src/
│ │ ├── components/ # React components
│ │ ├── components2/ # Σύνθετα components
│ │ ├── App.js # Κύριο component
│ │ └── index.js # Είσοδος του React
│ ├── package.json # Εξαρτήσεις και scripts
│ └── babel.config.cjs # Babel config για ES Modules
├── .gitignore
└── README.md # Αυτό το αρχείο
```

---

## Backend

### Βήματα εγκατάστασης

1. Μετάβαση στον φάκελο backend:
```bash
cd backend
```

2. Εγκατάσταση εξαρτήσεων:
```bash
npm install
```

3. Δημιουργία αρχείου `.env` με τις παρακάτω μεταβλητές:
```env
MONGO_URI=your_mongodb_uri
JWT_SECRET=mysupersecret
PORT=5000
```

4. Εκκίνηση του server:
```bash
npm start
```
- Τρέχει συνήθως στη θύρα 5000.
- Logger (morgan) εμφανίζει όλα τα αιτήματα στο console.

5. Swagger τεκμηρίωση:
- Άνοιξε στο browser: [http://localhost:5000/api-docs]

6. Εκτέλεση δοκιμών:
```bash
npm test
```
- Backend χρησιμοποιεί Jest + Supertest για unit και integration tests.

### Σημειώσεις
- Ο backend τρέχει συνήθως στη θύρα 5000.
- Logger (morgan) εμφανίζει όλα τα αιτήματα στο console.
- Swagger επιτρέπει δοκιμή των endpoints μέσω browser.

---

## Frontend

### Βήματα εγκατάστασης

1. Μετάβαση στον φάκελο frontend:
```bash
cd frontend
```

2. Εγκατάσταση εξαρτήσεων:
```bash
npm install
```

3. Εκκίνηση της εφαρμογής:
```bash
npm start
```
- Τρέχει συνήθως στη θύρα 3000.
- Αν υπάρχει σύγκρουση θυρών, το React θα ζητήσει αλλαγή θύρας.

4. Εκτέλεση δοκιμών:
```bash
npm test
```
- Frontend χρησιμοποιεί Jest + React Testing Library για component tests.

### Σημειώσεις
- Frontend χρησιμοποιεί React components για διαχείριση σημειώσεων.
- Υποστηρίζει add, delete, list σημειώσεων.
- Testing γίνεται με **@testing-library/react**.

---
## Babel

- Προστέθηκαν αρχεία διαμόρφωσης Babel σε backend και frontend.
- Υποστήριξη ES Modules και σύγχρονου JavaScript.
- Backend: babel.config.js
- Frontend: babel.config.cjs / babel.config.json

## GitHub

Για να ανεβάσεις το project:
```bash
git add .
git commit -m "Initial commit"  "Ενημέρωση backend/frontend, προσθήκη Babel & Jest configs"
git push -u origin main
```
## Σημειώσεις
- Backend τρέχει στη θύρα 5000, frontend στη θύρα 3000.
- Έχουν προστεθεί αρχεία Babel και Jest για καλύτερη συμβατότητα ES Modules και testing.
- Το project υποστηρίζει CRUD λειτουργίες για σημειώσεις μέσω REST API και React components.

