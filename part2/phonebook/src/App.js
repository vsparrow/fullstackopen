import React, {useState} from 'react'

const App = (props) => {
    const [persons, setPersons] = useState([
        { name: 'Arto Hellas', number: '040-123456' },
        { name: 'Ada Lovelace', number: '39-44-5323523' },
        { name: 'Dan Abramov', number: '12-43-234345' },
        { name: 'Mary Poppendieck', number: '39-23-6423122' }
    ])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [newFilter, setNewFilter] = useState('')
    
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
    
    const personsFiltered = persons.filter(person => {
        // console.log(`is ${newFilter.toLowerCase()} in ${person.name}? ${person.name.toLowerCase().includes(newFilter.toLowerCase())}`)
        return person.name.toLowerCase().includes(newFilter.toLowerCase())
    })
    
    const personsToShow = newFilter.length === 0 ? persons : personsFiltered
    // const personsToShow = newFilter.length === 0 ? persons : persons.filter(person => {
    //     // console.log(`is ${newFilter.toLowerCase()} in ${person.name}? ${person.name.toLowerCase().includes(newFilter.toLowerCase())}`)
    //     return person.name.toLowerCase().includes(newFilter.toLowerCase())
    // })

    const showPersons = personsToShow.map(person =>
        <div key={person.name}>{person.name} {person.number}</div>
    )
    
    //OLD
    // const showPersons = persons.map(person => 
    //     <div key={person.name}>{person.name} {person.number}</div>
    // )
    
    
    
    const handleNameChange = (event) => {
        // console.log(event.target.value)
        setNewName(event.target.value)
    }
    
    const handleNumberChange = (event) => {
        // console.log(event.target.value)
        setNewNumber(event.target.value)
    }
    
    const handleFilterChange = (event) => {
        // console.log(event.target.value)
        setNewFilter(event.target.value)
    }
    
    return (
        <div>
            <h2>Phonebook</h2>
            <div>filter shown with<input onChange={handleFilterChange}/></div>
            <h2>add a new</h2>
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