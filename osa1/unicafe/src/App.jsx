import { useState } from 'react'

const Button = ({handleClick, text}) => (
  <button onClick = {handleClick}>
    {text}
  </button>
)

const StatisticLine = ({ text, value }) => (
  <p>
    {text} {value}
  </p>
)

const Statistics = (props) => {
  if (props.total === 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  }
  return (
    <div>
      <StatisticLine text = 'good' value = {props.good} />
      <StatisticLine text = 'neutral' value = {props.neutral} />
      <StatisticLine text = 'bad' value = {props.bad} />
      <StatisticLine text = 'all' value = {props.total} />
      <StatisticLine text = 'average' value = {props.average} />
      <StatisticLine text = 'positive' value = {`${props.positive} %`} />
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)

  const handleGoodClick = () => {
    console.log('good')
    const updatedGood = good + 1
    setGood(updatedGood)
    const updatedTotal = total + 1
    setTotal(updatedTotal)
    setAverage((updatedGood + neutral * 0 + bad * -1) / updatedTotal)
    setPositive(updatedGood * 100 / updatedTotal)
  }

  const handleNeutralClick = () => {
    console.log('neutral')
    const updatedNeutral = neutral + 1
    setNeutral(updatedNeutral)
    const updatedTotal = total + 1
    setTotal(updatedTotal)
    setAverage((good + updatedNeutral * 0 + bad * -1) / updatedTotal)
    setPositive(good * 100 / updatedTotal)
  }

  const handleBadClick = () => {
    console.log('bad')
    const updatedBad = bad + 1
    setBad(updatedBad)
    const updatedTotal = total + 1
    setTotal(updatedTotal)
    setAverage((good + neutral * 0 + updatedBad * -1) / updatedTotal)
    setPositive(good * 100 / updatedTotal)
  }

  return (
    <div>
      <h1>give feedback</h1>

      <Button handleClick={handleGoodClick} text={'good'} />
      <Button handleClick={handleNeutralClick} text={'neutral'} />
      <Button handleClick={handleBadClick} text={'bad'} />

      <h1>statistics</h1>

      <Statistics
        good={good} 
        neutral={neutral} 
        bad={bad} 
        total={total}
        average={average}
        positive={positive}
      />
    </div>
  )
}

export default App