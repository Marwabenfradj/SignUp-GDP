const express = require("express");
const { getAllUsers, registerUser } = require("../controllers/users");
const router = express.Router();

router.post('/register',registerUser)
router.get('/',getAllUsers)


// export router
module.exports = router