import React, {useState, useEffect} from 'react';
import axios from 'axios'
import Note from './components/Note'

const App = (props) => {
    const jsonserverUrl = 'http://fullstackopen-vsparrow.c9users.io:8081/notes'
    const [notes, setNotes] = useState([])
    const [newNote, setNewNote] = useState('')
    const [showAll, setShowAll] = useState(true)
    
    const hook = ()=>{
        // console.log('effect')
        axios
            .get(jsonserverUrl)
            // .get('http://fullstackopen-vsparrow.c9users.io:8081/notes')
            .then( response => {
                // console.log('promise fulfilled')
                setNotes(response.data)
            })
    }
    useEffect(hook, [])
    //if 2nd parameter of useEffect is empty array
    //the effect is only run along with the first render of component
    
    // console.log('render',notes.length,'notes')
    
    const notesToShow = showAll ? notes : notes.filter(note => note.important)
    const rows = ()=> notesToShow.map(note => 
        <Note key={note.id} note={note}/>
    )
    const handleNoteChange = event => {
         console.log(event.target.value)
         setNewNote(event.target.value)
    }
    const addNote = event => {
        event.preventDefault()
        const noteObject = {
            content: newNote,
            date: new Date().toISOString(),
            important: Math.random() > 0.5,
            // id: notes.length + 1,               
        }
        
        axios
        .post(jsonserverUrl,noteObject)
        .then(response => {
            // console.log(response)
            setNotes(notes.concat(response.data))
            setNewNote('')
        })
        
        //OLD
        // setNotes(notes.concat(noteObject))
        // setNewNote('')
    }
    
    return (
        <div>    
            <h1>Notes</h1>
            <div>
                <button onClick={() => setShowAll(!showAll)}>
                    show {showAll ? 'important' : 'all'}
                </button>
            </div>
            <ul>
                {rows()}
            </ul>
            <form onSubmit={addNote}>
                <input
                    value={newNote} 
                    onChange={handleNoteChange}
                />
                <button type="submit">save</button>
            </form>
        </div>    
    )
}


export default App

// axios
// .get('http://fullstackopen-vsparrow.c9users.io:8081/notes')
// .then(response =>{
//     const notes = response.data
//     // console.log(notes)
//     ReactDOM.render(<App notes={notes}/>, document.getElementById('root'));
// })