import { useEffect, useState } from 'react'
import Filter from './Filter'
import PersonForm from './PersonForm'
import Person from './Persons'
import React from 'react';
import axios from 'axios'

const App = () => {
  const [persons, setPersons] = useState([])

  const [newName, setNewName] = useState('')
  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const[newNumber, setNewNumber] = useState('')
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const [newFilter, setNewFilter] = useState('')
  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
  }
  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
  }, [])

  const personsToShow =  newFilter === ''
  ? persons
  :persons.filter(person => person.name.toLowerCase().startsWith(newFilter.toLowerCase()))
  
  const addEntry = (event) => {
    event.preventDefault()
    const isDuplicate = persons.some((person) => newName === person.name )
    if (isDuplicate) {
      alert(`${newName} is already added to phonebook`)
    } else {
      const newPersonObject = {name: newName, number: newNumber}
      setPersons(persons.concat(newPersonObject))
      setNewName('')
      setNewNumber('')
    }
  }

  const personsList = personsToShow.map((person, i) => <li key={i}>{person.name}: {person.number}</li>)

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter newFilter={newFilter}  handleFilterChange={handleFilterChange}/>
      <h2>Add New</h2>
      <PersonForm addEntry={addEntry} newName={newName} handleNameChange={handleNameChange}
       newNumber={newNumber} handleNumberChange={handleNumberChange}/>
      <h2>Numbers</h2>
      <Person personsList={personsList}/>
    </div>
  )
}

export default App
