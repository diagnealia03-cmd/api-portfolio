require('dotenv').config(); // Charge les variables d'environnement (.env)
const express = require('express');
const connectDB = require('./config/db'); // Ton module de connexion MongoDB
const projectRoutes = require('./routes/projectRoutes'); // Tes nouvelles routes

const app = express();

// 1. Connexion à la base de données MongoDB Atlas
connectDB();

// 2. Middlewares de base
// Permet à l'API de recevoir et lire des données au format JSON
app.use(express.json());

// 3. Définition des routes
// Toutes les routes définies dans projectRoutes seront préfixées par /api/projects
app.use('/api/projects', projectRoutes);

// Route de test pour vérifier que l'API est en ligne
app.get('/', (req, res) => {
    res.send("L'API de mon Portfolio est opérationnelle ! 🚀");
});

// 4. Lancement du serveur
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`✅ Serveur démarré sur : http://localhost:${PORT}`);
});