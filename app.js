const express = require('express')
const app = express()
const bodyParser = require('body-parser')
app.set("view engine", "pug")
app.use(bodyParser.urlencoded({extended: true}))
const MongoClient = require('mongodb').MongoClient

let db


MongoClient.connect('mongodb://sandbox:sandbox1@ds139645.mlab.com:39645/flashcardtrivia',(err, database)=> {
    if (err) return console.log(err)
    db = database.db('flashcardtrivia')
  app.listen(3000,function(){
  console.log("listening on port 3000")
  })
})





app.get("/",(req, res) =>{
    res.render("index.pug")
    let cursor = db.collection("flashcardtrivia").find().toArray(function(err, results){
        if (err) return console.log(err)
        console.log(results)
        res.render('index.pug', {flashcardtrivia: results})
       }) 
    

})

app.post("/flashcardtrivia",(req,res) =>{
    db.collection('flashcardtrivia').save(req.body,(err,result) =>{
        if (err) return console.log(err)
        console.log('saved to database :)')
        console.log(req.body)
        
    })

   

})




