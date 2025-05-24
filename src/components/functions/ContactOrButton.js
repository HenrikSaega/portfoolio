import React, { useState } from 'react';
import './ContactOrButton.css';

const ContactOrButton = () => {
  const [showExtraDiv, setShowExtraDiv] = useState(false);

  const toggleDiv = () => setShowExtraDiv(prev => !prev);

  return (
    <div className="contact-or-button-container">
      <button type="button" className="or-button" onClick={toggleDiv}>
        or get in touch directly
      </button>

      {showExtraDiv && (
        <div className="extra-div">
            henrik.saega@voco.ee
        </div>
      )}
    </div>
  );
};

export default ContactOrButton;
