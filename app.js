const express = require("express");
const app = express();
require('dotenv').config();
app.use(express.json());

const port = process.env.PORT || 5000;

const bookRouter = require('./routes/todoRoutes');
app.use("/api/todo", bookRouter);

app.listen(port, () => console.log(`Server is running on port ${port}`));