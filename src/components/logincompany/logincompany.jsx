import React, { useState } from 'react';
import './LoginCompany.css'; // Import the CSS file for styling
import { Link } from 'react-router-dom'; // Use Link from react-router-dom for internal routing

const LoginCompany = () => {
  const [companyEmail, setCompanyEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your form submission logic here
  };

  return (
    <div className="login-company">
      <h2>Company Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="company-email">Email</label>
          <input
            type="email"
            id="company-email"
            value={companyEmail}
            onChange={(e) => setCompanyEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <Link to="/creators" >
        <button className="btnn" type="submit">Login</button>
        
        </Link>
      </form>
     
      <div className="register-option">
        <p>Not registered yet? <Link to="/register-company">
        <span>Register here</span> 
          </Link></p>
      </div>
    </div>
  );
};

export default LoginCompany;
