const express = require("express");
const cors = require("cors");
const route = require("./routes/route");

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use("/api", route);

app.get('/', (req, res) => {
    res.json({ message: "hello word" })
})

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
