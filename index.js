const express = require("express")
const app = express()

require('dotenv').config()

app.use(express.json())


const todoRouter = require('./routes/todoRoutes');
app.use("/api/todo", todoRouter);


app.listen(process.env.PORT, () => console.log("Server is running on port 5000"))