const express = require('express')
const ejs = require('ejs')

const app = express()

app.set('views', _dirname +'/views')
app.set('view engine', 'ejs')

app.get('/', (req, res)=>{

  //res.send('Boring page')
  // Now can replace with 'render' template that comes from ejs
  res.render('users') 
})

app.listen(8000, ()=>{
  console.log('Server running on 8080')
})

