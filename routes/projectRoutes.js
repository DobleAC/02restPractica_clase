const express = require('express');

const projectController = require('../controllers/projectController');

const authticateToken = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/',authticateToken,projectController.getAllProjects);
router.post('/',authticateToken,projectController.createProject); 

module.exports = router;