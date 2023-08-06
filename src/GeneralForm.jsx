import { useState } from "react";

function GeneralForm() {
    const [fullNameValue, setFullNameValue] = useState('');
    const [emailValue, setEmailValue] = useState('');
    const [phoneValue, setPhoneValue] = useState('');

    const handleNameChange = (e) => {
        setFullNameValue(e.target.value);
    }
    const handleEmailChange = (e) => {
        setEmailValue(e.target.value);
    }
    const handlePhoneChange = (e) => {
        setPhoneValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

    }

    return (
        <form onSubmit={handleSubmit}>
            <legend>General Information</legend>
            <label>Full Name:</label>
            <input key='name' type='text' value={fullNameValue} required onChange={handleNameChange} />
            <label>Email:</label>
            <input key='email' type='email' value={emailValue} required onChange={handleEmailChange} />
            <label>Phone:</label>
            <input key='phone' type='phone' value={phoneValue} required onChange={handlePhoneChange} />
            <div>
                <button>Submit</button>
            </div>
        </form>
    )
}

export { GeneralForm };