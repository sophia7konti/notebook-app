# Notebook App

Αυτή η εφαρμογή είναι ένα πλήρες σύστημα σημειώσεων που χρησιμοποιεί το MERN stack (MongoDB, Express, React, Node.js). Επιτρέπει στους χρήστες να δημιουργούν, να επεξεργάζονται και να διαγράφουν σημειώσεις μέσω ενός φιλικού προς το χρήστη περιβάλλοντος.

## Τεχνολογίες

- **Frontend:** React, React Router, Axios
- **Backend:** Node.js, Express
- **Database:** MongoDB
- **Testing:** Jest, React Testing Library

## Δομή φακέλων

notebook-app/
├── backend/ # Backend εφαρμογή (Node.js/Express)
│ ├── models/ # Μοντέλα MongoDB
│ ├── routes/ # API routes
│ ├── controllers/ # Λογική διαχείρισης αιτημάτων
│ ├── server.js # Είσοδος του server
│ └── package.json # Εξαρτήσεις και scripts
├── frontend/ # Frontend εφαρμογή (React)
│ ├── src/
│ │ ├── components/ # React components
│ │ ├── App.js # Κύριο component
│ │ └── index.js # Είσοδος του React
│ └── package.json # Εξαρτήσεις και scripts
└── README.md # Αυτό το αρχείο


## Οδηγίες εγκατάστασης

### Backend

1. Μετάβαση στον φάκελο backend:
   ```bash
   cd backend

2. Εγκατάσταση εξαρτήσεων:
   ```bash 
   npm install

3. Εκκίνηση του server:
   ```bash
   npm start

4. Εκτέλεση δοκιμών:
   ```bash
   npm test

### Frontend

1. Μετάβαση στον φάκελο frontend:
   ```bash
   cd frontend

2. Εγκατάσταση εξαρτήσεων:
   ```bash
   npm install

3. Εκκίνηση της εφαρμογής:
   ```bash
   npm start

4. Εκτέλεση δοκιμών:
   ```bash
   npm test

### Σημειώσεις

Ο backend server τρέχει συνήθως στη θύρα 5000.
Ο frontend server τρέχει συνήθως στη θύρα 3000.
Αν υπάρχει σύγκρουση θυρών, το React θα ζητήσει αλλαγή θύρας.
Για δοκιμές frontend χρησιμοποιείται το @testing-library/react.
Για δοκιμές backend χρησιμοποιείται το Jest.   