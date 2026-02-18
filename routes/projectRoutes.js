// ============================
// PROJECTS ROUTES
// ============================

const express = require('express');
const router = express.Router();
const {
    getAllProjects,
    getProjectBySlug,
    createProject,
    updateProject,
    deleteProject
} = require('../controllers/projectController');

// Public routes
router.get('/projects', getAllProjects);
router.get('/projects/:slug', getProjectBySlug);

// Admin routes (should be protected with authentication middleware)
router.post('/projects', createProject);
router.put('/projects/:id', updateProject);
router.delete('/projects/:id', deleteProject);

module.exports = router;
