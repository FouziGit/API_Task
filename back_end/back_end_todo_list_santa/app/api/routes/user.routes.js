const router = require("express").Router();
const User = require("../models/user.model");
const user_controller = require('../controllers/user.controller');



// POST un user
router.post("/user",user_controller.create)

// // GET tout les users (en admin)
router.get('/user', user_controller.get_all)

// // // GET un USER spécifique
router.get('/user/:id', user_controller.get);

// // // UPDATE un USER
router.put('/user/:id', user_controller.update);

// // // DELETE un USER
router.delete('/user/:id', user_controller.delete);

// LOGIN user
router.post("/login", user_controller.login);



module.exports = router;
