import React from 'react';
import ReactDOM from 'react-dom';
// import axios from 'axios'
import App from './App'

// const App = (props) => {
//     console.log("props is ",props)
//     const allnotes = props.notes.map(note=>
//         <li >{note.content}</li>
//     )
//     return (
//         <div>    
//             Hi
//             {allnotes}
//         </div>    
//     )
// }


ReactDOM.render(<App />, document.getElementById('root'));

// axios
// .get('http://fullstackopen-vsparrow.c9users.io:8081/notes')
// .then(response =>{
//     const notes = response.data
//     // console.log(notes)
//     ReactDOM.render(<App notes={notes}/>, document.getElementById('root'));
// })
// const promise = axios.get('http://fullstackopen-vsparrow.c9users.io:8081/notes')
// // const promise = axios.get('http://localhost:8080/notes')
// // console.log(promise)
// promise.then(res =>{
//     console.log(res)
// })

// const promise2 = axios.get('http://fullstackopen-vsparrow.c9users.io:8081/foobar')
// // console.log(promise2)
// promise2.then(res =>{
//     console.log(res)
// })