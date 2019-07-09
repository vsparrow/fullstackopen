import React from 'react'
import Person from './Person'

const Persons = (props) => {
    const newFilter = props.newFilter
    const persons = props.persons
    const setPersons = props.setPersons

    const personsFiltered = persons.filter(person => {
        return person.name.toLowerCase().includes(newFilter.toLowerCase())
    })
    
    const personsToShow = newFilter.length === 0 ? persons : personsFiltered

    const showPersons = personsToShow.map(person =>
      <Person key={person.name} person={person} setPersons={setPersons} persons={props.persons} setNewNotifcation={props.setNewNotifcation}
      />
    )    
    
    return (
        <div>{showPersons}</div>
    )
}

export default Persons