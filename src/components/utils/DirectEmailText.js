import React, { useState } from 'react';

const OrButton = () => {
  const [showEmail, setShowEmail] = useState(false);
  const [copied, setCopied] = useState(false);
  const email = "henrik.saega@voco.ee";

  const handleClick = () => {
    if (!showEmail) {
      setShowEmail(true);
    } else {
      navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  const style = {
    cursor: 'pointer',
    textAlign: 'center',
    marginTop: '1rem',
    color: copied ? '#9eff4f' : '#FFF',
    transition: 'color 0.3s ease',
  };

  return (
    <p className="no-select" onClick={handleClick} style={style}>
      {copied
        ? 'Copied to clipboard!'
        : showEmail
          ? email
          : 'Or get in touch directly'}
    </p>
  );
};

export default OrButton;
