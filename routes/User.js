const express = require("express");
const {
  insertUser,
  fetchUser,
  fetchUsers,
  updateUser,
  deleteUser,
} = require("../controllers/User");
const { requestLoggerMiddleware } = require("../middleware/middleware");

const router = express.Router();

/* CREATE */
router.post("/user", requestLoggerMiddleware, insertUser);

// FETCH
router.get("/users", requestLoggerMiddleware, fetchUsers);
router.get("/user/:id", requestLoggerMiddleware, fetchUser);

/* UPDATE */
router.put("/user/:id", requestLoggerMiddleware, updateUser);

// Delete
router.delete("/user/:id", requestLoggerMiddleware, deleteUser);

module.exports = router;
