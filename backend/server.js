require('dotenv').config();
const express = require ("express");
const Port = process.env.PORT || 3000 ;
const cors = require('cors');
const {db} = require("./dataBase/db");
const { readdirSync } = require('fs');

const app = express();

// middleware
app.use(express.json())
app.use(cors({
    origin: "http://localhost:5173",  // Update to match frontend URL
    credentials: true
}))

//routes
readdirSync('./routes').map((route) => app.use('/api/v1', require('./routes/' + route)))

const server = ()=> {
    db()
app.listen(Port, () => { console.log(`Server is running on ${Port}`)
    })
}

server();