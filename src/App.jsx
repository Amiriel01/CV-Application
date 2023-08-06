import { useState } from 'react'
import './App.css'
import GeneralForm from './GeneralForm'
import EducationForm from './EducationForm'
import { ExperienceForm } from './ExperienceForm'
import CVTemplate from './CVTemplate'

function App() {
  //import const from jsx form files and add useState start text//
  //general info const//
  const [fullNameValue, setFullNameValue] = useState('Name');
  const [emailValue, setEmailValue] = useState('Email');
  const [phoneValue, setPhoneValue] = useState('Phone');
  //education const//
  const [schoolNameValue, setSchoolNameValue] = useState('School Name');
  const [studyFocusValue, setStudyFocusValue] = useState('Study Focus');
  const [schoolStartDateValue, setSchoolStartDateValue] = useState('Start Date');
  const [schoolEndDateValue, setSchoolEndDateValue] = useState('End Date');

  return (
    <div>
      <header>
        <h1>CV Application Creator</h1>
      </header>
      <main>
        <section className="forms-container">
          <GeneralForm
            fullNameValueState={setFullNameValue}
            emailValueState={setEmailValue}
            phoneValueState={setPhoneValue}
          />
          <EducationForm 
            schoolNameState={setSchoolNameValue}
            studyFocusState={setStudyFocusValue}
            schoolStartDateState={setSchoolStartDateValue}
            schoolEndDateState={setSchoolEndDateValue}
          />
          <ExperienceForm />
        </section>
        <section>
          <CVTemplate
            fullNameValue={fullNameValue}
            emailValue={emailValue}
            phoneValue={phoneValue}
            schoolNameValue={schoolNameValue}
            studyFocusValue={studyFocusValue}
            schoolStartDateValue={schoolStartDateValue}
            schoolEndDateValue={schoolEndDateValue}
          />
        </section>
      </main>
    </div>
  )
}

export default App
