


import React, { useState } from 'react';
import "./Form.css";
const Form = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    models: '',
    state: '',
    city:'',
    dealers: '',
    comment: '',
    sal: '',
    terms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const inputValue = type === 'checkbox' ? checked : value;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: inputValue,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here
    console.log(formData);
  };

  return (
    <div className="register-form-container">
        
      <h2>Request a Test Drive </h2>
      <form onSubmit={handleSubmit}>
      <div className="rad form-group"><br/>
        <div>
          <label htmlFor="male">Salutation:</label>
          {/* <br /> */}
          <div className='radgap'>
            <div>
          <input
          className='radiobtn'
            type="radio"
            id="mr"
            name="sal"
            value="mr"
            checked={formData.sal === 'mr'}
            onChange={handleChange}
            required
          /> MR. 
           </div>
          <div>
          <input
            type="radio"
            className='radiobtn'
            id="ms"
            name="sal"
            value="ms"
            checked={formData.sal === 'ms'}
            onChange={handleChange}
            required
          />
          MS.
          </div>
          </div>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="firstName">First Name:</label>
          <br />
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        {/* <div className="form-group">
          <label htmlFor="lastName">Last Name:</label>
          <br />
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div> */}
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <br />
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
           
          <label htmlFor="phoneNumber">Phone Number:</label>
          <br />
          <div className='otp'>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
          <button style={{backgroundColor:"#002C5F", opacity:"65%",color:'white'}}>Send otp</button>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="country">Model</label>
          <br />
          <select
            id="models"
            name="models"
            value={formData.models}
            onChange={handleChange}
            required
          >
            <option value="">Select Model</option>
            <option value="usa">Sedan</option>
            <option value="uk">SUV</option>
            <option value="canada">Electric</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="country">State</label>
          <br />
          <select
            id="state"
            name="state"
            value={formData.state}
            onChange={handleChange}
            required
          >
            <option value="">Select State</option>
            <option value="usa">Maharashtra</option>
            <option value="uk">Punjab</option>
            <option value="canada">Gujrat</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="country">City</label>
          <br />
          <select
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
          >
            <option value="">Select City</option>
            <option value="usa">Ahemdabad</option>
            <option value="uk">Amritsar</option>
            <option value="canada">Mumbai</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="country">Dealer</label>
          <br />
          <select
            id="dealers"
            name="dealers"
            value={formData.dealers}
            onChange={handleChange}
            required
          >
            <option value="">Select Dealer</option>
            <option value="usa">USA</option>
            <option value="uk">UK</option>
            <option value="canada">Canada</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="comment">Comment:</label>
          <br />
          <textarea
            id="comment"
            name="comment"
            value={formData.comment}
            onChange={handleChange}
            rows={4}
            required
          />
        </div>
        
    <div className='check' >
    <input
      type="checkbox"
      className='radiobtn'
      id="terms"
      name="terms"
      checked={formData.terms}
      onChange={handleChange}
      required
    />
    <label htmlFor="terms">
      *I agree to the terms and conditions
    </label>
  </div>
<div className='subtn'><button type="submit">Submit</button> </div>
</form>
</div>
);
};

export default Form;
          



        
