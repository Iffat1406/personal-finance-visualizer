const ExpenseSchema = require("../model/ExpenseModel");

// ✅ Add an expense
exports.addExpense = async (req, res) => {
    const { title, amount, category, description, date } = req.body;

    const expense = new ExpenseSchema({
        title,
        amount,
        category,
        description,
        date
    });

    try {
        // 🔹 Validation: Check if all fields exist
        if (!title || !category || !description || !date) {
            return res.status(400).json({ message: "All fields are required!" });
        }

        // ✅ Save expense to database
        await expense.save();
        res.status(201).json({ message: "Expense Added" });

        console.log("New Expense Added:", expense);
    } catch (error) {
        console.error("Error adding expense:", error);
        res.status(500).json({ message: "Server Error" });
    }
};

// ✅ Get all expenses
exports.getExpense = async (req, res) => {
    try {
        const expenses = await ExpenseSchema.find().sort({ createdAt: -1 });
        res.status(200).json(expenses);
    } catch (error) {
        console.error("Error fetching expenses:", error);
        res.status(500).json({ message: "Server Error" });
    }
};

// ✅ Delete an expense
exports.deleteExpense = async (req, res) => {
    const { id } = req.params;

    try {
        const deletedExpense = await ExpenseSchema.findByIdAndDelete(id);

        if (!deletedExpense) {
            return res.status(404).json({ message: "Expense not found" });
        }

        res.status(200).json({ message: "Expense Deleted" });
    } catch (error) {
        console.error("Error deleting expense:", error);
        res.status(500).json({ message: "Server Error" });
    }
};
