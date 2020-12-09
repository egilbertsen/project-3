const express = require ("express");
const app = express();
const PORT = process.env.PORT || 9999;

app.get("/", (req, res) => res.send("Everyday I spend my time drinkin wine, feelin fine"));

app.listen(PORT, () => console.log(
    `Listening on port ${PORT}`
));
