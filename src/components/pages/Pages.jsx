import React from "react"
import Header from "../common/header/Header"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from "../home/Home"
import Footer from "../common/footer/Footer"
import About from "../about/About"
import Blog from "../blog/Blog"
import Features from "../Features/Features"
import Contact from "../contact/Contact"
import Join from "../home/Join_Us/join_us"
import LoginCompany from "../logincompany/logincompany"
import LoginCreator from "../logincreator/logincreator"
import RegisterCreator from "../logincreator/registrationcreater"
import RegisterCompany from "../logincompany/registercompany"
import Team from "../team/Team"
import Profile from "../profile/profile"

// import LoginCreator from "../logincompany/LoginCreator"; 
// import LoginCompany from "../logincreator/LoginCompany"; 

const Pages = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/Features' component={Features} />
          <Route exact path='/blog' component={Blog} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/Join' component={Join} />
          {/* <Route exact path='/login-creator' element={<LoginCreator />} /> */}
          <Route exact path='/login-company'component={LoginCompany} />
          <Route exact path='/login-creator'component={LoginCreator} />
          <Route exact path='/register-creator'component={RegisterCreator} />
          <Route exact path='/register-company'component={RegisterCompany} />
          <Route exact path='/creators'component={Team} />
          <Route exact path="/profile/:id" component={Profile}/>
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default Pages
