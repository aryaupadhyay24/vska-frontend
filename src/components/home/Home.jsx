import React from "react"
import AboutCard from "../about/AboutCard"
import Hblog from "./Hblog"
import HAbout from "./HAbout"
import Hero from "./hero/Hero"
import Hprice from "./Hprice"
import Testimonal from "./testimonal/Testimonal"
import Contact2 from "../contact/Contact2"
import KeyFeature from "./KeyFeature.jsx"
import Recruiter from "./Recruiter.jsx"
import Profile from "./Profile.jsx"
import Faq from "../pricing/Faq.jsx"
import UpcomingBatches from "./UpcomingBatches/UpcomingBatches.jsx"
import CoursePage from "../pricing/Course_Page/Courses_offer.jsx"
import CoursePage2 from "../pricing/Course_Page/CoursePage.jsx"
import Certificate from "./Certificate.js"
import Schedule from "./Schedule.js"

const Home = () => {
  return (
    <>
      <Hero />
      <AboutCard />
      {/* <HAbout /> */}
      <CoursePage2/>
      <KeyFeature/>
      <Recruiter />
      <Profile/>
      <Schedule/>
      <Certificate/>
      <Faq/>
      <UpcomingBatches/>
      <Testimonal />
      {/* <Hblog /> */}

      {/* <Hprice /> */}
      {/* <Contact2/> */}

    </>
  )
}

export default Home
