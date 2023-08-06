import { useState } from "react";

function ExperienceForm({companyNameValueState, jobTitleValueState, jobResposibilitiesValueState, jobStartDateValueState, jobEndDateValueState}) {
    const [companyNameValue, setCompanyNameValue] = useState('');
    const [jobTitleValue, setJobTitleValue] = useState('');
    const [jobResposibilitiesValue, setJobResponsibilitiesValue] = useState('');
    const [jobStartDateValue, setJobStartDateValue] = useState('');
    const [jobEndDateValue, setJobEndDateValue] = useState('');

    const handleCompanyChange = (e) => {
        setCompanyNameValue(e.target.value);
    }
    const handleJobTitleChange = (e) => {
        setJobTitleValue(e.target.value);
    }
    const handleJobResponsibilities = (e) => {
        setJobResponsibilitiesValue(e.target.value);
    }
    const handleStartDate = (e) => {
        setJobStartDateValue(e.target.value);
    }
    const handleEndDate = (e) => {
        setJobEndDateValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        companyNameValueState(companyNameValue);
        jobTitleValueState(jobTitleValue);
        jobResposibilitiesValueState(jobResposibilitiesValue);
        jobStartDateValueState(jobStartDateValue);
        jobEndDateValueState(jobEndDateValue);
    }

    return (
        <form onSubmit={handleSubmit}>
            <legend>Experience Information</legend>
            <label>Company Name:</label>
            <input key='company' type='text' value={companyNameValue} required onChange={handleCompanyChange} />
            <label>Job Title:</label>
            <input key='title' type="text" value={jobTitleValue} required onChange={handleJobTitleChange} />
            <label>Job Responsibilities:</label>
            <input key='responsibilities' type="text" value={jobResposibilitiesValue} required onChange={handleJobResponsibilities} />
            <label>Start Date:</label>
            <input key='start' type="date" value={jobStartDateValue} required onChange={handleStartDate} />
            <label>End Date:</label>
            <input key='end' type="date" value={jobEndDateValue} required onChange={handleEndDate} />
            <div>
                <button>Submit</button>
            </div>
        </form>
    )
}

export default ExperienceForm;