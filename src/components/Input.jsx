import { useState } from 'react'

export default function Input ({ label, type = 'number', ...props }) {
  const [value, setValue] = useState(type === 'number' ? 0 : '')

  function handleChange (event) {
    setValue(event.target.value)
  }

  return (
    <div>
      <label htmlFor={props.id}>{label}</label>
      <input type={type} value={value} onChange={handleChange} {...props}></input>
    </div>
  )
}