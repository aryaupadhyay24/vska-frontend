import React from "react"
import { blog } from "../../../dummydata"
import "./footer.css"

const Footer = () => {
  const handleClick=(id)=>{
    document.getElementById(id).scrollIntoView();

  }
  return (
    <>
      <section className='newletter'>
        <div className='container flexSB'>
          <div className='left row'>
            <h1>Newsletter - Stay tune and get the latest update</h1>
            <span>Far far away, behind the word mountains</span>
          </div>
          <div className='right row'>
            <input type='text' placeholder='Enter email address' />
            <i className='fa fa-paper-plane'></i>
          </div>
        </div>
      </section>
      <footer>
        <div className='container padding'>
          <div className='box logo'>
            <h1>VSKA WORLD</h1>
            <span>ONLINE EDUCATION & LEARNING</span>
            <p>VSKA WORLD’s mission is to bridge the gap between education and employment, enabling individuals to transform their aspirations into reality.</p>

            <i className='fab fa-facebook-f icon'></i>
            <i className='fab fa-twitter icon'></i>
            <i className='fab fa-instagram icon'></i>
          </div>
          <div className='box link'>
            <h3>Explore</h3>
            <ul>
              <li>About Us</li>
              <li>Services</li>
              <li>Courses</li>
              <li>Blog</li>
              <li>Contact us</li>
            </ul>
          </div>
          <div className='box link'>
            <h3>Quick Links</h3>
            <ul>
              <li>Contact </li>
              <li>Pricing</li>
              <li>Terms & Conditions</li>
              <li>Privacy</li>
              <li>Feedbacks</li>
            </ul>
          </div>
          <div className='box'>
            <h3>Recent Post</h3>
            {blog.slice(0, 3).map((val) => (
              <div className='items flexSB'>
                <div className='img'>
                  <img src={val.cover} alt='' />
                </div>
                <div className='text'>
                  <span>
                    <i className='fa fa-calendar-alt'></i>
                    <label htmlFor=''>{val.date}</label>
                  </span>
                  <span>
                    <i className='fa fa-user'></i>
                    <label htmlFor=''>{val.type}</label>
                  </span>
                  <h4>{val.title.slice(0, 40)}...</h4>
                </div>
              </div>
            ))}
          </div>
          <div className='box last'>
            <h3>Have a Questions?</h3>
            <ul>
              <li>
                <i className='fa fa-map'></i>
                302, G-10, D-6, Vasant Kunj, New Delhi-110070
              </li>
              <li>
                <i className='fa fa-phone-alt'></i>
                +91-9990223338
              </li>
              <li>
                <i className='fa fa-paper-plane'></i>
                Info@vskaworld.com
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className='legal'>
        <p>
        Copyright ©️ 2023 <i className='fa fa-heart'></i> VSKA World Pvt. Ltd. || All Rights Reserved ||  
        </p>
      </div>
      {/* <div className='container-fluid' style={{height:"30vh",backgroundColor:"#1eb2a6",marginTop:"110px"}}>
        <div style={{marginTop:"32px",textAlign:"center"}}>
        <i class="fa fa-angle-up fa-2x social" aria-hidden="true" style={{marginTop:"58px"}} onClick={()=>handleClick("thisnavbar")}></i>
        </div>
        <div style={{marginTop:"42px"}}>
      <div style={{ display: "flex", flexDirection: "row",justifyContent:"center", marginTop: "30px" }}>
        <a href="https://www.linkedin.com/in/arya-upadhyay-18783a232"><i class="fa-brands fa-linkedin social" style={{ fontSize: "29px", marginRight: "48px"}}></i></a>
        <a href="https://github.com/aryaupadhyay24"><i class="fa-brands fa-github social" style={{ fontSize: "29px", marginRight: "48px"}}></i></a>
        {/* <a href="/"><i class="fa-brands fa-youtube social" style={{ fontSize: "29px", marginRight: "48px" }}></i></a> */}
        {/* <a href="Resume_AryaUpadhyay.pdf"  download="Resume_AryaUpadhyay"><i class="fa-solid fa-file social" style={{ fontSize: "29px"}}></i></a> */}
      {/* </div> */}
      {/* </div> */}
    {/* </div> */} */
    </>
  )
}

export default Footer
