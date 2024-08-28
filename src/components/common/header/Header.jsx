import React, { useState,useEffect } from "react"
import { useLocation } from 'react-router-dom';
import "./header.css"
import { nav } from "../../data/Data"
import { Link } from "react-router-dom"


  
const Header = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  const [navList, setNavList] = useState(false)

  return (
    <>
      <header>
        <div className='container flex'>
          <div className='logo'>
          <h2>
              <Link to='/'><span> SPONSOROID </span></Link>
            </h2>          </div>
          <div className='nav'>
            <ul className={navList ? "small" : "flex"}>
              {nav.map((list, index) => (
                <li key={index}>
                  <Link to={list.path}>{list.text}</Link>

                </li>
              ))}
            </ul>
          </div>
         
        
          <Link to="/Join"><button component='Link'className='button flex'> 
               <div  className='btn1'>
              <i className='fa fa-sign-out'></i>
              
        <span className="join">Join Us</span> 
        </div> </button>  </Link> 
         
         
          {/* <div className='button flex'>
           
           <button className='btn1' href='/join_us' >
              <i className='fa fa-sign-out'></i> Join us
            </button> 
          </div> */}

          <div className='toggle'>
            <button onClick={() => setNavList(!navList)}>{navList ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}</button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header

