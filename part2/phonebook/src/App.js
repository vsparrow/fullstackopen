import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'


const App = (props) => {
    // new persons object

    //OLD persons object
    // const [persons, setPersons] = useState([
        // { name: 'Arto Hellas', number: '040-123456' },
        // { name: 'Ada Lovelace', number: '39-44-5323523' },
        // { name: 'Dan Abramov', number: '12-43-234345' },
        // { name: 'Mary Poppendieck', number: '39-23-6423122' }
    // ])
    const [persons, setPersons] = useState([]) //new blank persons
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [newFilter, setNewFilter] = useState('')
    
    useEffect(()=>{
        // console.log("effect")
        axios
        .get('http://fullstackopen-vsparrow.c9users.io:8081/persons')
        .then(response => {
            const persons = response.data
            setPersons(persons)
        })        
    },[])

    
    // const findPerson = ()=>{
    //     const name = newName
    //     return persons.some(person => person.name.toLowerCase()===name.toLowerCase())
    // }
    
    // const addPerson = (event) => {
    //     event.preventDefault()
    //     //dont add same name twice
    //     if( findPerson()) {alert(`${newName} already exists`)}
    //     //prevent adding empty items to persons
    //     else if(newName.length > 0 && newNumber.length > 0 ){
    //         const newPersons = persons.concat({name: newName, number: newNumber})
    //         // console.log(newPersons)
    //         setPersons(newPersons)
    //         setNewName('')
    //         setNewNumber('')
    //         console.log(`newNumber is ${newNumber}`)
    //     }
    //     else{
    //         console.log("Please enter a name and number before pressing enter")
    //     }
    // }
    
    // const personsFiltered = persons.filter(person => {
    //     return person.name.toLowerCase().includes(newFilter.toLowerCase())
    // })
    
    // const personsToShow = newFilter.length === 0 ? persons : personsFiltered

    // const showPersons = personsToShow.map(person =>
    //     <div key={person.name}>{person.name} {person.number}</div>
    // )

    // const handleNameChange = (event) => {
    //     setNewName(event.target.value)
    // }
    
    // const handleNumberChange = (event) => {
    //     setNewNumber(event.target.value)
    // }
    
    // const handleFilterChange = (event) => {
    //     setNewFilter(event.target.value)
    // }
    
    return (
        <div>
            <h2>Phonebook</h2>
            <Filter setNewFilter={setNewFilter} />
            <h2>add a new</h2>
            <PersonForm persons={persons} setPersons={setPersons} newName={newName} setNewName={setNewName} newNumber={newNumber} setNewNumber={setNewNumber}/>
    
            <h2>Numbers</h2>
            <Persons newFilter={newFilter} persons={persons}/>            

        </div>    
    )
}

export default App