import { useState } from "react";

function EducationForm() {
    const [schoolName, setSchoolName] = useState('');
    const [studyFocus, setStudyFocus] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    const handleSchoolChange = (e) => {
        setSchoolName(e.target.value);
    }
    const handleStudyFocus = (e) => {
        setStudyFocus(e.target.value);
    }
    const handleStartDate = (e) => {
        setStartDate(e.target.value);
    }
    const handleEndDate = (e) => {
        setEndDate(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
            <legend>Education Information</legend>
            <label>School Name:</label>
            <input key='school' type='text' value={schoolName} required onChange={handleSchoolChange} />
            <label>Study Focus:</label>
            <input key='study' type="text" value={studyFocus} required onChange={handleStudyFocus} />
            <label>Start Date:</label>
            <input key='start' type='date' value={startDate} required onChange={handleStartDate} />
            <label>End Date:</label>
            <input key='end' type="date" value={endDate} required onChange={handleEndDate} />
            <div>
                <button>Submit</button>
            </div>
        </form>
    )
}

export { EducationForm };