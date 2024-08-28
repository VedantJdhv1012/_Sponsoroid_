import React from "react"
// import { footer } from "../../data/Data"
import "./footer.css"
import { Link } from "react-router-dom"


const Footer = () => {
  return (
    <>
      <section className='footerContact'>
        <div className='container'>
          <div className='send flex'>
            <div className='text'>
              <h1>Do You Have Questions ?</h1>
              <p>We'll help you to grow your career and growth.</p>
            </div>

            <Link to="/contact"><button className='btn5'> 
        <span >Contact Us</span> </button>
          </Link> 
          </div>
        </div>
      </section>

      <footer>
        <div className='container'>
          <div className='box'>
            <div className='logo'>
            <h1>SPONSOROID</h1>
            <h3>MADE WITH LOVE 🤍</h3>
            <h3>IIT ISM DHANBAD</h3>
              <p>Receive updates, hot collaboration, offers sent straignt in your inbox every month</p>

              <div className='input flex'>
                <input type='text' placeholder='Email Address' />
                <button>Subscribe</button>
              </div>
            </div>
          </div>

          {/* {footer.map((val) => (
            <div className='box'>
              <h3>{val.title}</h3>
              <ul>
                {val.text.map((items) => (
                  <li> {items.list} </li>
                ))}
              </ul>
            </div>
          ))} */}
        </div>
      </footer>
      <div className='legal'>
        <span>© 2024, Designd By Us.</span>
      </div>
    </>
  )
}

export default Footer
