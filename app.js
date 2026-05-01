require('dotenv').config(); // Charge les variables d'environnement
const express = require('express');
const connectDB = require('./config/db'); // Importe ton module de connexion

const app = express();

// Connexion à MongoDB Atlas
connectDB();

// Permet à l'API de lire le format JSON
app.use(express.json());

// Route de base pour tester si l'API répond
app.get('/', (req, res) => {
    res.send("L'API Portfolio est en ligne ! 🚀");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`✅ Serveur démarré sur : http://localhost:${PORT}`);
});