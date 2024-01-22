// AdminCreation.js
import React, { useState } from 'react';

const AdminCreation = (props) => {
  // Destructuring host from props
  const { host } = props;

  // Initial state for form input values, success and error messages
  const initialCredentials = {
    name: '',
    email: '',
    password: '',
    cpassword: '',
    currentLanguage: 'english', // Default language
  };

  const [credentials, setCredentials] = useState(initialCredentials);
  const [successMessage, setSuccessMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  // Event handler for input changes
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  // Function to display success or error messages and clear them after 4 seconds
  const showAlert = (message, type) => {
    if (type === 'success') {
      setSuccessMessage(message);
      setErrorMessage(null);
    } else if (type === 'error') {
      setErrorMessage(message);
      setSuccessMessage(null);
    }

    // Clear messages after 4 seconds
    setTimeout(() => {
      setSuccessMessage(null);
      setErrorMessage(null);
    }, 4000);
  };

  // Event handler for form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password, currentLanguage } = credentials;
    try {
      // Make a POST request to create a new admin
      const response = await fetch(`${host}/api/auth/createadmin`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': localStorage.getItem('token2'),
        },
        body: JSON.stringify({ name, email, password, currentLanguage }),
      });

      const json = await response.json();
      console.log(json);

      if (json) {
        // Show success message, clear input fields after successful submission
        showAlert('Admin created successfully', 'success');
        setCredentials(initialCredentials);
      } else {
        // Show error message
        showAlert('Problem in admin creation', 'error');
      }
    } catch (error) {
      console.error(error);
    }
  };

  // Render the component
  return (
    <div className="admin_creation_form  min_height">
      {successMessage && (
        <div
          className="success-message"
          style={{
            backgroundColor: 'lightgreen',
            padding: '20px 10px',
            borderRadius: '20px',
          }}
        >
          {successMessage}
        </div>
      )}
      {errorMessage && (
        <div
          className="error-message"
          style={{
            backgroundColor: 'lightcoral',
            padding: '20px 10px',
            borderRadius: '20px',
          }}
        >
          {errorMessage}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={credentials.name}
            placeholder="Enter Name"
            required
            minLength={2}
            onChange={onChange}
          />
        </div>

        <div className="form-group my-3">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            required
            value={credentials.email}
            placeholder="Enter email"
            onChange={onChange}
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>

        <div className="form-group my-3">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            placeholder="Password"
            required
            minLength={6}
            value={credentials.password}
            onChange={onChange}
          />
        </div>

        <div className="form-group my-3">
          <label htmlFor="cpassword">Confirm Password</label>
          <input
            type="password"
            className="form-control"
            id="cpassword"
            name="cpassword"
            placeholder="Confirm Password"
            required
            minLength={6}
            value={credentials.cpassword}
            onChange={onChange}
          />
        </div>

        <div className="form-group my-3">
          <label htmlFor="currentLanguage">Select Language</label>
          <select
            className="form-control"
            id="currentLanguage"
            name="currentLanguage"
            value={credentials.currentLanguage}
            onChange={onChange}
          >
            <option value="english">English</option>
            <option value="hindi">Hindi</option>
          </select>
        </div>

        <button
          disabled={credentials.cpassword !== credentials.password}
          type="submit"
          className="btn btn-primary"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AdminCreation;
