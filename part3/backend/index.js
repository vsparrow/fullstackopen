const express = require('express')
const app = express()

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

// const app = http.createServer((req, res) => {
//     res.writeHead(200, { 'Content-Type': 'text/plain' })
//     // res.end('Hello World')
//     res.end(JSON.stringify(notes))
// })
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



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)    
})
