import { useState } from 'react'

const Button = ({handleClick, text}) => (
  <button onClick = {handleClick}>
    {text}
  </button>
)

const Votes = ({vote}) => {
  return (
    <div>
      has {vote} votes
    </div>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [vote, setVote] = useState(Array(anecdotes.length).fill(0))

  const handleRandClick = () => {
    const randomAnecdote = Math.floor(Math.random() * anecdotes.length)
    setSelected(randomAnecdote)
  }

  const handleVoteClick = () => {
    const newVote = [...vote]
    newVote[selected] += 1
    setVote(newVote)
  }

  const mostVoted = vote.indexOf(Math.max(...vote))

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}
      <br />
      <Votes vote={vote[selected]}/>
      <Button handleClick={handleVoteClick} text='vote' />
      <Button handleClick={handleRandClick} text='next anecdote' />

      <h1>Anecdote with most votes</h1>
      {anecdotes[mostVoted]}
      <Votes vote={vote[mostVoted]} />
    </div>
  )
}

export default App