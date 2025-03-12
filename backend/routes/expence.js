const express = require("express");
const { addExpense, getExpense, deleteExpense } = require("../controller/expenceController");

const router = express.Router();

// Expense Routes
router.post("/add-expense", addExpense);
router.get("/get-expenses", getExpense);
router.delete("/delete-expense/:id", deleteExpense);

module.exports = router;
