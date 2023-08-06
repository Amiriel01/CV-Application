function CVTemplate({ fullNameValue, emailValue, phoneValue, schoolNameValue, studyFocusValue, schoolStartDateValue, schoolEndDateValue, companyNameValue, jobTitleValue, jobResposibilitiesValue, jobStartDateValue, jobEndDateValue}) {
    return (
        <div className="cv-template">
            <div className="general-information">
                <p className="cv-name">{fullNameValue}</p>
                <section className="email-phone">
                    <p>{emailValue}</p>
                    <p>{phoneValue}</p>
                </section>
            </div>
            <div className="education-information">
                <p className="education-header">Education Inforamtion</p>
                <p>{schoolNameValue}</p>
                <p>{studyFocusValue}</p>
                <p>{schoolStartDateValue}</p>
                <p>{schoolEndDateValue}</p>
            </div>
            <div className="experience-information">
                <p className="experience-header">Experience Information</p>
                <p>{companyNameValue}</p>
                <p>{jobTitleValue}</p>
                <p>{jobResposibilitiesValue}</p>
                <p>{jobStartDateValue}</p>
                <p>{jobEndDateValue}</p>
            </div>


        </div>
    )
}

export default CVTemplate;