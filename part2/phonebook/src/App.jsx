import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import Form from "./components/Form";
import Numbers from './components/Numbers';
import personsService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  useEffect(() => {
    personsService.
    getAll().
    then(initialPersons => setPersons(initialPersons))
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
        personsService.
        create(newPerson).
        then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          setNewName('')
          setNewNumber('')
        })
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

  const deleteClick = (id) => {
    const person = persons.find(person => person.id === id)

    if(window.confirm(`Eliminar ${person.name}?`)){
      personsService.
      remove(id).
      then(removedPerson => {
        const newPersons = persons.filter(person => person.id !== removedPerson.id)
        setPersons(newPersons)
      })
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handleChange={changeFilter} />
      <Form
        name={newName}
        number={newNumber}
        handleSubmit={addPerson} 
        handleChangeName={changeName} 
        handleChangeNumber={changeNumber} 
      />
      <Numbers persons={persons} filter={filter} handleClick={deleteClick} />
    </div>
  )
}

export default App