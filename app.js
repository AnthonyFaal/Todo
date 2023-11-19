const express = require("express")
const app = express()

require('dotenv').config()

app.use(express.json())


const bookRouter = require('./routes/todoRoutes')

app.use("/api/todo", bookRouter)

app.listen(process.env.PORT, () => console.log("Server is running on port 5000"))