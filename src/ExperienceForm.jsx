import { useState } from "react";

function ExperienceForm({ companyNameValueState, jobTitleValueState, jobResposibilitiesValueState, jobStartDateValueState, jobEndDateValueState }) {
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
            <section className="form-container">
                <legend>Experience Information</legend>
                <label>Company Name:</label>
                <textarea type='text' value={companyNameValue} required onChange={handleCompanyChange} />
                <label>Job Title:</label>
                <textarea type="text" value={jobTitleValue} required onChange={handleJobTitleChange} />
                <label>Job Responsibilities:</label>
                <textarea type="text" value={jobResposibilitiesValue} required onChange={handleJobResponsibilities} />
                <label>Start Date:</label>
                <input type="date" value={jobStartDateValue} required onChange={handleStartDate} />
                <label>End Date:</label>
                <input type="date" value={jobEndDateValue} required onChange={handleEndDate} />
                <div className="button-container">
                    <button>Submit</button>
                </div>
            </section>
        </form>
    )
}

export default ExperienceForm;