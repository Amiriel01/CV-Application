function CVTemplate({ fullNameValue, emailValue, phoneValue, schoolNameValue, studyFocusValue, schoolStartDateValue, schoolEndDateValue}) {
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
                <p>{schoolNameValue}</p>
                <p>{studyFocusValue}</p>
                <p>{schoolStartDateValue}</p>
                <p>{schoolEndDateValue}</p>
            </div>


        </div>
    )
}

export default CVTemplate;