import React, { useState } from 'react';

import './NatureContact.css';




function NatureContact() {

    const [name, setName] = useState('');

    const [email, setEmail] = useState('');

    const [message, setMessage] = useState('');




    const handleSubmit = (event) => {

        event.preventDefault();

        // Here you can send the feedback data to your backend  

    };




    return (

        <div className="container">

            <h1>Contact Us About Nature</h1>

            <p>Fill out the form below to contact us about anything related to nature. We'd love to hear from you!</p>

            <form onSubmit={handleSubmit}>

                <div className="form-group">

                    <label htmlFor="name">Name:</label>

                    <input type="text" className="form-control" id="name" value={name} onChange={(e) => setName(e.target.value)} />

                </div>

                <div className="form-group">

                    <label htmlFor="email">Email:</label>

                    <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />

                </div>

                <div className="form-group">

                    <label htmlFor="message">Message:</label>

                    <textarea className="form-control" id="message" rows="5" value={message} onChange={(e) => setMessage(e.target.value)} />

                </div>

                <button type="submit" onClick={() => alert('THANKYOU')} className="btn btn-primary">Submit</button>

            </form>

        </div>

    );

}




export default NatureContact;