import Part from "./Part"
import Total from "./Total"

const Course = ({course}) => {
    return (
        <>
            <h1>{course.name}</h1>
            {
                course.parts.map(part =>
                    <Part key={part.id} name={part.name} exercises={part.exercises} />
                )
            }
            <Total parts={course.parts} />
        </>
    )
}

export default Course