import { useState } from "react";

function EducationForm(schoolNameState, studyFocusState, schoolStartDateState, schoolEndDateState) {
    //set const state//
    const [schoolNameValue, setSchoolNameValue] = useState('');
    const [studyFocusValue, setStudyFocusValue] = useState('');
    const [schoolStartDateValue, setSchoolStartDateValue] = useState('');
    const [schoolEndDateValue, setSchoolEndDateValue] = useState('');
    //set handleChange for each const//
    const handleSchoolChange = (e) => {
        setSchoolNameValue(e.target.value);
    }
    const handleStudyFocus = (e) => {
        setStudyFocusValue(e.target.value);
    }
    const handleStartDate = (e) => {
        setSchoolStartDateValue(e.target.value);
    }
    const handleEndDate = (e) => {
        setSchoolEndDateValue(e.target.value);
    }
    //set submit for each const and added state for export of props//
    const handleSubmit = (e) => {
        e.preventDefault();
        schoolNameState(schoolNameValue);
        studyFocusState(studyFocusValue);
        schoolStartDateState(schoolStartDateValue);
        schoolEndDateState(schoolEndDateValue);
    }

    return (
        <form onSubmit={handleSubmit}>
            <legend>Education Information</legend>
            <label>School Name:</label>
            <input key='school' type='text' value={schoolNameValue} required onChange={handleSchoolChange} />
            <label>Study Focus:</label>
            <input key='study' type="text" value={studyFocusValue} required onChange={handleStudyFocus} />
            <label>Start Date:</label>
            <input key='start' type='date' value={schoolStartDateValue} required onChange={handleStartDate} />
            <label>End Date:</label>
            <input key='end' type="date" value={schoolEndDateValue} required onChange={handleEndDate} />
            <div>
                <button>Submit</button>
            </div>
        </form>
    )
}

export default EducationForm;