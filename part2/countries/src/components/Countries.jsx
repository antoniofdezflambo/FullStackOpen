import { useEffect, useState } from "react"
import Country from "./Country"

const Countries = ({ countries, filter }) => {
    const [selectedCountry, setSelectedCountry] = useState(null)

    const selectCountry = (country) => {
        setSelectedCountry(country)
    }

    const goBack = () => {
        setSelectedCountry(null)
    }

    useEffect(() => {
        goBack()
    }, [filter])

    if (countries.length > 10) return <p>Too many matches, specify another filter</p>
    else if (countries.length > 1) {
        if (!selectedCountry) {
            return (
                <ul>
                    {countries.map(
                        country =>
                            <li key={country.name.common}>
                                {country.name.common}
                                <input type='button' value='Show' onClick={() => selectCountry(country)} />
                            </li>
                    )}
                </ul>
            )
        } else {
            return (
                <>
                    <input type="button" value='Back' onClick={goBack} />
                    <Country country={selectedCountry} />
                </>
            )
        }
    }
    else if (countries.length === 1) {
        const country = countries[0]
        return (
            <Country country={country} />
        )
    }
    else {
        return (
            <p>{'No countries matching with filter'}</p>
        )
    }
}

export default Countries