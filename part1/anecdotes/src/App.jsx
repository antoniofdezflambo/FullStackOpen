import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  // Selected anecdote
  const [selected, setSelected] = useState(0)

  const setRandomNumber = () => {
    let randomNumber;
    do{
      randomNumber = Math.floor(Math.random() * anecdotes.length)
    } while (selected === randomNumber)

    setSelected(randomNumber)
  }

  // Votes
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))

  const vote = () => {
    let newVotes = [...votes]
    newVotes[selected] += 1
    setVotes(newVotes)
  }


  return (
    <div>
      <p>{anecdotes[selected]}</p>
      <Votes anecdoteVotes={votes[selected]}/>
      <AnecdoteButton handleClick={setRandomNumber} />
      <VoteButton handleClick={vote} />
    </div>
  )
}

const AnecdoteButton = ({handleClick}) => {
  return(
    <button onClick={handleClick}>Next Anecdote</button>
  )
}

const Votes = ({anecdoteVotes}) => {
  return(
    <p>Has {anecdoteVotes} vote(s)</p>
  )
}

const VoteButton = ({handleClick}) => {
  return(
    <button onClick={handleClick}>Vote</button>
  )
}

export default App