var express = require('express')
var http = require('http')

var router=require('./routes')
var body_Parser = require('body-parser')

const app = express()
app.use(body_Parser.urlencoded({extended:true}))
app.use(body_Parser.json())
app.use("/",router)

var server = http.createServer(app);

server.listen(9000,()=>{
    console.log("server is running in http://localhost:9000");
})
