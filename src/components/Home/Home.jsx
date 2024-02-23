import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CS
import './Home.css';

const Home = () => {
  return (
    <div className="jumbotron-fluid landing-page-container">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 left-section">
            <img
              src="https://i.ibb.co/7WM21rX/Trucks.jpg"
              alt="Welcome Image"
              className="welcome-image"
            />
          </div>
          <div className="col-lg-6 right-section">
            <header>
              <h1 className="display-4">EpheFrans Mokobane</h1>
              <br />
              <h5 className="lead">You're Goods Safety is our consent</h5>
            </header>
            <section>
              <h3>Whats new?</h3>
              <p className="lead">
                We are running a 25% promotion on all our new clients,
                that are going to be transporting their goods with us for over a 200+ KM Radius
              </p>
              <h3>Employee Of the Month</h3>
              <p className="lead">
                Our employee driver of the month goes to Maloma,
                who never got an accident and was always on time.
                Help us Congratulate him.
              </p>
              <img
                src="https://i.ibb.co/XZSSMR1/maloma-drives.jpg"
                alt="Welcome Image"
                className="welcome-image_1"
              />
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;