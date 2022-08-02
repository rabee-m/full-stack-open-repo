import { useEffect, useState } from 'react'
import Filter from './Filter'
import PersonForm from './PersonForm'
import Person from './Persons'
import React from 'react';
import personService from './services/persons'

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
    personService
      .getAll()
      .then(personsData => {
        setPersons(personsData)
      })
  }, [])

  const addEntry = (event) => {
    event.preventDefault()
    const isDuplicate = persons.some((person) => newName === person.name )
    if (isDuplicate) {
      const windowMessage = `${newName} is already added to phonebook, replace the old number with a new one?`
      if (window.confirm(windowMessage)) {
        const updatedPerson = persons.find(p => p.name === newName)
        updatedPerson.number = newNumber;
        personService
          .update(updatedPerson)
          .then(changedPerson => {
            setPersons(persons.map(p => p.id !== changedPerson.id ? p : changedPerson))
          })

      }
    } else {
      const newPersonObject = {name: newName, number: newNumber}
      // setPersons(persons.concat(newPersonObject))
      // setNewName('')
      // setNewNumber('')
      personService
        .add(newPersonObject)
        .then(personsData => {
          setPersons(persons.concat(personsData))
          setNewName('')
          setNewNumber('')
        })
    }
  }

  const deleteEntry = (event) => {
    event.preventDefault();
    const personToDelete = persons[event.target.id]
    if (window.confirm(`Delete ${personToDelete.name} ?`)) {
      personService
        .deleteData(personToDelete.id)
        .then(personsData => {
          setPersons(persons.filter(p => p.id !== personToDelete.id))
        })
    }
  }

  const personsToShow =  newFilter === ''
  ? persons
  :persons.filter(person => person.name.toLowerCase().startsWith(newFilter.toLowerCase()))
  
  const personsList = personsToShow.map((person, i) => <li key={i}>{person.name}: {person.number}
  <button id={i} onClick={deleteEntry}> delete </button></li>)

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
