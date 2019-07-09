import React, { useState, useEffect } from 'react'
// import axios from 'axios'
import Filter from './components/Filter'
import Notification from './components/Notification'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import personService from './services/persons'

const App = (props) => {

  const [persons, setPersons] = useState([]) //new blank persons
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')
  const [newNotification, setNewNotifcation] = useState(null)
  
  useEffect(() => {
    personService
      .getAll()
      .then(data => setPersons(data))
  }, [])


  return (
    <div>
      <h2>Phonebook</h2>
      <Notification newNotification={newNotification} />
      <Filter setNewFilter={setNewFilter} />
      <h2>add a new</h2>
      <PersonForm persons={persons} setPersons={setPersons} newName={newName} setNewName={setNewName} newNumber={newNumber} setNewNumber={setNewNumber}
        newNotification={newNotification}
        setNewNotifcation={setNewNotifcation}
      />

      <h2>Numbers</h2>
      <Persons newFilter={newFilter} persons={persons} setPersons={setPersons}
        setNewNotifcation={setNewNotifcation}
      />

    </div>
  )
}

export default App