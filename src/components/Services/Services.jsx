import React from 'react';

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
      </div>
    </div>
  );
};

export default CompanyServicesCard;
