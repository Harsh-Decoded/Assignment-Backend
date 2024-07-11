const express = require("express");
const cors = require('cors');
const app = express();
const port = 3000;
const router = require("./routes/route");

app.use(cors());
app.use(express.json());
app.use("/api",router);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});