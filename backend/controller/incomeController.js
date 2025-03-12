const IncomeSchema = require("../model/IncomeModel");

// ✅ Add an income
exports.addIncome = async (req, res) => {
    const { title, amount, category, description, date } = req.body;

    const income = new IncomeSchema({
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

        // ✅ Save income to database
        await income.save();
        res.status(201).json({ message: "Income Added" });

        console.log("New Income Added:", income);
    } catch (error) {
        console.error("Error adding income:", error);
        res.status(500).json({ message: "Server Error" });
    }
};

// ✅ Get all incomes
exports.getIncomes = async (req, res) => {
    try {
        const incomes = await IncomeSchema.find().sort({ createdAt: -1 });
        res.status(200).json(incomes);
    } catch (error) {
        console.error("Error fetching incomes:", error);
        res.status(500).json({ message: "Server Error" });
    }
};

// ✅ Delete an income
exports.deleteIncome = async (req, res) => {
    const { id } = req.params;

    try {
        const deletedIncome = await IncomeSchema.findByIdAndDelete(id);

        if (!deletedIncome) {
            return res.status(404).json({ message: "Income not found" });
        }

        res.status(200).json({ message: "Income Deleted" });
    } catch (error) {
        console.error("Error deleting income:", error);
        res.status(500).json({ message: "Server Error" });
    }
};
