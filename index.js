const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("*", (req, res) => {
    res
        .status(200)
        .send("Working");
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Listening on ${PORT}`));
