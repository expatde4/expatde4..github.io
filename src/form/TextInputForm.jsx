import React, { useState } from 'react';
import './TextInputForm.css';

function TextInputForm() {
 const [name, setName] = useState('');
 const [mobileNumber, setMobileNumber] = useState('');
 const [email, setEmail] = useState('');
 const [checkboxes, setCheckboxes] = useState({
    visa: false,
    healthInsurance: false,
    tickets: false,
    apartment: false,
    cityRegistration: false,
    blockedAccount: false,
    bankAccountOpening: false,
    residencePermitAppointment: false,
 });

 const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setCheckboxes({ ...checkboxes, [name]: checked });
    } else {
      switch (name) {
        case 'name':
          setName(value);
          break;
        case 'mobileNumber':
          setMobileNumber(value);
          break;
        case 'email':
          setEmail(value);
          break;
        default:
          break;
      }
    }
 };

 const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, mobileNumber, email, checkboxes });
    // Here you can handle the form submission, e.g., send the data to a server
 };

 return (
    <form className="form-container" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={name} onChange={handleInputChange} className="input-field" />
      </label>
      <br />
      <label>
        Mobile Number:
        <input type="tel" name="mobileNumber" value={mobileNumber} onChange={handleInputChange} className="input-field" />
      </label>
      <br />
      <label>
        Email ID:
        <input type="email" name="email" value={email} onChange={handleInputChange} className="input-field" />
      </label>
      <br />
      <label>
        Visa:
        <input type="checkbox" name="visa" checked={checkboxes.visa} onChange={handleInputChange} />
      </label>
      <br />
      <label>
        Health Insurance:
        <input type="checkbox" name="healthInsurance" checked={checkboxes.healthInsurance} onChange={handleInputChange} />
      </label>
      <br />
      <label>
        Tickets:
        <input type="checkbox" name="tickets" checked={checkboxes.tickets} onChange={handleInputChange} />
      </label>
      <br />
      <label>
        Apartment:
        <input type="checkbox" name="apartment" checked={checkboxes.apartment} onChange={handleInputChange} />
      </label>
      <br />
      <label>
        City Registration:
        <input type="checkbox" name="cityRegistration" checked={checkboxes.cityRegistration} onChange={handleInputChange} />
      </label>
      <br />
      <label>
        Blocked Account:
        <input type="checkbox" name="blockedAccount" checked={checkboxes.blockedAccount} onChange={handleInputChange} />
      </label>
      <br />
      <label>
        Bank Account Opening:
        <input type="checkbox" name="bankAccountOpening" checked={checkboxes.bankAccountOpening} onChange={handleInputChange} />
      </label>
      <br />
      <label>
        Residence Permit Appointment:
        <input type="checkbox" name="residencePermitAppointment" checked={checkboxes.residencePermitAppointment} onChange={handleInputChange} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
 );
}

export default TextInputForm;
