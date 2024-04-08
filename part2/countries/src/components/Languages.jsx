const Languages = ({ languages }) => {

    return (
        <ul>
            {
                Object.entries(languages).map(
                    ([code, name]) =>
                        <li key={code}>{name}</li>
                )
            }
        </ul>
    )
}

export default Languages