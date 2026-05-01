const express = require('express');
const router = express.Router();
const Project = require('../models/Project'); // Import du modèle que nous avons créé

// @route   POST /api/projects
// @desc    Ajouter un nouveau projet au portfolio
router.post('/', async (req, res) => {
    try {
        const newProject = new Project(req.body);
        const project = await newProject.save();
        res.status(201).json(project);
    } catch (err) {
        res.status(400).json({
            message: "Erreur lors de la création du projet",
            error: err.message
        });
    }
});

// @route   GET /api/projects
// @desc    Récupérer tous les projets pour les afficher sur le portfolio
router.get('/', async (req, res) => {
    try {
        const projects = await Project.find().sort({ createdAt: -1 }); // Triés du plus récent au plus ancien
        res.json(projects);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// @route   GET /api/projects/:id
// @desc    Récupérer un seul projet par son ID (utile pour une page "Détails")
router.get('/:id', async (req, res) => {
    try {
        const project = await Project.findById(req.params.id);
        if (!project) return res.status(404).json({ message: "Projet introuvable" });
        res.json(project);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// @route   DELETE /api/projects/:id
// @desc    Supprimer un projet (Administration)
router.delete('/:id', async (req, res) => {
    try {
        const project = await Project.findByIdAndDelete(req.params.id);
        if (!project) {
            return res.status(404).json({ message: "Impossible de supprimer : projet non trouvé" });
        }
        res.json({ message: "Le projet a été retiré de ton portfolio avec succès" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;