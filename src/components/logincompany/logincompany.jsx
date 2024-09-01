import React, { useState, useEffect } from 'react';
import './LoginCompany.css'; // Import the CSS file for styling
import axios from 'axios';
import { Link } from 'react-router-dom'; // Use Link from react-router-dom for internal routing

const LoginCompany = () => {
  const [companyEmail, setCompanyEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token!==null && token!==undefined) {
      window.location.href = `/creators`;
    }
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('https://sponsoroid-backend.onrender.com/api/v1/company/login', {
        email: companyEmail,
        password: password,
      });

      if (response.status !== 200) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = response.data;
      console.log(response);
      localStorage.setItem('token', data.Token);
      window.location.href = `/creators`;

    } catch (err) {
      console.error('Error:', err);
      setError('Invalid email or password');
    }
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
        {error && <p className="error-message">{error}</p>}
        <button className="btnn" type="submit">Login</button>
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
