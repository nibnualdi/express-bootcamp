const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 3000;

// express
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// body-parser package
// app.use(bodyParser.json());
// app.use(
//   bodyParser.urlencoded({
//     extended: true,
//   })
// );

const router = require("./routers/router");

// try the req body from form data
app.post("/uploads", (req, res) => {
  console.log("req,res", req.body);
  res.json({ coba: req.body });
});

app.use("/", router);

app.listen(port, () => {
  console.log(`Server's running on port ${port}`);
});
