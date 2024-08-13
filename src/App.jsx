import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SurveyForm from './SurveyForm';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <div>
      <h1>Survey Form</h1>
      <SurveyForm />
    </div>
    </>
  )
}

export default App
