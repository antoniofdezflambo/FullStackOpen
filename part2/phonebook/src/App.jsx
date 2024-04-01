import { useState } from 'react'
//import Filter from './components/Filter'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    if(newNumber !== '' && newName !== '') {
      if(persons.map(person => person.name).includes(newName)) {
        alert(`${newName} is already added to phonebook`)
      } else if(persons.map(person => person.number).includes(newNumber)) {
        alert(`${newNumber} is already added to phonebook`)
      } else {
        const newPerson = {name: newName, number: newNumber}
        setPersons(persons.concat(newPerson))
      }
    }
  }

  const changeName = (event) => {
    setNewName(event.target.value)
  }

  const changeNumber = (event) => {
    setNewNumber(event.target.value)
  }

  const changeFilter = (event) => {
    setFilter(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with <input onChange={changeFilter} />
      </div>
      <form onSubmit={addPerson}>
        <h3>Add new</h3>
        <div>
          name: <input onChange={changeName} />
        </div>
        <div>
          number: <input onChange={changeNumber}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.filter(
          person =>
            person.name.toLowerCase().includes(filter)).map(
              filteredPerson =>
                <li key={filteredPerson.name}>{filteredPerson.name} {filteredPerson.number}</li>
        )}
      </ul>
    </div>
  )
}

export default App