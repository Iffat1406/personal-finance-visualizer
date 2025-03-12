const express = require("express");
const { addIncome, getIncomes, deleteIncome } = require("../controller/incomeController");

const router = express.Router();

// Income Routes
router.post("/add-income", addIncome);
router.get("/get-incomes", getIncomes);
router.delete("/delete-income/:id", deleteIncome);

module.exports = router;
