const express = require('express');
const router = express.Router();
const Project = require('../models/Project');

// @route   POST /api/projects
// @desc    Ajouter un nouveau projet
router.post('/', async (req, res) => {
    try {
        const newProject = new Project(req.body);
        const project = await newProject.save();
        res.status(201).json(project);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// @route   GET /api/projects
// @desc    Récupérer tous les projets
router.get('/', async (req, res) => {
    try {
        const projects = await Project.find();
        res.json(projects);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;