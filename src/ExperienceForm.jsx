import { useState } from "react";

function ExperienceForm() {
    const [companyName, setCompanyName] = useState('');
    const [jobTitle, setJobTitle] = useState('');
    const [jobResposibilities, setJobResponsibilities] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    const handleCompanyChange = (e) => {
        setCompanyName(e.target.value);
    }
    const handleJobTitleChange = (e) => {
        setJobTitle(e.target.value);
    }
    const handleJobResponsibilities = (e) => {
        setJobResponsibilities(e.target.value);
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
            <legend>Experience Information</legend>
            <label>Company Name:</label>
            <input key='company' type='text' value={companyName} required onChange={handleCompanyChange} />
            <label>Job Title:</label>
            <input key='title' type="text" value={jobTitle} required onChange={handleJobTitleChange} />
            <label>Job Responsibilities:</label>
            <input key='responsibilities' type="text" value={jobResposibilities} required onChange={handleJobResponsibilities} />
            <label>Start Date:</label>
            <input key='start' type="date" value={startDate} required onChange={handleStartDate} />
            <label>End Date:</label>
            <input key='end' type="date" value={endDate} required onChange={handleEndDate} />
            <div>
                <button>Submit</button>
            </div>
        </form>
    )
}

export { ExperienceForm };