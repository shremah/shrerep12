import React, { useState } from 'react';

import './LoginPage.css';
import { useNavigate } from 'react-router-dom';






const LoginPage = () => {

  const [email, setEmail] = useState('');

  const [password, setPassword] = useState('');

  const [error, setError] = useState('');

  const navigate = useNavigate();


  const handleSubmit = (e) => {

    e.preventDefault();

    if (email === '' || password === '') {

      setError('Please enter both email and password');

    } else if (email === 'shre' && password === '123') {

      navigate('/Sidebar');

    } else {

      setError('WRONG CREDENTIALS');

    }

  };




  return (

    <div className="container">
      
      <h2 >Login</h2>

      {error && <p className="error">{error}</p>}

      <form onSubmit={handleSubmit}>

        <div className="form-control">

          <label>Username</label>

          <input type="text" placeholder="Enter username" value={email} onChange={(e) => setEmail(e.target.value)}/>

        </div>

        <div className="form-control">

          <label>Password</label>

          <input

            type="password"

            placeholder="Enter password"

            value={password} 

            onChange={(e) => setPassword(e.target.value)}

          />

        </div>

        <button type="submit"> LOGIN</button>

      </form>

    </div>

  );

};

export default LoginPage;