import { useState } from 'react'

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => {
    setGood(good + 1)
  }

  const handleNeutral = () => {
    setNeutral(neutral + 1)
  }

  const handleBad = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <Header />
      <ButtonGroup handleGood={handleGood} handleNeutral={handleNeutral} handleBad={handleBad} />
      <Statistics goodStats={good} neutralStats={neutral} badStats={bad} />
    </div>
  )
}

const Header = () => {
  return(
    <h1>Give feedback</h1>
  )
}

const ButtonGroup = ({handleGood, handleNeutral, handleBad}) => {
  return(
    <>
      <Button handler={handleGood} text={'good'}/>
      <Button handler={handleNeutral} text={'neutral'}/>
      <Button handler={handleBad} text={'bad'}/>
    </>
  )
}

const Button = ({handler, text}) => {
  return(
    <button onClick={handler}>{text}</button>
  )
}

const Statistics = ({goodStats, neutralStats, badStats}) => {

  const totalClicks = goodStats + neutralStats + badStats 
  const averageClicks = (goodStats - badStats) / totalClicks
  const positiveClicks = goodStats * 100 / totalClicks

  if(totalClicks > 0) {
    return(
      <>
        <h2>Statistics</h2>
        <Stat text={'good'} stats={goodStats} />
        <Stat text={'neutral'} stats={neutralStats} />
        <Stat text={'bad'} stats={badStats} />
        <Stat text={'all'} stats={totalClicks} />
        <Stat text={'average'} stats={averageClicks} />
        <Stat text={'positive'} stats={positiveClicks + '%'} />
      </>
    )
  } else {
    return(
      <>
        <h2>Statistics</h2>
        <p>No feedback given</p>
      </>
    )
  }
}

const Stat = ({text, stats}) => {
  return(
    <p>{text} {stats}</p>
  )
}

export default App