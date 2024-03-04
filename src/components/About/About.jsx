import React from 'react';

const AboutPage = () => {
  return ( 
    <>
      <h2>About Us</h2>
      <br />
      <div className="card">
        <h5 className="card-header">About Our Trucking Company</h5>
        <div className="card-body">
          <h2 className="card-title">Welcome to EpheFrans Mokobane Transportation</h2>
          <p className="card-text">
            We are dedicated to providing reliable and efficient transportation services.
          </p>
          
          <h3>How EpheFrans Came to be</h3>
          <p>
            EpheFrans Mokobane Transportation was founded by Boitumelo Middas Mokobane and his family in June 2024. Boitumelo, who is also involved in the tech and mining industries, identified a gap in the transportation sector. He noticed that people were losing their lives on the roads due to unsafe and unserviced trucks. Consequently, he decided to establish his own transportation company, where he could provide services with trucks that prioritize safety for both his drivers and individuals driving their private and other public vehicles on the roads.
          </p>

          <h3>Our Mission</h3>
          <p>
            EpheFrans Mokobane Transportation is committed to delivering goods safely and on time while ensuring customer satisfaction and fostering long-term relationships. The company prioritizes high standards, reliability, efficiency, and integrity. With experienced drivers and a modern fleet, they guarantee timely deliveries, emphasizing open communication and personalized service. EpheFrans Mokobane Transportation aims to build lasting partnerships based on trust and is dedicated to providing excellence in the transportation industry. Choose them for a reliable and dependable transportation partner where safety and timely delivery are unwavering commitments.
          </p>

          <h3>Why Choose Us?</h3>
          <ul>
            <li>Experienced Drivers: Our team of skilled and experienced drivers ensures the safe and timely delivery of your goods.</li>
            <li>Modern Fleet: We maintain a modern and well-maintained fleet of trucks to meet the diverse needs of our clients.</li>
            <li>Customer Satisfaction: Your satisfaction is our priority, and we go the extra mile to exceed your expectations.</li>
          </ul>
          
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
    </>
  );
};

export default AboutPage;
