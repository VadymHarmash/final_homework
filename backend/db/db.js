const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_URL || 'mongodb://127.0.0.1:27017/final_task', { useNewUrlParser: true, useUnifiedTopology: true })
        console.log('Connected to DB')
    } catch (error) {
        console.error('DB connection error:', error)
    }
}

module.exports = connectDB
