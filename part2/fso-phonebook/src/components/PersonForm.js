import React from 'react'
// import axios from 'axios'
// import Notification from './Notification'
import personService from '../services/persons'

const PersonForm = (props) => {
    const persons = props.persons
    const setPersons = props.setPersons
    const setNewName = props.setNewName
    const setNewNumber = props.setNewNumber
    //2.19 below
    // const newNotification = props.newNotification
    const setNewNotifcation = props.setNewNotifcation
    //

    const findPerson = ()=>{
        const name = props.newName
        return persons.some(person => person.name.toLowerCase()===name.toLowerCase())
    }
    
    const findPersonID = name =>{
        return persons.find(person => person.name.toLowerCase()===name.toLowerCase()).id
    }

    const updatePerson = data => persons.filter( person=> data.id !== person.id).concat(data)

    const resetFields = () => {
      setTimeout(()=>{setNewNotifcation(null)},5000)
      setNewName('')
      setNewNumber('')     
    }

    const addPerson = (event) => {
        event.preventDefault()
        //dont add same name twice
        if( findPerson()) {
          if (window.confirm(`${props.newName} already exists in th phonebook. Replace the old number with a new one?`)) {
            // alert("user pressed ok")
            //find person id
            const id = findPersonID(props.newName)
            // alert(`${props.newName}'s id is ${id}`)
            //update person 
            const updateData = {name: props.newName,number: props.newNumber}
            //call person service to PUT/patch data
            personService
            .update(id, updateData)
            //return data looks like:
            //{name: "Arto Hella2", number: "23-68678", id: 7}
            // .then(data=> console.log(data))
            .then(data =>  setPersons(updatePerson(data)) )
            //update data on return
            //notification of update
            .then(()=>{ setNewNotifcation(`Updated ${props.newName}`); resetFields() })
            .catch(error => {
            //   alert(error)
            //   console.log(error)
              setNewNotifcation(`Information of ${props.newName} has already been removed from the server`)
              resetFields()
            })
            //below is success
            // setNewNotifcation(`Updated ${props.newName}`)
            // // setTimeout(()=>{setNewNotifcation(null)},5000)
            // // setNewName('')
            // // setNewNumber('')
            // resetFields()
            //end update person
          }
          else {
            //do nothing user chose to cancel transaction
            // alert("user chose to cancel transaction")
          }
        }//if findPerson
        //prevent adding empty items to persons
        else if(props.newName.length > 0 && props.newNumber.length > 0 ){
            const newPerson = {name: props.newName, number: props.newNumber}
            // const newPersons = persons.concat(newPerson)
            // setPersons(newPersons)
            //2.15
            // axios
            // .post('https://json-server--vsparrow.repl.co/persons', newPerson)
            personService
            .create(newPerson)
            // .then(response => {
            //   console.log(response)
            //   console.log(response.data)
            //   setPersons(persons.concat(response.data))
            //  } 
            // )
            .then(data => setPersons(persons.concat(data)))

            //2.19
            setNewNotifcation(`Added ${props.newName}`)
            resetFields()
            // console.log("newNotification is ",newNotification) 
            // setTimeout(()=>{setNewNotifcation(null)},5000) 
            //2.19end

            //end 2.15
            // setNewName('')
            // setNewNumber('')
            // console.log(`newNumber is ${props.newNumber}`)

        }
        else{
            // console.log("Please enter a name and number before pressing enter")
            alert("Please enter a name and number")
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