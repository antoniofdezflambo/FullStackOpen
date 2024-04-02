import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import Form from "./components/Form";
import Numbers from './components/Numbers';
import axios from 'axios'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  useEffect(() => {
    axios.
      get('http://localhost:3001/persons').
      then(response => setPersons(response.data))
  }, [])

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