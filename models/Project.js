const mongoose = require('mongoose');

// On définit la structure d'un projet pour la base de données
const ProjectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Le titre est obligatoire"]
    },
    description: {
        type: String,
        required: [true, "La description est obligatoire"]
    },
    technologies: {
        type: [String], // Un tableau de chaînes de caractères (ex: ["React", "Node"])
        default: []
    },
    githubLink: String,
    demoLink: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Project', ProjectSchema);