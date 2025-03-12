require('dotenv').config();
const express = require ("express");
const Port = process.env.PORT || 3000 ;
const cors = require('cors');
const {db} = require("./dataBase/db");
const { readdirSync } = require('fs');
const path = require('path');
// Import Routes
const incomeRoutes = require("./routes/income");
const expenseRoutes = require("./routes/expence");

const app = express();

const _dirname = path.resolve();
// middleware
app.use(express.json())
app.use(cors({
    origin: "http://localhost:5173",  // Update to match frontend URL
    credentials: true
}))

//routes
// Use Routes with Specific Base Paths
app.use("/api/v1/income", incomeRoutes);
app.use("/api/v1/expense", expenseRoutes);

app.use(express.static(path.join(_dirname, "/frontend/dist")));
app.get('*', (req, res)=>{
    res.sendFile(path.resolve(_dirname, "frontend", "dist", "index.html"));
});

const server = ()=> {
    db()
app.listen(Port, () => { console.log(`Server is running on ${Port}`)
    })
}

server();