import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Use Link from react-router-dom for internal routing
import {jwtDecode} from 'jwt-decode'; // Import jwt-decode for decoding the token
import './going.css'; // Import the CSS file for styling
import Heading from "../../common/Heading";

const Going = () => {
  const [userType, setUserType] = useState(null);
  const [redirectPath, setRedirectPath] = useState('/');

  useEffect(() => {
    window.scrollTo(0, 0);

    // Retrieve token from local storage
    const token = localStorage.getItem('token');

    if (token) {
      try {
        // Decode token to get user information
        const decoded = jwtDecode(token);
        const type = decoded.userType; // Get userType from decoded token
        setUserType(type);

        // Determine redirect path based on userType
        if (type === 'creator') {
          setRedirectPath('/company');
        } else if (type === 'company') {
          setRedirectPath('/creators');
        }
      } catch (error) {
        console.error("Failed to decode token", error);
      }
    }
  }, []);

  return (
    <div className="join">
      {userType === 'creator' && (
        <Heading
          title='Unlock Creative Partnerships'
          subtitle='Connect with companies eager for your talent and ideas.'
        />
      )}
      {userType === 'company' && (
        <Heading
          title='Find Top Creative Talent'
          subtitle='Discover creators ready to elevate your brand.'
        />
      )}
      <div className="container1">
        <div className="redirect">
          <Link to={redirectPath}>
            <img src="/h4.png" alt="Redirect" className="image" />
          </Link>
          <h1 className="title">
            {userType === 'creator' ? "Connect with Companies" : "Explore Creative Talent"}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Going;
