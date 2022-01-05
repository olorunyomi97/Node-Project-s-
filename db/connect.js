const mongoose = require('mongoose')

const connectionString = "mongodb+srv://biggie:12345@nodeexpressprojects.psy5l.mongodb.net/TaskManager-DB?retryWrites=true&w=majority"


const connectDB = (url) => {
    return (
        mongoose
            .connect(connectionString, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false,
            useUnifiedTopology: true
        })
    )
}
module.exports = connectDB

// .then(()=>console.log('CONNECTED TO TASK MANAGER DB...'))
// .catch((err) => console.log(err))