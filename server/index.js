const express = require("express");
const app = express();
const port = 8000;
const cors = require("cors");
const pool = require("./db");

//middleware
app.use(cors());
app.use(express.json());

//ROUTES

//post
app.post("/register", async (req, res) => {
  try {
    //  console.log(req.body);
    const { data } = req.body;
    const newUser = await pool.query(
      "INSERT INTO users (fname, lname, email, password) VALUES($1, $2, $3, $4) RETURNING *",
      [data]
    );
    res.json(newUser.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

app.listen(port, () => {
  console.log(`Server has started on port ${port}`);
});
