import React, { useState } from 'react'

const Buttons = ({goodButtonHandler, neutralButtonHandler, badButtonHandler}) => {
  return (
    <div>
      <button onClick={goodButtonHandler}>good</button>
      <button onClick={neutralButtonHandler}>neutral</button>
      <button onClick={badButtonHandler}>bad</button>
    </div>
  )
}

const Statistic = ({text, value}) => {
  if(text!=="positive")
  {
    return (
      <p>{text} {value}</p>
    )
  }
  return (
    <p>{text} {value} %</p>
  )
}


const Statistics = ({goodCount, neutralCount, badCount}) => {
  let total = goodCount+neutralCount+badCount
  if(total!==0){
    return (
      <div>
        <Statistic text="good" value={goodCount}></Statistic>
        <Statistic text="neutral" value={neutralCount}></Statistic>
        <Statistic text="bad" value={badCount}></Statistic>
        <Statistic text="all" value={total}></Statistic>
        <Statistic text="average" value={(goodCount-badCount)/total}></Statistic>
        <Statistic text="positive" value={goodCount/total*100}></Statistic>
      </div>
    )
  }
  return <p>No feedback given</p>
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Give Feedback</h1>
      <Buttons 
        goodButtonHandler={() => setGood(good+1)}
        neutralButtonHandler={() => setNeutral(neutral+1)}
        badButtonHandler={() => setBad(bad+1)}
      />
      <h1>Statistics</h1>
      <Statistics 
        goodCount = {good}
        neutralCount = {neutral}
        badCount = {bad}      
      />
    </div>
  )
}

export default App