import "./login.scss";
import React, { useState } from "react";
import {  Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      const res = await axios.post("https://vska-backend-2.onrender.com/api/login", { email, password });



      
      console.log(res.data.authToken);
      // setUser(data.user);
      localStorage.setItem("token", res.data.authToken);
      localStorage.setItem("isAdmin", res.data.isAdmin);
      localStorage.setItem("email",res.data.email);
      console.log(localStorage.getItem("email"));
      console.log(res.data.isAdmin,"    yahab");
      
      if(res.data.isAdmin==='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjYyMmM0MWM4MGUwMjcyMzBhYTQ2ZTA1In0sImlhdCI6MTcxMzU1NDQ2MH0.-H8sEpMUSd1KcMv-9b40KfI8WPqs9zWRxfQBe8xOO-o'){
        navigate('/admin')
      }
      else{
        navigate("/")
      }
      
      console.log("line reached")
    } catch (err) {
      console.log("error is present")
      setError(err);
      console.log(err)
    } finally {
      console.log("came out of the error hell")
      setIsLoading(false);
      console.log("done")
    }
  };


  return (
        <form onSubmit={handleSubmit} style={{margin:"10vh",display:"flex",alignItems:"center",marginLeft:"33vw",border:"solid 4px #1eb2a6"}}>
          <h2>Welcome Back!</h2>
          <div className="input-div">
            {/* <label htmlFor="email" className="">Email Address</label> */}
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            {/* <MdOutlineMailOutline className="input_icons" /> */}

          </div>
          <div className="input-div">
            {/* <label htmlFor="password" className="">Password</label> */}
            <input
              type="password"
              id="password"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {/* <BsKey className="input_icons" /> */}
          </div>
          {error && <p style={{ color: "red" }}>{error}</p>}
          <button type="submit" disabled={isLoading} className="btn">
            {isLoading ? "Loading..." : "Login"}
          </button>
          <div className="border-div">
            <span>Are you new to VSKAWorld!?</span> 
            <span> 
                <Link to ='/register'>Sign Up</Link>
            </span> 
          </div>
        </form>
  );
}

export default Login;
