import React from 'react';
import './Home.css'; // Import your styling for the landing page


const Home = () => {
  return (
    <div className="landing-page-container">
      <div className="left-section">
        <img
         src="EpheFrans\src\assets\trucks 3.png"
          alt="Welcome Image"
          className="welcome-image"
        />
      </div>
      <div className="right-section">
        <header>
          <h1>Welcome to EpheFrans Mokobane Trucking</h1>
          <br /> 
          <h5> You're Goods Safety is our consent</h5>
        </header>
        <section>
        <h3>Whats new?</h3>
          <p>
            We are running a 25% promotions on all our new clients,
            that are going to be transporting their goods with -
            us for over a 200+ KM Radius 
          </p>
          <h3>Employee Of the Month</h3>
          <p>
            Our employee driver of the month goes to Maloma,
            who never got an accident and was always on time -
            Help us Congratulate him.
          </p>
          <img
          src="EpheFrans\src\assets\maloma drives.jpg"
          alt="Welcome Image"
          className="welcome-image"
        />
        </section>
      </div>
    </div>
  );
}

export default Home;
