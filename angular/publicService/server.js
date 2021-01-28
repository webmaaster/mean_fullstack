const express = require('express')


const app = express()
app.use(express.static(__dirname + '/publicService/dist/publicService'))
app.use(express.json())

app.get('/', (req, res)=>{

})

app.get('/tasks',(req, res)=>{
  console.log('received request /tasks')
  res.json([{name: 'doshes'}, {name: 'sweeping'}])
})
app.listen(8000)
console.log("The server is running on : 8000")