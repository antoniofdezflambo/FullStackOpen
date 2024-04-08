const Countries = ({ list }) => {
    let body

    switch (true) {
        case list.length > 10:
            body = <p>{`Too many matches, specify another filter`}</p>
            break;
        case list.length > 1:
            body = list.map(
                country =>
                    <li key={country.name.common}>{country.name.common}</li>
            )
            break;
        case list.length === 1:
            var country = list[0]

            body = <div>
                <h2>{country.name.common}</h2>
                <p>Capital: {country.capital}</p>
                <p>Area: {country.area}</p>

                <h3>Languages</h3>
                <ul>
                    {Object.entries(country.languages).map(lang =>
                        <li key={lang[0]}>{lang[1]}</li>
                    )}
                </ul>
                <img src={`${country.flags.svg}`} alt={`${country.flags.alt}`} width={'300px'} />
            </div>

            break;
        default:
            body = <p>{'No countries matching with filter'}</p>
            break;
    }

    return (
        <>
            {body}
        </>
    )
}

export default Countries