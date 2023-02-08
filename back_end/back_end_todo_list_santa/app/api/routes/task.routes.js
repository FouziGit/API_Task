const router = require("express").Router();

const task_controller = require('../controllers/task.controller');
const jwt = require('jsonwebtoken');
const passport = require("passport");
//declare  variable to check token to request 
const require_auth = passport.authenticate('jwt', { session: false });
// POST un nouveau statut de tâche
router.post('/task', require_auth,task_controller.create);

// // // UPDATE un statut de tâche
router.put('/task/:id', task_controller.update);


// GET tous les statuts de tâches
router.get('/task', task_controller.get_all);

// GET un statut de tâche spécifique en utilisant son ID
router.get('/task/:id', task_controller.get);

// DELETE un statut de tâche spécifique en utilisant son ID
router.delete('/task/:id', task_controller.delete);

module.exports = router;

