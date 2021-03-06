import React, { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]
  
  const [selected, setSelected] = useState(0)
  const [votesCount, setVotesCount] = useState([
    0,0,0,0,0,0
  ])

  const randomAnecdotes = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length))
  }
  const voteSomeAnecdotes = (index) => {
    let copy = [...votesCount]
    copy[index]+=1
    setVotesCount(copy)
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p> 
      <p>has {votesCount[selected]} votes</p>
      <button onClick={() => voteSomeAnecdotes(selected)}>vote</button>
      <button onClick={randomAnecdotes}>next anecdotes</button>
      <h1>Anecdote with most votes</h1>
      <p>{anecdotes[votesCount.indexOf(Math.max(...votesCount))]}</p> 
      <p>has {Math.max(...votesCount)} votes</p>
    </div>
  )
}

export default App