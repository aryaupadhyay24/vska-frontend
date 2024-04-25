import React from "react"
import Heading from "../../common/heading/Heading"
import "./Hero.css"
import { useNavigate } from "react-router-dom"


const Hero = () => {
  const navigate=useNavigate();
  const redirectToCourses = () => {
    console.log("dsafdbgf")
    navigate('/courses'); // Navigate to /courses route
  };
  const redirectToAbout = () => {
    console.log("dsafdbgf")
    navigate('/courses'); // Navigate to /courses route
  };
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <div className='row'>
            <div className="vskaworld">
            <Heading subtitle='WELCOME TO VSKAWORLD' title='Best Online Education Expertise' />
            </div>
            <p>VSKA WORLD’s mission is to bridge the gap between education and employment, enabling individuals to transform their aspirations into reality. With a focus on quality, accessibility, and innovation, we aim to empower learners worldwide to thrive in the exciting field of data science and beyond.|</p>
            <div className='button'>
              <button className='primary-btn' onClick={redirectToAbout}>
                GET STARTED NOW <i className='fa fa-long-arrow-alt-right'></i>
              </button>
              <button className='primary-btn' onClick={redirectToCourses}>
                VIEW COURSE <i className='fa fa-long-arrow-alt-right'></i>
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className='margin'></div>
    </>
  )
}

export default Hero
