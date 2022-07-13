const Header = ({course}) => {
    return (
      <h1>{course.name}</h1>
    )
  }
  
  const Part = (props) => {
    return (
    <p>
      {props.part} {props.exercises}
    </p>
    )
  }
  const Content = (props) => {
    return (
      <>
      <Part part={props.course.parts[0].name} exercises={props.course.parts[0].exercises}/>
      <Part part={props.course.parts[1].name} exercises={props.course.parts[1].exercises}/>
      <Part part={props.course.parts[2].name} exercises={props.course.parts[2].exercises}/>
      </>
    )
  }
  
  const Total = (props) => {
    return (
      <p>Number of exercises {props.course.parts[0].exercises + props.course.parts[1].exercises + props.course.parts[2].exercises}</p>
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
