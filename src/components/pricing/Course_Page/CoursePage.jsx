import React from 'react'
import { courses } from '../../../dummydata'
import './CoursePage.css'


function CoursePage2() {
    const handleApplyNow = () => {
        // You can optionally perform any other actions before redirecting
        // For example, tracking the button click event
    
        // Redirect to the Google Form URL
        window.location.href = 'https://docs.google.com/forms/d/e/1FAIpQLScKVKk43S9SuG7X7tg3gVz9s7TnKA39JmRjOpWXAB3wMrpgxA/viewform?usp=sf_link';
      };
    return (
        <div className='container-fluid' style={{backgroundColor:"#4ebfb6", width:"100%",margin:"0px",marginRight:"0px",fontFamily:"cursive"}}>
            <div class="row" style={{ width: "90vw", marginTop: "5vh",borderRadius:"25px"}}>

                <div class="col" style={{paddingLeft:"5vw",borderRadius:"25px"}}>
                    <div className="card-body" style={{borderRadius:"25px"}}>
                        <h1 className="card-title" style={{textAlign:"center",fontSize:"38px",paddingTop:"25px",fontFamily:"cursive"}}>{courses[0].title}</h1>
                        <p className="card-text" style={{textAlign:"center",paddingTop:"45px" }}>{courses[0].duration}</p>
                        {courses[0].price && <p className="card-text" style={{textAlign:"center" }}> Price: {courses[0].price}</p>}
                        <ul className="list-group list-group-flush feature" style={{borderRadius:"15px",boxShadow:"-moz-initial"}}>
                            {courses[0].features.map((feature, index) => (
                                <li key={index} className="list-group-item">{feature}</li>
                            ))}
                        </ul>
                        <button className="btn btn-primary mt-3" style={{marginLeft:"12vw",width:"10vw",backgroundColor:"white",color:'#1eb2a6',fontWeight:"bold",fontFamily:"sans-serif"}} onClick={handleApplyNow}>APPLY NOW</button>
                    </div>
                </div>
                <div class="col">
                    <div className="card-body">
                        <h1 className="card-title" style={{textAlign:"center",fontSize:"38px",paddingTop:"25px",fontFamily:"cursive"}}>{courses[1].title}</h1>
                        <p className="card-text" style={{textAlign:"center" }}>{courses[1].duration}</p>
                        {courses[1].price && <p className="card-text" style={{textAlign:"center" }}>Price: {courses[1].price}</p>}
                        <ul className="list-group list-group-flush feature" style={{borderRadius:"15px"}}>
                            {courses[1].features.map((feature, index) => (
                                <li key={index} className="list-group-item">{feature}</li>
                            ))}
                        </ul>
                        <button className="btn btn-primary mt-3" style={{marginLeft:"15vw",width:"10vw",backgroundColor:"white",color:'#1eb2a6',fontWeight:"bold",fontFamily:"sans-serif",marginBottom:"10px"}} onClick={handleApplyNow}>APPLY NOW</button>
                    </div>
                </div>
                <div class="col" style={{width:"50vw",position:"relative",width:"25vw",top:"0vh"}}>
                    <div className="card-body"style={{width:"100%"}}>
                        <h1 className="card-title" style={{textAlign:"center",fontSize:"38px",paddingTop:"25px",fontFamily:"cursive"}}>{courses[2].title}</h1>
                        <p className="card-text" style={{textAlign:"center" }}>{courses[2].duration}</p>
                        {courses[2].price && <p className="card-text" style={{textAlign:"center" }}>Price: {courses[2].price}</p>}
                        <ul className="list-group list-group-flush feature" style={{borderRadius:"15px",marginTop:"7vh"}}>
                            {courses[2].features.map((feature, index) => (
                                <li key={index} className="list-group-item">{feature}</li>
                            ))}
                        </ul>
                        <button className="btn btn-primary mt-3" style={{marginLeft:"15vw",width:"10vw",backgroundColor:"white",color:'#1eb2a6',fontWeight:"bold",fontFamily:"sans-serif",marginBottom:"10px"}} onClick={handleApplyNow}>APPLY NOW</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CoursePage2
