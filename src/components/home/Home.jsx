import React, { useEffect, useState } from "react";
import Awards from "./awards/Awards";
import Featured from "./featured/Featured";
import Hero from "./hero/Hero";
import Join from "./Join_Us/join_us";
import Going from "./Join_Us/going";
import Contact from "../contact/Contact";


// import Recent from "./recent/Recent";
// import Team from "./team/Team";

const Home = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  useEffect(() => {
    window.scrollTo(0, 0);

    // Check for token in localStorage
    const token = localStorage.getItem("token");

    // Set login status based on token presence
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  return (
    <>
      <Hero />
      <Featured />
      {isLoggedIn ? <Going /> : <Join />}
      <Awards />
      <Contact />
    </>
  );
};

export default Home;
