import React from 'react';
import './Services.css';

const CompanyServicesCard = () => {
  return (
    <div>
      <h2>Services</h2>
      <div className="card">
        <div className="card-header">
          <h3>Our Company Services</h3>
        </div>
        <div className="card-body">
          <h4>Mining Services</h4>
          <p>
            We specialize in various mining operations, leveraging state-of-the-art technology and sustainable practices to extract valuable resources efficiently.
          </p>

          <h4>Health Services</h4>
          <p>
            Our commitment extends to health services, ensuring the well-being of our workforce through comprehensive healthcare programs and facilities.
          </p>

          <h4>Border-to-Border Logistics</h4>
          <p>
            Seamlessly connecting regions, our logistics services span borders to ensure the smooth transportation of goods, meeting the diverse needs of our clients.
          </p>
        </div>
        <div>
            <h3>Industries</h3>
            <div className="row">
                <div className="col">
                <div className="card" style={{ backgroundImage: 'url(https://i.ibb.co/3FrTsbc/miining-pic.jpg)' }}>
                    <div className="card-body">
                    <h5 className="card-title">Mining</h5>
                    <br />
                    <p className="card-text">Content for the first industry goes here.</p>
                    </div>
                </div>
                </div>
                <div className="col">
                <div className="card" style={{ backgroundImage: 'url(https://i.ibb.co/LnxVhzQ/border.jpg)' }}>
                    <div className="card-body">
                    <h5 className="card-title">Border to Border</h5>
                    <br />
                    <p className="card-text">Content for the second industry goes here.</p>
                    </div>
                </div>
                </div>
                <div className="col">
                <div className="card" style={{ backgroundImage: 'url(https://i.ibb.co/kXhqxD8/health.jpg)' }}>
                    <div className="card-body">
                    <h5 className="card-title">Health</h5>
                    <br />
                    <p className="card-text">Content for the third industry goes here.</p>
                    </div>
                </div>
                </div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default CompanyServicesCard;
