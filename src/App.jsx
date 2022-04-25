import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import EmailForm from './components/EmailForm'

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <EmailForm/>
      </header>
    </div>
  )
}

export default App
