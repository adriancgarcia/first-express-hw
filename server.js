// require("dotenv").config() 
const express = require("express")
// const PORT = process.env.PORT
const app = express();


app.get("/greeting/Kenzo/", (req, res) => {
    res.send("Wow! Hello there, Kenzo." )
})

app.get("/tip/:total/:tipPercentage/", (req, res) => {
    const tipAmount = (req.params.total / 100) * req.params.tipPercentage;
        console.log(tipAmount)
        res.send("the tip amount is " + tipAmount)
})

// app.get("/magic", (req, res) => {
    const answers = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]

    app.get("/magic", (req, res) => {
        for (let i = 0; i < answers[i].length; i ++) {
            res.send(`<h1> ${answers[Math.floor(Math.random() * answers.length)]} </h1>`)
            
       }

        })





app.listen(3000, () => {
    console.log(`Listening on port 3000`)
})
// })