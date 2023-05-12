import React, { useState } from 'react';

import './FeedbackForm.css';


function FeedbackForm() {

    const [name, setName] = useState('');

    const [email, setEmail] = useState('');

    const [message, setMessage] = useState('');




    const handleSubmit = (event) => {

        event.preventDefault();

        // Here you can send the feedback data to your backend

    };




    return (

        <div className="form-container">

            <form onSubmit={handleSubmit}>

                <center><h1>GIVE US FEEDBACK</h1></center>

                <label>

                    Name:

                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />

                </label>

                <label>

                    Email:

                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

                </label>

                <label>

                    Message:

                    <textarea value={message} onChange={(e) => setMessage(e.target.value)} />

                </label>

                <button className="btn btn-primary" onClick={() => alert('FEEDBACK SENT')}>SEND</button>
         

            </form>

        </div>

    );

}




export default FeedbackForm;