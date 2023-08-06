import { useState } from "react";

function EducationForm({ schoolNameState, studyFocusState, schoolStartDateState, schoolEndDateState }) {
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
            <section className="form-container">
                <legend>Education Information</legend>
                <label>School Name:</label>
                <textarea type='text' value={schoolNameValue} required onChange={handleSchoolChange} />
                <label>Study Focus:</label>
                <textarea type="text" value={studyFocusValue} required onChange={handleStudyFocus} />
                <label>Start Date:</label>
                <input  type='date' value={schoolStartDateValue} required onChange={handleStartDate} />
                <label>End Date:</label>
                <input type="date" value={schoolEndDateValue} required onChange={handleEndDate} />
                <div className="button-container">
                    <button>Submit</button>
                </div>
            </section>
        </form>
    )
}

export default EducationForm;