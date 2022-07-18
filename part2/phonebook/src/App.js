import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '647-321-0921' }
  ]) 
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
      <div>filter shown with
        <input value = {newFilter}
        onChange = {handleFilterChange}
        />
      </div>
      <h2>add new</h2>
      <form onSubmit = {addEntry}>
        <div>
          name:
          <input
          value={newName}
          onChange={handleNameChange}
          />
        </div>
        <div>
          number:
          <input
          value={newNumber}
          onChange={handleNumberChange}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {personsList}
      </ul>
    </div>
  )
}

export default App
