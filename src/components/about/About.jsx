import React, { useEffect } from "react";
import Back from "../common/Back";
import Heading from "../common/Heading";
import img from "../images/about.jpg";
import "./about.css";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <section className='about'>
        <Back name='About Us' title='About Us - Who We Are?' cover={img} />
        <div className='container flex mtop'>
          <div className='left row'>
            <Heading title='Our Story' subtitle='Check out our company story and work process' />

            <p>Founded on the belief that the future of marketing lies in genuine, creative partnerships, SPONSOROID was created to simplify the process of finding and managing sponsorships. With a deep understanding of the challenges faced by both creators and companies, we developed a platform that not only connects the right people but also provides the tools and insights needed to make every collaboration a success.</p>
          </div>
          <div className='right row'>
            <img src='./immio.jpg' alt='' />
          </div>
        </div>
        <div className='container flex mtop'>
          <div className='left row'>
            <Heading title='Our Mission' />

            <p>At SPONSOROID, our mission is to redefine the way creators and brands work together. We strive to create an environment where creativity is nurtured, opportunities are accessible, and collaborations are seamless. By providing a platform that prioritizes transparency, security, and efficiency, we help both creators and companies achieve their goals and build lasting relationships.</p>
            <Heading subtitle='Why Choose Us?' />
            <ul>
              <li>Tailored Matches: Our intelligent matching system ensures that creators and brands find the perfect fit for their collaboration needs.</li>
              <li>Comprehensive Tools: From contract management to performance analytics, our platform offers all the tools needed to manage successful partnerships.</li>
              <li>Global Reach: With a diverse network of creators and companies, SPONSOROID opens up opportunities on a global scale.</li>
              <li>Commitment to Security: We prioritize the privacy and security of our users, ensuring that all interactions are protected and confidential.</li>
            </ul>
          </div>
        </div>
        <div className='container flex mtop'>
          <div className='left row'>
            <Heading title='Join Us' />

            <p>Whether you’re a content creator looking to monetize your passion or a company seeking authentic voices to represent your brand, SPONSOROID is your go-to platform for creating meaningful and impactful collaborations. Join us and be part of a community that’s shaping the future of sponsorships.</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
