import React, { useState, useEffect } from 'react';
import './RegisterCompany.css'; // Import the CSS file for styling
import { Link } from 'react-router-dom'; // Use Link from react-router-dom for internal routing
import axios from 'axios';

const RegisterCompany = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [linkedin, setLinkedin] = useState('');
  const [twitter, setTwitter] = useState('');
  const [typeofContent, setTypeofContent] = useState('');
  const [description, setDescription] = useState('');
  // const [avatar, setAvatar] = useState(null);

  const fileInput = React.createRef();
  useEffect(() => {
    if (
      localStorage.getItem("token") != null &&
      localStorage.getItem("token") != undefined
    ) {
      window.location.href = `/creators`;
    }
  }, [localStorage.getItem("token")]);

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('linkedin', linkedin);
    formData.append('twitter', twitter);
    formData.append('password', password);
    formData.append('TypeofContent', typeofContent);
    formData.append('description', description);
    formData.append('avatar', fileInput.current.files[0]); // Assuming fileInput is a ref to the file input element

    // console.log([...formData.entries()]);

    try {
        const response = await axios.post('http://localhost:2000/api/v1/company/register', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });

        if (response.status !== 200) { // Check if response status is not OK
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = response.data;
        localStorage.setItem('token', data.token);
        console.log(data);
        window.location.href = `/creators`;

    } catch (err) {
        console.log('Error:', err);
    }
};
const submitBtn = async (e) => {
  e.preventDefault();
  await handleSubmit();
};

  return (
    <div className="register-company">
      <h2>Company Registration</h2>
      <form onSubmit={submitBtn} encType='multipart/form-data'>
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
            ref={fileInput}
          />
        </div>
        {/* <Link to="/creators" > */}
        <button className="btnn" type="submit">Register</button>        
        {/* </Link> */}
       
      </form>
    </div>
  );
};

export default RegisterCompany;
