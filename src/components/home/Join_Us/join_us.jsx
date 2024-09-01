import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'; // Use Link from react-router-dom for internal routing
import './JoinOptions.css'; // Import the CSS file for styling
import Heading from "../../common/Heading";

const JoinOptions = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="join">
      <Heading title='JOIN AS' subtitle='Join our community to collaborate and grow' />
      <div className="container1">
        <div className="creator">
          <Link to="/login-creator">
            <img src="/h4.png" alt="Content Creator" className="image" />
          </Link>
          <h1 className="title">Join as a Creator</h1>
        </div>
        <div className="company">
          <Link to="/login-company">
            <img src="favicon.png" alt="Company" className="image" />
          </Link>
          <h1 className="title">Partner as a Sponsor</h1>
        </div>
      </div>
    </div>
  );
};

export default JoinOptions;
