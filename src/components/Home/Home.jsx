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
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            eget quam vel libero ullamcorper eleifend. Integer efficitur
            libero sit amet ligula congue ultrices. Nunc aliquam, justo eu
            varius iaculis, arcu justo congue libero.
          </p>
          <p>
            Etiam vel metus ut eros ultrices suscipit nec sit amet nulla.
            Vestibulum posuere dapibus nisi, ac cursus dolor tincidunt a.
            Vestibulum a bibendum urna. Curabitur id ipsum non libero
            convallis tristique non ut quam. Proin et libero id metus
            feugiat consequat eget ac elit.
          </p>
        </section>
      </div>
    </div>
  );
}

export default Home;
