const express = require('express');
const router = express.Router();
const statusTaskController = require('../controllers/status_task.controller');

// POST un nouveau statut de tâche
router.post('/status_task', statusTaskController.create);

// // // UPDATE un statut de tâche
router.put('/status_task/:id', statusTaskController.update);


// GET tous les statuts de tâches
router.get('/status_task', statusTaskController.get_all);

// GET un statut de tâche spécifique en utilisant son ID
router.get('/status_task/:id', statusTaskController.get);

// DELETE un statut de tâche spécifique en utilisant son ID
router.delete('/status_task/:id', statusTaskController.delete);


module.exports = router;