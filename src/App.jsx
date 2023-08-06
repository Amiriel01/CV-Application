import { useState } from 'react'
import './App.css'
import GeneralForm from './GeneralForm'
import EducationForm from './EducationForm'
import ExperienceForm from './ExperienceForm'
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
  //experience info const//
  const [companyNameValue, setCompanyNameValue] = useState('Company Name');
  const [jobTitleValue, setJobTitleValue] = useState('Job Title');
  const [jobResposibilitiesValue, setJobResponsibilitiesValue] = useState('Job Responsibilities');
  const [jobStartDateValue, setJobStartDateValue] = useState('Start Date');
  const [jobEndDateValue, setJobEndDateValue] = useState('End Date');

  return (
    <div>
      <header>
        <h1 class="page-header">CV Application Creator</h1>
      </header>
      <main>
        <section className="whole-page">
          <section className="all-forms-container">
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
            <ExperienceForm
              companyNameValueState={setCompanyNameValue}
              jobTitleValueState={setJobTitleValue}
              jobResposibilitiesValueState={setJobResponsibilitiesValue}
              jobStartDateValueState={setJobStartDateValue}
              jobEndDateValueState={setJobEndDateValue}
            />
          </section>
          <section className="cv-page">
            <CVTemplate
              fullNameValue={fullNameValue}
              emailValue={emailValue}
              phoneValue={phoneValue}
              schoolNameValue={schoolNameValue}
              studyFocusValue={studyFocusValue}
              schoolStartDateValue={schoolStartDateValue}
              schoolEndDateValue={schoolEndDateValue}
              companyNameValue={companyNameValue}
              jobTitleValue={jobTitleValue}
              jobResposibilitiesValue={jobResposibilitiesValue}
              jobStartDateValue={jobStartDateValue}
              jobEndDateValue={jobEndDateValue}
            />
          </section>
        </section>
      </main>
    </div>
  )
}

export default App
