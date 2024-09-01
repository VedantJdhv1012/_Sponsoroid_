import React, { useEffect, useState } from "react"
import Heading from "../common/Heading"
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import { Buffer } from 'buffer';
import "./team.css"

const Team = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const location = useLocation();
  const [current, setCurrent] = useState('');
  const [notCurrent, setNotCurrent] = useState('');
  const [userId, setUserId] = useState('');
  const [creators, setCreators] = useState([]);
  const [headingTitle, setHeadingTitle] = useState('');
  const [headingSubtitle, setHeadingSubtitle] = useState('');
 
  useEffect(() => {
    if (location.pathname.includes("/creators")) {
      setCurrent("company");
      setNotCurrent("creator");     
      setHeadingTitle('Explore Top Creators');
      setHeadingSubtitle('Discover and connect with the best in your industry—sorted by expertise for seamless collaborations.');
    
    } else {
      setCurrent("creator");
      setNotCurrent("company");
      setHeadingTitle('Explore Top Companies');
      setHeadingSubtitle('Discover and connect with leading companies in your industry—perfect for collaboration and growth.');
 
    }
  }, [location.pathname]);

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      window.location.href = `/register-${current}`;
    }
  }, [current]);

  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      const base64Payload = token.split('.')[1];
      const decodedPayload = Buffer.from(base64Payload, 'base64').toString('utf-8');
      const payloadObject = JSON.parse(decodedPayload);
      setUserId(payloadObject);
      console.log(userId);
    }
  }, [token]);

  useEffect(() => {
    axios.get(`https://sponsoroid-backend.onrender.com/api/v1/${notCurrent}/getAll`)
      .then((res) => setCreators(res.data))
      .catch((err) => console.log(err));
  }, [notCurrent]);

  return (
    <>
      <section className='team background'>
        <div className='container'>
          <Heading title={headingTitle} subtitle={headingSubtitle} />
          <div className='content mtop grid3'>
            {creators.map((val, index) => (
              <div className='box' key={index}>
                <div className='details'>
                  <div className='img'>
                    <img src={"https://sponsoroid-backend.onrender.com/images/" + val.avatar} alt='' />
                    <i className='fa-solid fa-circle-check'></i>
                  </div>
                  <i className='fa fa-video'></i>
                  <label>{val.TypeofContent}</label>
                  <h4>{val.name}</h4>

                  <div className="social-links">
                    {val.linked && (
                      <a href={val.linked} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <i className='fa-brands fa-linkedin'></i>
                      </a>
                    )}
                    {val.twitter && (
                      <a href={val.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                        <i className='fa-brands fa-twitter'></i>
                      </a>
                    )}
                    {val.instaLink && (
                      <a href={val.instaLink} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                        <i className='fa-brands fa-instagram'></i>
                      </a>
                    )}
                    {val.youtubeLink && (
                      <a href={val.youtubeLink} target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                        <i className='fa-brands fa-youtube'></i>
                      </a>
                    )}
                  </div>

                  <div className='button flex'>
                    <button>
                      <i className='fa fa-envelope'></i>
                      Message
                    </button>
                    <Link to={`/profile/${val._id}`}><button className='btn3'>View Profile</button></Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Team
