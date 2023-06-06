const express = require("express")
const bodyParser = require("body-parser")
const path = require("path")

const app = express()

app.use(express.static(path.join(__dirname + "/public/")))
app.use(bodyParser.urlencoded({extended : false}))
app.use(bodyParser.json())
app.get("/",(req,res)=> res.redirect("/index.html"))
app.get("/index.html", (req, res) => res.status(200).sendFile(path.join(__dirname + "/public/views/index.html")))
app.post("/thank.html", (req, res) => {
    let name = req.body.name
    let surname = req.body.surname
    let number = req.body.number
    let month = req.body.month
    let year = req.body.year
    let cvc = req.body.cvc

    res.status(200).send(
        `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="../styles.css">
            <title>Frontend Mentor | Interactive card details form</title>
        </head>
        <body>
            <div class="root">
                <div class="root_inner">
                    <aside class="cards">
        
                        <div class="card1">
                          <div class="top">
                            <div class="cercle1"></div>
                            <div class="cercle2"></div>
                          </div>
                          <div class="bottom">
                            <h1 id="number">${number}</h1>
                
                            <div class="Bottom">
                              <p id="name">${name}</p>
                              <div>
                                <p id="month">${month}</p>
                                <p>/</p>
                                <p id="year">${year}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                
                        <div class="card2">
                          <p id="cvc">${cvc}</p>
                        </div>
                
                    </aside>
                    <article class="thank">
                        <img src="../images/icon-complete.svg" alt="">
                        <div>
                            <h1>THANK YOU!</h1>
                            <p>We've added your card details</p>
                        </div>
                        <button class="confirm">Continue</button>
                    </article>
                </div>
            </div>
        </body>
        </html>`
    )

    
})

app.use((req,res,next) => res.status(404).json({error : "Page nor Found", code : 404}))


app.listen(5500)
