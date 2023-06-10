const express = require("express")
const app = express();
const port = 3000;
// const name = "Kenzo"



app.get("/greeting/Kenzo/", (req, res) => {
    res.send("Wow! Hello there, Kenzo." )
})




app.listen(3000, () => {
    console.log("Listening on port 3000")
})