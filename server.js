const express = require('express')
const bodyParser = require("body-parser")
const app = express()
const MongoClient = require('mongodb').MongoClient

MongoClient.connect(
    "mongodb+srv://bill:a1s2d3@cluster0.jrjep.mongodb.net/soccer?retryWrites=true&w=majority",
{
    useUnifiedTopology: true,
}
).then((client) => {
    console.log("connected to database")   
    app.use(bodyParser.urlencoded({ extended: true}))
    app.listen(3000, function () {
        console.log('listening on 3000')
    })
    app.set('view engine', 'ejs')    
    app.get('/', (req, res) => {
        res.render('index')
    })
    app.use(express.static(__dirname + 'css.main.css'))
    app.use(bodyParser.json())
})
