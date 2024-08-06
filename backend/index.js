const express = require("express");
const app = express();
const { GenerateImage } = require("./Controller");

const PORT = process.env.PORT || 4000;

const cors = require('cors');

app.use(express.json());
app.use(cors());

app.use("/test", (req, res) => {
    res.status(200).send("Server is up!");
})

app.post('/api/image', GenerateImage);


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});