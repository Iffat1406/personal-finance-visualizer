const express = require("express");
const { addExpense, getExpense, deleteExpense } = require("../controller/expenceController");
const { addIncome, getIncomes, deleteIncome } = require("../controller/incomeController");

const router = express.Router();

// Income Routes
router.post("/add-income", addIncome);
router.get("/get-incomes", getIncomes);
router.delete("/delete-income/:id", deleteIncome);

// Expense Routes
router.post("/add-expense", addExpense);
router.get("/get-expenses", getExpense);
router.delete("/delete-expense/:id", deleteExpense);

module.exports = router;
