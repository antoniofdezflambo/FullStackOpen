const Total = ({parts}) => {
    const totalExercises = parts.map(part => part.exercises).reduce((previous, next) => previous + next)

    return(
        <strong>Total of {totalExercises} exercises</strong>
    )
}

export default Total