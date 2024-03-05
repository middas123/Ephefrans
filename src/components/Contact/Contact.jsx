import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Contact.css';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    // Additional validation logic can be added here
    const emailInput = e.target.elements.email;
    if (!emailInput.checkValidity()) {
      // Display a custom error message for invalid email
      alert('Please enter a valid email address.');
    } else {
      // Perform your form submission logic here
    }
  };

  return (
    <div className="contact-container">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 offset-lg-3">
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
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
