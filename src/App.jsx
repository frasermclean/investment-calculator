import Header from './components/Header.jsx'
import Input from './components/Input.jsx'

export default function App () {
  return (
    <>
      <Header/>
      <section id="user-input">
        <div className="input-group">
          <Input label={'Initial investment'} id="initial-investment"/>
          <Input label={'Annual investment'} id="annual-investment"/>
        </div>
        <div className="input-group">
          <Input label={'Expected return'} id="expected-return"/>
          <Input label={'Duration in years'} id="duration-years" />
        </div>
      </section>
    </>
  )
}

