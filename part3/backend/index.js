const express = require('express')
const app = express()
const bodyParser = require('body-parser')
let notes = [
  {
    id: 1,
    content: "HTML is easy",
    date: "2019-05-30T17:30:31.098Z",
    important: true
  },
  {
    id: 2,
    content: "Browser can execute only Javascript",
    date: "2019-05-30T18:39:34.091Z",
    important: false
  },
  {
    id: 3,
    content: "GET and POST are the most important methods of HTTP protocol",
    date: "2019-05-30T19:20:14.298Z",
    important: true
  }
]

app.use(bodyParser.json())

app.get('/', (req,res)=>{
    res.send('<h1>Hello World</h1>')
})

app.get('/notes/:id',(req,res)=>{
    const id = Number(req.params.id)
    const note = notes.find(note => note.id === id)

    if (note) {return res.json(note)}
    else {return res.status(404).end()}
})
    
app.get('/notes', (req,res)=>{
    res.json(notes)
})


app.delete('/notes/:id',(req,res)=>{
  const id = Number(req.params.id)
  notes = notes.filter(note => note.id !== id)
  res.status(204).end()
})

app.post('/notes', (req,res)=>{
  const maxID = notes.length > 0 ? Math.max(...notes.map(n => n.id)) : 0
  const note = req.body
  note.id = maxID + 1
  notes = notes.concat(note)
  // console.log(note)
  res.json(note)
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)    
})
