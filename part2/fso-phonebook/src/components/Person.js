import React from 'react'
import personService from '../services/persons'

const Person = ({person,persons,setPersons,setNewNotifcation})=>{
  // setNewNotifcation = props.setNewNotifcation
  
  const updateState = ()=>{
    const newPersons = persons.filter(p => p.id !== person.id )
    setPersons(newPersons)
  }


  const handleClick = ()=>{
    if (window.confirm(`Delete ${person.name}?`)){
      personService
      .remove(person.id)
      .then(response => {
        setNewNotifcation(`${person.name} deleted`)
        setTimeout(()=>{setNewNotifcation(null)},5000)
        updateState() 
      })
    }
  }

  return(
        <div >{person.name} {person.number}
          <button onClick={handleClick}> delete </button>
        </div>
  )
}


export default Person