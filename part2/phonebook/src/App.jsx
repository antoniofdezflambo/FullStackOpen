import { useState } from 'react'
import Filter from './components/Filter'
import Form from "./components/Form";
import Numbers from './components/Numbers';

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
      <Filter handleChange={changeFilter} />
      <Form
        handleSubmit={addPerson} 
        handleChangeName={changeName} 
        handleChangeNumber={changeNumber} 
      />
      <Numbers persons={persons} filter={filter} />
    </div>
  )
}

export default App