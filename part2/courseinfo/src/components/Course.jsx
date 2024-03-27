import Part from "./Part"

const Course = ({course}) => {
    return (
        <>
            <h1>{course.name}</h1>
            {
                course.parts.map(part =>
                    <Part key={part.id} name={part.name} exercises={part.exercises} />
                )
            }
        </>
    )
}

export default Course