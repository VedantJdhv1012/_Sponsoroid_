import React from "react"
import Awards from "./awards/Awards"
import Featured from "./featured/Featured"
import Hero from "./hero/Hero"
import Join from "./Join_Us/join_us"
import Contact from "../contact/Contact"
// import Recent from "./recent/Recent"
// import Team from "./team/Team"

const Home = () => {
  return (
    <>
      <Hero />
      <Featured />
        <Join />
      <Awards />
      <Contact />
    </>
  )
}

export default Home
