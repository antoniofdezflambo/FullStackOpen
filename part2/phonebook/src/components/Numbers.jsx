const Numbers = ({persons, filter}) => {
    return (
        <>
            <h2>Numbers</h2>
            <ul>
                {persons.filter(
                    person =>
                        person.name.toLowerCase().includes(filter)).map(
                            filteredPerson =>
                                <li key={filteredPerson.name}>{filteredPerson.name} {filteredPerson.number}</li>
                        )}
            </ul>
        </>
    )
}

export default Numbers