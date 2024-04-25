import React from 'react'
import { upcomingbatches } from '../../../dummydata'
import Heading from '../../common/heading/Heading'
import { upcoming } from '../../../dummydata'
import { useEffect, useState } from "react"
import "./style.css"

function UpcomingBatches() {
  const [data, setData] = useState([])
  let apiurl = "https://vska-backend-2.onrender.com/api/courses";
  // setloading(true)

  const fetchdata = () => {
      fetch(apiurl).then((response) => {
          // console.log("sdsfgb ",response.json())
          return response.json();
      }).then((element) => {
          console.log(element, " zbn")
          let p = element
          console.log(p, "  pa ka data")
          // setloading(false)
          // console.log(p);
          setData(p);

          // p&&p.map((d)=>{
          //     console.log(d)
          // })

      })
  }
  useEffect(()=>{
      fetchdata();
      console.log(data)
  },[])
  return (
    <div>
      
      <section className='testimonal padding upperclass'>
        <div className='container '>
          <Heading subtitle='Upcoming Batches' title='' />

          <div className='content grid2 mydef'>
            {data && data.slice(0,3).map((val) => (
              <div className='items shadow'>
                <div className='box flex' style={{display:"flex",flexDirection:"column",width:"23vw",fontSize:"22px"}} >
                  <div style={{fontFamily:"cursive",fontWeight:"Bold",textAlign:"center",paddingBottom:"15px"}}>
                      {val.Date}
                  </div>
                  <div style={{fontFamily:"sans-serif",fontWeight:"Bold",textAlign:"center",paddingBottom:"35px"}}>
                    {val.Time}

                  </div>
                  <div style={{fontFamily:"cursive",fontWeight:"Bold",textAlign:"center"}}>
                    {val.Name}

                  </div>
                  <div style={{fontFamily:"cursive",fontWeight:"Bold",textAlign:"center"}}>
                    {val.Role}
                  </div>
                  <div style={{fontFamily:"cursive",fontWeight:"Bold",textAlign:"center"}}>
                    {val.Company}
                  </div>
                  
                </div>
                
              </div>
            ))}
          </div>
        </div>
      </section>


    </div>
  )
}
{/* <i className='fa fa-calendar-alt'></i> */ }

export default UpcomingBatches
