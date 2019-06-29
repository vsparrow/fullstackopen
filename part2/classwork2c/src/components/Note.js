import React from 'react';

const Note = ({note, toggleImportance}) => {
    // console.log(note)
    const label = note.important ? 'make not important' : 'make important'
    return(
        <div>    
            {note.content}
            <button onClick={toggleImportance}>{label}</button>
        </div>    
    )
}


export default Note