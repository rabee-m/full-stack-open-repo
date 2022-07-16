const Header = ({course}) => {
    return (
      <h1>{course.name}</h1>
    )
  }
  
  const Part = ({part}) => {
    const name = part.name
    const exercises = part.exercises
    return (
    <p>
      {name} {exercises}
    </p>
    )
  }
  const Content = ({course}) => {
    const parts = course.parts;
    const listParts = parts.map((currPart) => <Part key={currPart.id} part={currPart}/> )
    return (
      <>
      {listParts}
      </>
    )
  }
  
  const Total = ({course}) => {
    const total = course.parts.reduce((acc, curr_part) => {
      return acc + curr_part.exercises;
    }, 0);
    return (
      <p><b>Number of exercises {total}</b></p>
    )
  }

  const Course = ({ course }) => {
    return (
    <div>
    <Header course={course} />
    <Content course={course}/>
    <Total course={course}/>
  </div>
    )
  }
  
  export default Course
