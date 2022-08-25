let express = require('express')
let bodyParser = require('body-parser')
let add=require('./controllers/Midterm1-65')
const app = express()
require('./route.js')(app)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extened: true}))

require('./route.js')(app)


//api ข้อ1 โจทย์ x*x  api ข้อ2 โจทย์ lcm(x,y)ครน
app.get('/add1' ,function(req,res){
    input = parseInt(JSON.stringify(req.body['input']))
    input1 = parseInt(JSON.stringify(req.body['input']))
    console.log('input = '+ input)
    console.log('input = '+ input1)
    output = input *input
    output1 = input1*input1
    

    res.send("API 1 :"+output.toString()+"      API 2 :"+output1.toString())
    
})


















let port = 8081

app.listen(port, function () {
    console.log('server running on ' + port)
})