
const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projectController');

router.post('/save', projectController.saveProject);
router.put('/update', projectController.updateProject);
router.get('/:projectID', projectController.getProject);

module.exports = router;
