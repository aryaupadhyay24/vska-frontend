import React from "react"
import { useEffect,useState } from "react"
import { UserList } from "../../../dummydata"
import { useNavigate } from "react-router-dom";


const CardOnCard = (props) => {
    console.log(props.val)
    const navigate = useNavigate();
    const val=props.val
    const handleDetailClick = (email) => {
        // Redirect to UserDetail component and pass email as a prop
        console.log("yaha ",email)
        navigate(`/user-detail/${email}`);
    };
  return (
    <>
        <div className='items shadow' >
          {/* <div className='img' style={{fontSize:"12px",width:"18px"}}>
            <img src="./images/team/t1.webp" alt='' />
          </div> */}
          <div className='text' style={{marginLeft:"15px",textAlign:"center",fontWeight:"bold",fontSize:"16px"}}>
            <div className='admin '>
              <div>
                <i className='fa fa-user'></i>
                <label htmlFor=''>{val.name}</label>
              </div>
              <div>
                <i className='fa fa-calendar-alt'></i>
                <label htmlFor=''>{val.email}</label>
              </div>
              <div>
                {/* <i className='fa fa-comments'></i> */}
                {/* <label htmlFor=''>{val.certificates && val.certificates}</label> */}
                <button type="button" class="btn btn-secondary" onClick={() => handleDetailClick(val.email)}>Get Detail</button>
              </div>
            </div>
            <h1>{val.title}</h1>
            <p>{val.desc}</p>
          </div>
        </div>
    </>
  )
}

export default CardOnCard
