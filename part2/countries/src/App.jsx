import { useEffect, useState } from "react"
import countriesService from "./services/countries"
import Countries from "./components/Countries"

function App() {
  const [filter, setFilter] = useState('')
  const [countries, setCountries] = useState([])
  const [filteredCountries, setFilteredCountries] = useState([])

  const updateFilter = (event) => {
    setFilter(event.target.value.toLowerCase())
  }

  useEffect(() => {
    countriesService.getAll().then(allCountries => {
      setCountries(allCountries)
    }).catch()
  }, [])

  useEffect( () => {
    const newCountries = countries.filter(country => country.name.common.toLowerCase().includes(filter))

    setFilteredCountries(newCountries)

  }, [filter, countries])

  return (
    <>
      <div>
        Find countries <input value={filter} onChange={updateFilter} />
        <Countries list={filteredCountries} />
      </div>
    </>
  )
}

export default App
