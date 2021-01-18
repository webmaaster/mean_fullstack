const express = require('express')

const app = express()

app.get('/', function(request, response){
  response.send('<h1>Welcome to our page!</h1>')
})

app.get('/second', function(request, res){
  res.send('/second page')
})


app.listen(8080, function(){
  console.log('server running on port 8080')
})