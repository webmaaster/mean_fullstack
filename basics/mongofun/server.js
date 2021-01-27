const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
const session = require('express-session')
const ejs = require('ejs')

const app = express()
mongoose.connect('mongodb://localhost/janmean', {useNewUrlParser: true});

const StudentSchema = new mongoose.Schema({
  name: String,
  age: Number
})

const Student = mongoose.model('Student', StudentSchema)

app.use(session({secret: 'i solemnly swear i am up to no Good'}))

app.use(express.static(__dirname + '/static'))
app.use(bodyParser.urlencoded({extended: true}));


app.set('views', __dirname +'/views')
app.set('view engine', 'ejs')

app.get('/', (req, res)=>{
  //Servers static index.html
})

app.get('/setup', (req, res)=>{
  //create object
  const student = new Student()
  student.name = 'bob'
  student.age = 12
  student.save()
  .then(newstudent => console.log('saved: ', newstudent))
  .catch(err => console.log('error:', err))
  res.redirect('/')
})

app.listen(8080, ()=>{
  console.log('Server running on 8080')
})

