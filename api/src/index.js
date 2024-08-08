const express = require("express");
const cors = require("cors");
const { categoryRouter } = require("./routes/category.route");

const app = express();

app.use(cors());

app.use(express.json());

app.use("/categories", categoryRouter);

app.listen(3001, () => {
  console.log("Server is running 3001 port");
});
