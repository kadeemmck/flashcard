const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient
app.set("view engine", "pug")
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static(__dirname + "/public/" ))

let db
triviaCards = []

MongoClient.connect('mongodb://triviacards:Jordan117098@ds139534.mlab.com:39534/trivia',(err, database)=> {
    if (err) return console.log(err)
    db = database.db('trivia')
  app.listen(3000,function(){
  console.log("listening on port 3000")
  })  
})





app.get("/",(req, res) =>{
    let cursor = db.collection("grocerylist").find().toArray(function(err, results){
        if (err) return console.log(err)
        console.log(results)
        triviaCards = results
        res.render('index.pug')
        
       })

    })
 
app.post("/trivia",(req,res) =>{
    db.collection('trivias').save(req.body,(err,result) =>{
        if (err) return console.log(err)
        console.log('saved to database :)')
        res.redirect('/')
      })   
   
})
   app.get("/question",(req, res)=>{
    res.send(triviaCards)
    
})





