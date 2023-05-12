import React from 'react';

import './AboutUs.css';

import m1 from '../m1.png';

import m2 from '../m2.png';






const AboutUs = () => {

    return (

        <div className="about-us-container">

            <h1>About Us</h1>

          <p> We inspire and aspire ourseleves and people to conserve and invest in activities that are better for earth.

           Lets connect and make the earth a better living space for us and others..</p>

            <h2>Team</h2>

        

            <div className="team-member">

                <img src={m1} alt="Team Member 2" />

                <div>

                    <h3>MEMBER 1</h3>

                    <p>Communications Manager</p>

                </div>

            </div>

            <div className="team-member">



                <img src={m2} alt="Team Member 3" />

                <div>

                    <h3>MEMBER 2</h3>

                    <p>Program Coordinator</p>

                </div>

            </div>

        </div>




    );

};




export default AboutUs;