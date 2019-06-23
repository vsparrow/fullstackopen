import React, {useState} from 'react'

const App = (props) => {
    const [persons, setPersons] = useState([{name: 'Arto Hellas', number: '040-1234567'}])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    
    const addPerson = (event) => {
        event.preventDefault()
        //prevent adding empty items to persons
        if(newName.length > 0 && newNumber.length > 0){
            const newPersons = persons.concat({name: newName, number: newNumber})
            // console.log(newPersons)
            setPersons(newPersons)
            setNewName('')
            setNewNumber('')
        }
        else{
            console.log("Please enter a name and number before pressing enter")
        }
    }
    
    const showPersons = persons.map(person => 
        <div key={person.name}>{person.name} {person.number}</div>
    )
    
    const handleNameChange = (event) => {
        // console.log(event.target.value)
        setNewName(event.target.value)
    }
    
    const handleNumberChange = (event) => {
        // console.log(event.target.value)
        setNewNumber(event.target.value)
    }
    
    return (
        <div>
            <h2>Phonebook</h2>
            <form onSubmit={addPerson}>
                <div>name: <input value={newName} onChange={handleNameChange}/></div>
                <div>number: <input onChange={handleNumberChange}/></div>
                <div><button type="submit">add</button></div>
            </form>
            <h2>Numbers</h2>
            
            <div>{showPersons}</div>
        </div>    
    )
}

export default App