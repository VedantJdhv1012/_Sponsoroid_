import React, { useState, useEffect } from 'react';
import './LoginCreator.css'; 
import { Link } from 'react-router-dom'; 

const LoginCreator = () => {
  const [creatorEmail, setCreatorEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token !== null && token !== undefined) {
      window.location.href = `/company`;
    }
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('https://sponsoroid-backend.onrender.com/api/v1/creator/login', {
        email: creatorEmail,
        password: password,
      });

      if (response.status !== 200) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = response.data;
      console.log(response);
      localStorage.setItem('token', data.Token);
      window.location.href = `/company`;

    } catch (err) {
      console.error('Error:', err);
      setError('Invalid email or password');
    }
  };

  return (
    <div className="login-creator">
      <h2>Creator Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="creator-email">Email</label>
          <input
            type="email"
            id="creator-email"
            value={creatorEmail}
            onChange={(e) => setCreatorEmail(e.target.value)}
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
        <p>Not registered yet? <Link to="/register-creator">
            <span>Register here</span> 
          </Link></p>
      </div>
    </div>
  );
};

export default LoginCreator;
