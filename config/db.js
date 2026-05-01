const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        // On récupère la variable MONGO_URI du fichier .env
        const conn = await mongoose.connect(process.env.MONGO_URI);

        console.log(`✅ MongoDB Connecté : ${conn.connection.host}`);
    } catch (error) {
        console.error(`❌ Erreur de connexion : ${error.message}`);
        process.exit(1); // Arrête l'app si la connexion échoue
    }
};

module.exports = connectDB;