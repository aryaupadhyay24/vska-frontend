import React, { useState } from "react"
import { Link } from "react-router-dom"
import "./header.css"
import { useNavigate } from "react-router-dom";

const Head = () => {
  const navigate = useNavigate();
  let authToken=localStorage.getItem("token")
  const [count, setCount] = useState(0);
  
  const handleLogin = () => {
    if (!authToken) {
      // If authToken is present, redirect to /login
      navigate('/login');
    } else {
      // If authToken is not present, delete it
      localStorage.removeItem("token");
      localStorage.removeItem("isAdmin");
      localStorage.removeItem("email");
      console.log(localStorage.getItem("token"))
      authToken=null
      console.log("abhi niche hai")
      setCount(count+1);
      navigate('/')
      // You may also want to redirect to another page or update state to reflect logout
    }
  };
  

  return (
    <>
      <section className='head'>
        <div className='container flexSB' id="thisnavbar">
          <div className='logo'>
            <img src='./images/blog/Transparent Logo.png' alt='' className="vskalogo" />
          </div>

          <div className='social'>
            <i className='fab fa-facebook-f icon'></i>
            <a href="https://www.instagram.com/theayushbharadwaja/" ><i className='fab fa-instagram icon'></i></a>

            <a href="https://www.instagram.com/theayushbharadwaja/" ><i className='fab fa-youtube icon'></i></a>
            {/* <li> */}
            {/* <Link to='/login' style={{ color: "black" }}><i className='fab fa-twitter icon'>Login</i></Link> */}
            {/* </li> */}
            <a style={{width:"8vw"}}>
              {!authToken ? (
                <button onClick={handleLogin} style={{position:"absolute",top:"-2.2vh",borderRadius:"30px"}}>Login</button>
              ) : (
                <button onClick={handleLogin} style={{position:"absolute",top:"-2.2vh",borderRadius:"50px",}}>Logout</button>
              )}
            </a>

          </div>
        </div>
      </section>
    </>
  )
}

export default Head
