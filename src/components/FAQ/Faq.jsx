// FAQComponent.jsx

import React, { useState } from 'react';
import './FAQ.css'; 

const FAQComponent = () => {
  const faqs = [
    { question: 'What services do you offer?', answer: 'We offer mining, health, and border-to-border logistics services.' },
    { question: 'How can I contact customer support?', answer: 'You can contact our support team at support@example.com or call us at (123) 456-7890.' },
    { question: 'What services do you offer?', answer: 'We provide transportation services in the mining, health, and border-to-border logistics industries.' },
    { question: 'Is EpheFrans trustworthy?', answer: 'Yes, We have over 200 clients from all over the continent and we have always delieved and are voted number one in africa.' },
    { question: 'Do you deliver border to border?', answer: 'Yes, we deliver everywhere in the continent.' },
    { question: 'Do you have discounts?', answer: 'We sometimes run promotions and lucky draws, winners get free deliver within 250km radius.' },
    // Add more FAQ entries as needed
  ];
    // Add more FAQs as needed
  

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div>
      <h2>Frequently asked Questions</h2>
      {faqs.map((faq, index) => (
        <div key={index} className={`faq-card ${index === activeIndex ? 'active' : ''}`} onClick={() => toggleAccordion(index)}>
          <div className="card-header">
            <h3>{faq.question}</h3>
          </div>
          {index === activeIndex && (
            <div className="card-body">
              <p>{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQComponent;
