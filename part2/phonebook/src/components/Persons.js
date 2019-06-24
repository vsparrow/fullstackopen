import React from 'react'


const Persons = (props) => {
    const newFilter = props.newFilter
    const persons = props.persons
    
    const personsFiltered = persons.filter(person => {
        return person.name.toLowerCase().includes(newFilter.toLowerCase())
    })
    
    const personsToShow = newFilter.length === 0 ? persons : personsFiltered

    const showPersons = personsToShow.map(person =>
        <div key={person.name}>{person.name} {person.number}</div>
    )    
    
    return (
        <div>{showPersons}</div>
    )
}

export default Persons