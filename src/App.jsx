import { useState } from 'react'
import Header from './components/Header.jsx'
import UserInput from './components/UserInput.jsx'
import Result from './components/Result.jsx'
import { calculateInvestmentResults } from './util/investment.js'

export default function App () {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualContribution: 1000,
    interestRate: 5.5,
    durationYears: 10
  })

  const results = calculateInvestmentResults(userInput)
  console.log(results)

  function handleInputChange (key, value) {
    setUserInput((previousValues) => ({
      ...previousValues,
      [key]: parseFloat(value)
    }))
  }

  return (
    <>
      <Header/>
      <UserInput values={userInput} onChange={handleInputChange}/>
      <Result/>
    </>
  )
}

