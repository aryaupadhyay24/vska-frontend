import React from "react"
import Heading from "../common/heading/Heading"
import "./about.css"
import { homeAbout } from "../../dummydata"
import Awrapper from "./Awrapper"

const AboutCard = () => {
  return (
    <>
      <section className='aboutHome'>
        <div className='container flexSB'>
          <div className='left row'>
            <img src='./images/about.webp' alt='' />
          </div>
          <div className='right row'>
            <Heading subtitle='LEARN ANYTHING' title='Benefits About Online Learning Expertise' />
            <div className='items' style={{marginTop:"-5px"}}>
              {homeAbout.map((val) => {
                return (
                  <div className='item flexSB' style={{fontSize:"2px"}}>
                    <div className='img'>
                      <img src={val.cover} alt='' />
                    </div>
                    <div className='text'style={{marginTop:"-5px"}} >
                      <h2 style={{marginTop:"-5px"}}>{val.title}</h2>
                      <p style={{fontSize:"16px"}}>{val.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
        <img src="/images/courses/online/vskaaboutus.png" alt="Your Image" style={{ width: '100vw',height:"100vh"}}  />
        <img src="/images/courses/online/vskamessage.png" alt="Your Image" style={{ width: '100vw',height:"100vh"}}  />
      </section>
      {/* <Awrapper /> */}
    </>
  )
}

export default AboutCard
