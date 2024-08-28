import React, { useState } from 'react';
import './RegisterCompany.css'; // Import the CSS file for styling
import { Link } from 'react-router-dom'; // Use Link from react-router-dom for internal routing


const RegisterCompany = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [linkedin, setLinkedin] = useState('');
  const [twitter, setTwitter] = useState('');
  const [typeofContent, setTypeofContent] = useState('');
  const [description, setDescription] = useState('');
  const [avatar, setAvatar] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add form submission logic here
  };

  const handleFileChange = (event) => {
    setAvatar(event.target.files[0]);
  };

  return (
    <div className="register-company">
      <h2>Company Registration</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
        <div className="form-group">
          <label htmlFor="linkedin">LinkedIn Link</label>
          <input
            type="url"
            id="linkedin"
            value={linkedin}
            onChange={(e) => setLinkedin(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="twitter">Twitter Handle</label>
          <input
            type="text"
            id="twitter"
            value={twitter}
            onChange={(e) => setTwitter(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="typeofContent">Type of Content</label>
          <input
            type="text"
            id="typeofContent"
            value={typeofContent}
            onChange={(e) => setTypeofContent(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="avatar">Avatar</label>
          <input
            type="file"
            id="avatar"
            accept="image/*"
            onChange={handleFileChange}
          />
        </div>
        <Link to="/creators" >
        <button className="btnn" type="submit">Register</button>        
        </Link>
       
      </form>
    </div>
  );
};

export default RegisterCompany;
