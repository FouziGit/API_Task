const express = require('express');
const router = express.Router();
const typeTaskController = require('../controllers/type_task.controller');

// POST un nouveau type de tâche
router.post('/type_task', typeTaskController.create);

//  GET  tous les types de tâches
router.get('/type_task', typeTaskController.get_all);

// // GET un type de tâche spécifique en utilisant son ID
router.get('/type_task/:id', typeTaskController.get);


// // DELETE un type de tâche spécifique en utilisant son ID
router.delete('/type_task/:id', typeTaskController.delete);

// // UPDATE un type de tâche spécifique en utilisant son ID
router.put('/type_task/:id', typeTaskController.update);




module.exports = router;
