require('dotenv').config();
const express = require('express');
const cors = require('cors'); // 1. Importation
const connectDB = require('./config/db');
const projectRoutes = require('./routes/projectRoutes');

const app = express();

connectDB();

app.use(cors()); // 2. Activation (Autorise toutes les origines)
app.use(express.json());

app.use('/api/projects', projectRoutes);

app.get('/', (req, res) => {
    res.send("Backend Portfolio opérationnel ! 🚀");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`✅ Serveur sur : http://localhost:${PORT}`);
});