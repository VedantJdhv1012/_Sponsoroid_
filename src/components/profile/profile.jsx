import React from 'react';
import './profile.css'; // Import the CSS file for styling

// Sample data import
import { team } from '../data/Data';

const ProfilePage = ({ match }) => {
  // Get the profile ID from the route parameters
  const profileId = parseInt(match.params.id, 10);
  
  // Find the profile data based on the ID
  const profileData = team.find(profile => profile.id === profileId);

  if (!profileData) {
    return <div>Profile not found</div>;
  }

  return (
    <div className="profile-container">
      <div className="profile-box">
        <div className="profile-header">
          <img src={profileData.cover} alt={profileData.name} className="profile-image" />
          <h1>{profileData.name}</h1>
          <p className="type-of-content">{profileData.typeofContent}</p>
        </div>
        <div className="profile-details">
          <div className="social-links">
            {profileData.linkedin && (
              <a href={profileData.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <i className='fa-brands fa-linkedin'></i>
              </a>
            )}
            {profileData.twitter && (
              <a href={profileData.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <i className='fa-brands fa-twitter'></i>
              </a>
            )}
            {profileData.instaLink && (
              <a href={profileData.instaLink} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <i className='fa-brands fa-instagram'></i>
              </a>
            )}
            {profileData.youtubeLink && (
              <a href={profileData.youtubeLink} target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <i className='fa-brands fa-youtube'></i>
              </a>
            )}
          </div>
          <div className="contact-info">
            <p>Email: <a href={`mailto:${profileData.email}`}>{profileData.email}</a></p>
          </div>
          <div className="description">
            <p>{profileData.description}</p>
          </div>
        </div>
        <button className="message-button">Send Message</button>
      </div>
    </div>
  );
};

export default ProfilePage;
