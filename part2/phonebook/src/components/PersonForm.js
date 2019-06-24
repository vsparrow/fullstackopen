import React from 'react'

const PersonForm = (props) => {
    const persons = props.persons
    const setPersons = props.setPersons
    // const newName = props.setNewName
    // const newNumber = props.setNewNumber
    const setNewName = props.setNewName
    const setNewNumber = props.setNewNumber

    const findPerson = ()=>{
        const name = props.newName
        return persons.some(person => person.name.toLowerCase()===name.toLowerCase())
    }
    
    const addPerson = (event) => {
        event.preventDefault()
        //dont add same name twice
        if( findPerson()) {alert(`${props.newName} already exists`)}
        //prevent adding empty items to persons
        else if(props.newName.length > 0 && props.newNumber.length > 0 ){
            const newPersons = persons.concat({name: props.newName, number: props.newNumber})
            // console.log(newPersons)
            setPersons(newPersons)
            setNewName('')
            setNewNumber('')
            console.log(`newNumber is ${props.newNumber}`)
        }
        else{
            console.log("Please enter a name and number before pressing enter")
        }
    }
    
    const handleNameChange = (event) => {
        setNewName(event.target.value)
    }
    
    const handleNumberChange = (event) => {
        setNewNumber(event.target.value)
    }
    
    return(
        <form onSubmit={addPerson}>
            <div>name: <input value={props.newName} onChange={handleNameChange}/></div>
            <div>number: <input value={props.newNumber} onChange={handleNumberChange}/></div>
            <div><button type="submit">add</button></div>
        </form>
        
    )
}

export default PersonForm