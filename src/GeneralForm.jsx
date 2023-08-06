import { useState } from "react";
//set props to move to other functions//
function GeneralForm({ fullNameValueState, emailValueState, phoneValueState }) {
    //set states for each of the inputs//
    const [fullNameValue, setFullNameValue] = useState('');
    const [emailValue, setEmailValue] = useState('');
    const [phoneValue, setPhoneValue] = useState('');
    //set onChange values//
    const handleNameChange = (e) => {
        setFullNameValue(e.target.value);
    }
    const handleEmailChange = (e) => {
        setEmailValue(e.target.value);
    }
    const handlePhoneChange = (e) => {
        setPhoneValue(e.target.value);
    }
    //set data to move on submit button//
    const handleSubmit = (e) => {
        e.preventDefault();
        fullNameValueState(fullNameValue);
        emailValueState(emailValue);
        phoneValueState(phoneValue);
    }

    return (
        //set onSubmit//
        <form onSubmit={handleSubmit}>
            <section className="form-container">
                <legend>General Information</legend>
                <label>Full Name:</label>
                <input key='name' type='text' value={fullNameValue} required onChange={handleNameChange} />
                <label>Email:</label>
                <input key='email' type='email' value={emailValue} required onChange={handleEmailChange} />
                <label>Phone:</label>
                <input key='phone' type='phone' value={phoneValue} required onChange={handlePhoneChange} />
                <div className="button-container">
                    <button>Submit</button>
                </div>
            </section>
        </form>
    )
}

export default GeneralForm;