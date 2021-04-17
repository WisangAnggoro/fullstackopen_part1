import React, { useState } from 'react'

const GiveFeedback = ({goodButtonHandler, neutralButtonHandler, badButtonHandler}) => {
  return (
    <div>
      <h1>Give Feedback</h1>
      <button onClick={goodButtonHandler}>good</button>
      <button onClick={neutralButtonHandler}>neutral</button>
      <button onClick={badButtonHandler}>bad</button>
    </div>
  )
}

const Statistics = ({goodCount, neutralCount, badCount}) => {
  let total = goodCount+neutralCount+badCount
  if(total!==0){
    return (
      <div>
        <h1>Statistics</h1>
        <p>good {goodCount}</p>
        <p>neutral {neutralCount}</p>
        <p>bad {badCount}</p>
        <p>all {total}</p>
        <p>average {(goodCount-badCount)/total}</p>
        <p>positive {goodCount/total*100}%</p>
      </div>
    )
  }
  return (
    <div>
      <h1>Statistics</h1>
      <p>No feedback given</p>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <GiveFeedback 
        goodButtonHandler={() => setGood(good+1)}
        neutralButtonHandler={() => setNeutral(neutral+1)}
        badButtonHandler={() => setBad(bad+1)}
      />
      <Statistics 
        goodCount = {good}
        neutralCount = {neutral}
        badCount = {bad}      
      />
    </div>
  )
}

export default App