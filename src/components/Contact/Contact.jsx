import React, { useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Contact.css';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import ReCAPTCHA from 'react-google-recaptcha';

const Contact = () => {
  const recaptchaRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Additional validation logic can be added here
    const emailInput = e.target.elements.email;
    if (!emailInput.checkValidity()) {
      // Display a custom error message for invalid email
      alert('Please enter a valid email address.');
    } else {
      // Perform your form submission logic here

      // Check reCAPTCHA
      const recaptchaValue = recaptchaRef.current.getValue();
      if (!recaptchaValue) {
        alert('Please verify that you are not a robot.');
        return;
      }

      // Form submission logic...
    }
  };

  const googleMapsApiKey = 'https://www.google.com/maps?q=your-location';

  const mapContainerStyle = {
    height: '400px',
    width: '100%'
  };

  const center = {
    lat: 37.7749, // Replace with your latitude
    lng: -122.4194 // Replace with your longitude
  };

  return (
    <div className="contact-container">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="card contact-card">
              <div className="card-body">
                <h2 className="card-title section-title">Contact Us</h2>
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      required
                      pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                    />
                    <small className="form-text text-muted">
                      Please enter a valid email address.
                    </small>
                  </div>
                  <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <input
                      type="text"
                      className="form-control"
                      id="subject"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                      className="form-control"
                      id="message"
                      rows="5"
                      required
                    ></textarea>
                  </div>
                  < br />
                  <ReCAPTCHA
                    ref={recaptchaRef}
                    sitekey="6Leq8oopAAAAAFLXP9X-SFVaYhFyY6S_1Wd9oEzk"
                  />
                  < br />
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="card contact-card">
              <div className="card-body">
                <h2 className="card-title section-title">Location</h2>
                <LoadScript googleMapsApiKey={googleMapsApiKey}>
                  <GoogleMap
                    mapContainerStyle={mapContainerStyle}
                    center={center}
                    zoom={15}
                  >
                    <Marker position={center} />
                  </GoogleMap>
                </LoadScript>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;