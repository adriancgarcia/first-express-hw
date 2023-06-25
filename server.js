// require("dotenv").config() 
const express = require("express")
// const PORT = process.env.PORT
const app = express();


// app.get("/greeting/Kenzo/", (req, res) => {
//     res.send("Wow! Hello there, Kenzo." )
// })


// TIP CALCULATOR //
    app.get("/tip/:total/:tipPercentage/", (req, res) => {
        const tipAmount = (req.params.total / 100) * req.params.tipPercentage;
            console.log(tipAmount)
            res.send("the tip amount is " + tipAmount)
    })

// MAGIC 8 BALL
    const answers = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely", "You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again", "Don't count on it", "My reply is no", "My sources say no", "Outlook not so good", "Very doubtful"]

    app.get("/magic/:question", (req, res) => {
        const question = req.params.question;
        for (let i = 0; i < answers[i].length; i ++) {
            // res.send(`<h1> ${answers[Math.floor(Math.random() * answers.length)]} </h1>`)
            res.send(`${question} <h1> ${answers[Math.floor(Math.random() * answers.length)]} </h1>`)

    //    res.send(`<h1> ${answers[Math.floor(Math.random() * answers.length)]} </h1>`)
    }
        })


// PASS IT AROUND
    app.get("/bottles", (req, res) => {
        res.send(`99 bottles of beer on the wall.<br>
        99 bottles of beer.<br>
        <a href='/bottles/98'>Take one down pass it around.</a>`)
    })
    
    // I got help on this part by reading other questions in the 'Help' slack channel. //
    app.get("/bottles/:num_of_bottlesLeft", (req, res) => {
        const bottlesLeft = Number(req.params.num_of_bottlesLeft);
        if(bottlesLeft > 0) {
        res.send(`${bottlesLeft} bottles of beer on the wall.<br>
        <a href="${bottlesLeft - 1}"> Take one down pass it around</a><br>
        <a href="/bottles">Restart</a>`)
        }else {
            res.send(`No more bottles of beer on the wall.<br>
            <a href="/bottles">Restart</a>`)
        }
        // console.log (bottlesLeft)
    })





app.listen(3000, () => {
    console.log(`Listening on port 3000`)
})