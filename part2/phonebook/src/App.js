import React, {useState} from 'react'

const App = (props) => {
    const [persons, setPersons] = useState([{name: 'Arto Hellas'}])
    const [newName, setNewName] = useState('')
    
    const addPerson = (event) => {
        event.preventDefault()
        //prevent adding empty items to persons
        if(newName.length > 0){
            const newPersons = persons.concat({name: newName})
            // console.log(newPersons)
            setPersons(newPersons)
            setNewName('')            
        }
        else{
            console.log("Please enter a name before pressing enter")
        }
    }
    
    const showPersons = persons.map(person => 
        <div key={person.name}>{person.name}</div>
    )
    
    const handleNameChange = (event) => {
        // console.log(event.target.value)
        setNewName(event.target.value)
    }
    
    return (
        <div>
            <h2>Phonebook</h2>
            <form onSubmit={addPerson}>
                <div>
                    name: <input value={newName} onChange={handleNameChange}/>
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
            <h2>Numbers</h2>
            
            <div>{showPersons}</div>
        </div>    
    )
}

export default App