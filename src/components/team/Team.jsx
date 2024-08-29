import React, { useEffect, useState } from "react"
import Heading from "../common/Heading"
import { team } from "../data/Data"
import "./team.css"
import { Link } from 'react-router-dom'; // Use Link from react-router-dom for internal routing
import axios from "axios";


const Team = () => {
  useEffect(() => {
    if (
      localStorage.getItem("token") == null ||
      localStorage.getItem("token") == undefined
    ) {
      window.location.href = `/register-creator`;
    }
  }, [localStorage.getItem("token")]);

  const [creators, setCreators] = useState([]);


  

  useEffect(() => {
    try {
      axios.get('http://localhost:2000/api/v1/creator/getAll')
        .then((res) => setCreators(res.data))
        // console.log(creators);
    }
    catch (err) {
      console.log(err);
    }
  }, creators)

  return (
    <>
      <section className='team background'>
        <div className='container'>
          <Heading title='Explore Top Creators' subtitle='Discover and connect with the best in your industry—sorted by expertise for seamless collaborations.' />

          <div className='content mtop grid3'>
            
          
           {creators.map((val, index) => (
              <div className='box' key={index}>
                <div className='details'>
                    

                  <div className='img'>
                    <img src={"http://localhost:2000/images/" + val.avatar} alt='' />
                    <i className='fa-solid fa-circle-check'></i>
                  </div>
                  <i className='fa fa-video'></i>
                  <label>{val.TypeofContent}</label>
                  <h4>{val.name}</h4>


                   <div className="social-links">
            {val.linkedin && (
              <a href={val.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
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
