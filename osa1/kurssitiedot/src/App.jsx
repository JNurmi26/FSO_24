
const Header = (props) => {
  console.log(props)
  return (
    <>
      <h1>{props.course.name}</h1>
    </>
  )
}

const Part = (props) => {
  return (
    <>
      <p>{props.name}</p>
      <p>{props.exercises}</p>
    </>
  )
}

const Content = (props) => {
  console.log(props)
  return (
    <>
      {props.parts.map((part, index) => (
        <Part key={index} name={part.name} exercises={part.exercises} />
      ))}
    </>
  )
}

const Total = (props) => {
  console.log(props)
  const totalExercises = props.parts.reduce((sum, part) => sum + part.exercises, 0)
  return (
    <>
      <p>Number of exercises {totalExercises}</p>
    </>
  )
}

const App = () => {

  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default App
