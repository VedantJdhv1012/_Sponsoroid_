import React, { useState, useEffect } from 'react';
import './RegisterCreator.css'; // Import the CSS file for styling
import axios from "axios";

const RegisterCreator = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [instaLink, setInstaLink] = useState('');
  const [youtubeLink, setYoutubeLink] = useState('');
  const [password, setPassword] = useState('');
  const [typeofContent, setTypeofContent] = useState('');
  const [description, setDescription] = useState('');
  const fileInput = React.createRef();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Redirect to company page if already logged in
  useEffect(() => {
    if (localStorage.getItem("token")) {
      window.location.href = `/company`;
    }
  }, []);

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('instaLink', instaLink);
    formData.append('youtubeLink', youtubeLink);
    formData.append('password', password);
    formData.append('TypeofContent', typeofContent);
    formData.append('description', description);
    formData.append('avatar', fileInput.current.files[0]); 

    try {
        const response = await axios.post('https://sponsoroid-backend.onrender.com/api/v1/creator/register', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });

        if (response.status !== 200) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = response.data;
        localStorage.setItem('token', data.token);
        console.log(data);
        window.location.href = `/company`;

    } catch (err) {
        console.log('Error:', err);
    }
};

const submitBtn = async (e) => {
  e.preventDefault();
  await handleSubmit();
};

  return (
    <div className="register-creator">
      <h2>Creator Registration</h2>
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
          <label htmlFor="instaLink">Instagram Profile Link</label>
          <input
            type="url"
            id="instaLink"
            value={instaLink}
            onChange={(e) => setInstaLink(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="youtubeLink">YouTube Profile Link</label>
          <input
            type="url"
            id="youtubeLink"
            value={youtubeLink}
            onChange={(e) => setYoutubeLink(e.target.value)}
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
        <button className="btnn" type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterCreator;
