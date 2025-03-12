const mongoose = require('mongoose');

// console.log('DB_URI:', process.env.DATABASE_URI);

// connect to MongoDB
const db =  async () => {
    try {
        await mongoose.connect(process.env.DATABASE_URI);
    } catch (err) {
        console.error(err);
    }
}


module.exports = {db};