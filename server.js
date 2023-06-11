// require("dotenv").config() 
const express = require("express")
// const morgan = require("morgan") // importing the morgan library
// const PORT = process.env.PORT
const app = express();

// app.use(morgan("dev"))



app.get("/greeting/Kenzo/", (req, res) => {
    res.send("Wow! Hello there, Kenzo." )
})

app.get("/tip/:total/:tipPercentage/", (req, res) => {
    // const tipPercentage = (x * .01)
    const tipAmount = (req.params.total / 100) * req.params.tipPercentage;
        console.log(tipAmount)
        res.send("the tip amount is " + tipAmount)

})




app.listen(3000, () => {
    console.log(`Listening on port 3000`)
})