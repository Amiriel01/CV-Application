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