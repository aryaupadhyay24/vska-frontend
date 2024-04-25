import React from "react"
import Back from "../common/back/Back"
import CoursesCard from "./CoursesCard"
import OnlineCourses from "./OnlineCourses"
import CoursePage2 from "../pricing/Course_Page/CoursePage"
import Faq from "../pricing/Faq"

const CourseHome = () => {
  return (
    <>
      <Back title='Explore Courses' />
      <img src="/images/courses/online/vskadatascience.png" alt="Your Image" style={{ width: '100vw',height:"80vh"}}  />
      <img src="/images/courses/online/vskaprogram.png" alt="Your Image" style={{ width: '100vw',height:"80vh"}}  />
      {/* <CoursesCard /> */}
      <CoursePage2 />
      <Faq/>

      
    </>
  )
}

export default CourseHome
