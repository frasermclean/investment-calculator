export default function UserInput ({ values, onChange }) {

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial investment</label>
          <input type="number" required
                 value={values.initialInvestment}
                 onChange={(event) => onChange('initialInvestment', event.target.value)}></input>
        </p>
        <p>
          <label>Annual contribution</label>
          <input type="number" required
                 value={values.annualContribution}
                 onChange={(event) => onChange('annualContribution', event.target.value)}></input>
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Interest rate</label>
          <input type="number" required
                 value={values.interestRate}
                 onChange={(event) => onChange('interestRate', event.target.value)}></input>
        </p>
        <p>
          <label>Duration in years</label>
          <input type="number" required
                 value={values.durationYears}
                 onChange={(event) => onChange('durationYears', event.target.value)}></input>
        </p>
      </div>
    </section>
  )
}