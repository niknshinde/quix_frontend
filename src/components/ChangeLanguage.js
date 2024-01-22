
import React, { useState,useContext } from 'react';
import backendContext from '../contex/backend/backendContext';

const ChangeLanguage = () => {
  const context = useContext(backendContext);
  const { host } = context;

  const [language, setLanguage] = useState('english');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  const handleUpdateLanguage = async () => {
    try {
      const response = await fetch(`${host}/api/user/updateLanguage`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': localStorage.getItem('token2'),
        },
        body: JSON.stringify({ language }),
      });

      if (response.ok) {
        setSuccessMessage('Language updated successfully!');
        setErrorMessage('');
        setTimeout(() => {
          setSuccessMessage('');
        }, 3000);
      } else {
        setErrorMessage('Failed to update language. Please try again later.');
        setSuccessMessage('');
        setTimeout(() => {
          setErrorMessage('');
        }, 3000);
      }
    } catch (error) {
      console.error('Error updating language:', error);
      setErrorMessage('An error occurred. Please try again later.');
      setSuccessMessage('');
      setTimeout(() => {
        setErrorMessage('');
      }, 3000);
    }
  };

  return (
    <div>
      <h3>Update Language</h3>
      {successMessage && (
        <div className="alert alert-success" style={{ backgroundColor: 'lightgreen', padding: '20px 10px', borderRadius: '20px' }}>
          {successMessage}
        </div>
      )}
      {errorMessage && (
        <div className="alert alert-danger" style={{ backgroundColor: 'lightcoral', padding: '20px 10px', borderRadius: '20px' }}>
          {errorMessage}
        </div>
      )}
      <div className="mb-3">
        <label htmlFor="languageSelect" className="form-label">Select Language:</label>
        <select
          className="form-select"
          id="languageSelect"
          value={language}
          onChange={handleLanguageChange}
        >
          <option value="english">English</option>
          <option value="hindi">Hindi</option>
          {/* Add more options as needed */}
        </select>
      </div>
      <button className="btn btn-primary" onClick={handleUpdateLanguage}>Update Language</button>
    </div>
  );
};

export default ChangeLanguage;
