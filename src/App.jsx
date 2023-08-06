import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { GeneralForm } from './GeneralForm.jsx'
import { EducationForm } from './EducationForm.jsx'

function App() {
  
  return (
    <div>
   <GeneralForm />
   <EducationForm />
   </div>
  )
}

export default App
