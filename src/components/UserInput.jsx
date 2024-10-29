import { useState } from 'react'

export default function UserInput () {
  const [values, setValues] = useState({
    initialInvestment: 10000,
    annualContribution: 1000,
    interestRate: 5.5,
    durationYears: 10
  })

  function handleChange (key, value) {
    setValues((previousValues) => ({
      ...previousValues,
      [key]: parseFloat(value)
    }))
  }

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial investment</label>
          <input type="number" required
                 value={values.initialInvestment}
                 onChange={(event) => handleChange('initialInvestment', event.target.value)}></input>
        </p>
        <p>
          <label>Annual contribution</label>
          <input type="number" required
                 value={values.annualContribution}
                 onChange={(event) => handleChange('annualContribution', event.target.value)}></input>
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Interest rate</label>
          <input type="number" required
                 value={values.interestRate}
                 onChange={(event) => handleChange('interestRate', event.target.value)}></input>
        </p>
        <p>
          <label>Duration in years</label>
          <input type="number" required
                 value={values.durationYears}
                 onChange={(event) => handleChange('durationYears', event.target.value)}></input>
        </p>
      </div>
    </section>
  )
}