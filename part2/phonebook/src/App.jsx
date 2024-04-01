import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    if(!persons.map(person => person.name).includes(newName) && newName !== '') {
      const newPerson = {name: newName}
      setPersons(persons.concat(newPerson))
    } else if(newName !== '') {
      alert(`${newName} is already added to phonebook`)
    }
  }

  const changeInput = (event) => {
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input onChange={changeInput} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map(
          person =>
            <li key={person.name}>{person.name}</li>
        )}
      </ul>
    </div>
  )
}

export default App