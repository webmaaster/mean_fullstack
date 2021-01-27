const express = require('express')
const bodyParser = require('body-parser');
const session = require('express-session')
const ejs = require('ejs')

const app = express()
app.use(session({secret: 'i solemnly swear i am up to no Good'}))

app.use(express.static(__dirname + '/static'))
app.use(bodyParser.urlencoded({extended: true}));


app.set('views', __dirname +'/views')
app.set('view engine', 'ejs')

app.get('/', (req, res)=>{
  //Servers static index.html
})

app.get('/names', (req, res)=>{

  //res.send('Boring page')
  // Now can replace with 'render' template that comes from ejs
  let names = ['Bab', 'carl', 'Michael']
  res.render('users', {names:names}) 

})

app.get('/form', (req, res)=>{
  res.render('form')
})

app.post('/submit', (req, res)=>{
  console.log("Received a new post ", req.body)
  res.redirect('/names')
})


app.get('/makecookie', (req, res)=>{
  if(req.session.name){
    console.log('Name exists')
  }else{
    console.log('Names does not exist')
  }
  req.session.name = 'bob'
  res.redirect('/showcookie')

})
app.get('/showcookie', (req, res)=>{
  console.log('req.session')
  res.render('cookie') 

})
app.get('/eatcookie', (req, res)=>{
  req.session.destroy()
  res.redirect('/showcookie')

})



app.listen(8000, ()=>{
  console.log('Server running on 8080')
})

