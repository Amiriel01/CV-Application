// import { EmailIcon, PhoneIcon} from '@mui/icons-material'


function CVTemplate({ fullNameValue, emailValue, phoneValue, schoolNameValue, studyFocusValue, schoolStartDateValue, schoolEndDateValue, companyNameValue, jobTitleValue, jobResposibilitiesValue, jobStartDateValue, jobEndDateValue }) {
    return (
        <div className="cv-template">
            <div className="general-information">
                <p className="cv-name">{fullNameValue}</p>
                <section className="cv-email-phone">
                    <p className="cv-email">{emailValue}</p>
                    <div class="diamond">&#x25C6;</div>
                    <p className="cv-phone">{phoneValue}</p>
                </section>
            </div>
            <div className="education-information-container">
                <p className="education-header">Education Inforamtion</p>
                <p className="education-info">{schoolNameValue}</p>
                <p className="education-info">{studyFocusValue}</p>
                <p className="education-info">{schoolStartDateValue} to {schoolEndDateValue}</p>
                
            </div>
            <div className="experience-information-container">
                <p className="experience-header">Experience Information</p>
                <p className="education-info">{companyNameValue}</p>
                <p className="education-info">{jobTitleValue}</p>
                <p className="education-info">{jobResposibilitiesValue}</p>
                <p className="education-info">{jobStartDateValue} to {jobEndDateValue}</p>
                
            </div>


        </div>
    )
}

export default CVTemplate;