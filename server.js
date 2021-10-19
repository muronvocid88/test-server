const express = require("express");
const mongoose = require("mongoose");
const config = require("dotenv").config();

const app = express();

app.use(express.json());

const db = process.env.DB_URL;

mongoose
  .connect(db)
  .then(() => console.log("💻 Mondodb Connected"))
  .catch(err => console.error(err));

const auth = require('./Server/routes/Auth')
app.use(auth)

app.get("/", (req, res) => {
  res.send("Server working 🔥");
});


const port = process.env.PORT;

app.listen(port, () => `Server running on port port 🔥`);