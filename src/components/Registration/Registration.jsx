import "./registration.scss";
import React, { useState } from "react";
import { Link,useNavigate} from "react-router-dom";
import axios from "axios";

function Registeration() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   setIsLoading(true);
  //   try {
  //     await axios.post("http://localhost:80/api/auth", { name, email, password });
  //     setError("");
  //     navigate("/");
  //   } catch (err) {
  //     setError(err.response.data.message);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };
  const handleSubmit=async (e)=>{
    e.preventDefault();
    
    console.log("ruko dekhteh haiemail password sahi ai")
    // jaise hi submit pe click ho 
    // fetch se pata karo sahi hai login wale endpoint se
    const response = await fetch('http://localhost/api/auth', {
        method: 'POST',
        headers: {


            'Content-Type': 'application/json',


        },
        body: JSON.stringify({name,email,password})

    });
    const json=await response.json();
    
    if(response.json){
        const token=json.authToken;
        localStorage.setItem('token',token);
        console.log(localStorage.getItem('token'));
        navigate("/");
    }
    else{
        console.log(json.msg);
    }
    


    

}

  return (
        <form onSubmit={handleSubmit} style={{margin:"10vh",display:"flex",alignItems:"center",marginLeft:"33vw",border:"solid 4px #1eb2a6",marginTop:"12vh",height:"55vh"}}>
          <h2>Register and Inprove your Workflow</h2>
          <div className="input-div">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="Name"
            />
            {/* <label htmlFor="email" className="">Email Address</label> */}
          </div>
          <div className="input-div">
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
            {isLoading ? "Loading..." : "Sign Up"}
          </button>
          <div className="border-div">
            <span>Already User of DocAI?</span> 
            <span> 
                <Link to ='/login'>Sign In</Link>
            </span> 
          </div>
        </form>
  );
}

export default Registeration;
