// Import React and useState hook
import React, { useState } from 'react';

// Define a functional component
function CompanyServices() {
  // Define state variables for mining, health, and logistics services
  const [miningServices, setMiningServices] = useState([
    'Exploration',
    'Extraction',
    'Processing',
    'Mine Safety',
  ]);

  const [healthServices, setHealthServices] = useState([
    'Employee Health Programs',
    'Medical Facilities',
    'Emergency Response',
    'Occupational Health',
  ]);

  const [logisticsServices, setLogisticsServices] = useState([
    'Transportation',
    'Supply Chain Management',
    'Customs Clearance',
    'Border Security',
  ]);

  // Render the component
  return (
    <div>
      <h1>Company Services</h1>

      <section>
        <h2>Mining Services</h2>
        <ul>
          {miningServices.map((service, index) => (
            <li key={index}>{service}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Health Services</h2>
        <ul>
          {healthServices.map((service, index) => (
            <li key={index}>{service}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Logistics Services</h2>
        <ul>
          {logisticsServices.map((service, index) => (
            <li key={index}>{service}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}

// Export the component for use in other parts of your application
export default CompanyServices;
