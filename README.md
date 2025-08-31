# Notebook App

Αυτή η εφαρμογή είναι ένα πλήρες σύστημα σημειώσεων που χρησιμοποιεί το **MERN stack** (MongoDB, Express, React, Node.js). Επιτρέπει στους χρήστες να δημιουργούν, να επεξεργάζονται και να διαγράφουν σημειώσεις μέσω ενός φιλικού προς το χρήστη περιβάλλοντος.

## Τεχνολογίες

- **Frontend:** React, React Router, Axios, @testing-library/react
- **Backend:** Node.js, Express, MongoDB, Mongoose, Morgan, Swagger, Cors, Dotenv
- **Database:** MongoDB
- **Testing:** Jest, React Testing Library

---

## Δομή φακέλων

```
notebook-app/
├── backend/             # Backend εφαρμογή (Node.js/Express)
│   ├── controllers/     # Λογική διαχείρισης αιτημάτων
│   ├── models/          # Μοντέλα MongoDB
│   ├── routes/          # API routes
│   ├── server.js        # Είσοδος του server
│   └── package.json     # Εξαρτήσεις και scripts
├── frontend/            # Frontend εφαρμογή (React)
│   ├── src/
│   │   ├── components/      # React components
│   │   ├── components2/     # Σύνθετα components
│   │   ├── App.js           # Κύριο component
│   │   └── index.js         # Είσοδος του React
│   └── package.json          # Εξαρτήσεις και scripts
└── README.md             # Αυτό το αρχείο
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

5. Swagger τεκμηρίωση:
- Άνοιξε στο browser: [http://localhost:5000/api-docs](http://localhost:5000/api-docs)

6. Εκτέλεση δοκιμών:
```bash
npm test
```

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

### Σημειώσεις
- Frontend χρησιμοποιεί React components για διαχείριση σημειώσεων.
- Υποστηρίζει add, delete, list σημειώσεων.
- Testing γίνεται με **@testing-library/react**.

---

## GitHub

Για να ανεβάσεις το project:

```bash
git add .
git commit -m "Initial commit"
git push -u origin main
```

